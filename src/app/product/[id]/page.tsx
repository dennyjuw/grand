import ProductImage from '@/components/product/product-image/product-image.component';

export default async function ProductDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData(params.id);
  const { id, title, brand, imageUrl, description, price, unit } = data;

  return (
    <>
      <h1>{title}</h1>

      <div className="flex">
        <ProductImage image={imageUrl} />
        <div className="">
          <div className="">{brand}</div>
          <div className="">${price}</div>
          Panel
        </div>
      </div>

      <div>
        <h2>Description</h2>
        <p>{description}</p>
      </div>
    </>
  );
}

async function getData(productId: string) {
  // add 500ms delay - to demonstrate suspense
  await new Promise((r) => setTimeout(r, 500));

  const res = await fetch(`http://localhost:3000/mock/data/product/123.json`, {
    next: { revalidate: Number(process.env.FETCH_CACHE_DURATION) },
  });

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

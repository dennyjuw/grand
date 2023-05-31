import Breadcrumb from '@/components/breadcrumb/breadcrumb.component';
import CategoryTile from '@/components/category/category-tile/category-tile.component';
import Container from '@/components/container/container.component';
import ProductTile from '@/components/product/product-tile/product-tile.component';

export default async function BrowseCategoryPage({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const data = await getData(params.categoryId);
  const { categoryName, result } = data;

  return (
    <>
      <Breadcrumb />

      <h1>{categoryName}</h1>

      <Container>
        <CategoryTile />
        <CategoryTile />
        <CategoryTile />
      </Container>

      <Container>
        {result &&
          result.map((res: any, i: number) => <ProductTile key={i} {...res} />)}
      </Container>
    </>
  );
}

async function getData(categoryId: string) {
  const res = await fetch(
    `http://localhost:3000/mock/data/${categoryId}.json?id=${categoryId}`,
    { next: { revalidate: Number(process.env.FETCH_CACHE_DURATION) } }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

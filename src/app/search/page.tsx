import Container from '@/components/container/container.component';
import ProductTile from '@/components/product/product-tile/product-tile.component';

export default async function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined };
}) {
  const { term } = searchParams;

  if (!term) {
    return (
      <>
        <h1>Search</h1>
        <div>Please enter search term</div>
      </>
    );
  } else {
    const data = await getData(term);
    const { result } = data;

    return (
      <>
        <h1>Search for {term}</h1>

        <Container>
          {result &&
            result.map((res: any, i: number) => (
              <ProductTile key={i} {...res} />
            ))}
        </Container>
      </>
    );
  }
}

async function getData(term: string) {
  // add 500ms delay - to demonstrate suspense
  await new Promise((r) => setTimeout(r, 500));

  const res = await fetch(
    `http://localhost:3000/mock/data/search.json?term=${term}`,
    { cache: 'no-store' }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

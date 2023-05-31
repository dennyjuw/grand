import Container from '@/app/components/container/container.component';
import ProductTile from '@/app/components/product/product-tile/product-tile.component';

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
          {result && result.map((_: any, i: number) => <ProductTile key={i} />)}
        </Container>
      </>
    );
  }
}

async function getData(term: string) {
  const res = await fetch(
    `http://localhost:3000/mock/data/search.json?term=${term}`
  );

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

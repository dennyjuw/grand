// import type { GetServerSideProps } from 'next';

import Container from '@/app/components/container/container.component';
import ProductTile from '@/app/components/product/product-tile/product-tile.component';

export default function Search({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { term } = searchParams;

  if (!term) {
    return (
      <>
        <h1>Search</h1>
        <div>Please enter search term</div>
      </>
    );
  }

  return (
    <>
      <h1>Search for {term}</h1>

      <Container>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </Container>
    </>
  );
}

// export const getServerSideProps: GetServerSideProps = async ({
//   req,
//   query,
// }) => {
//   console.log(req, query);
//   const res = await fetch('https://api.github.com/repos/vercel/next.js');
//   const repo = await res.json();
//   return { props: { repo } };
// };

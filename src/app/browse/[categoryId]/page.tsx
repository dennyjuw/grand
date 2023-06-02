import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import Breadcrumb from '@/components/breadcrumb/breadcrumb.component';
import CategoryTile from '@/components/category/category-tile/category-tile.component';
import Container from '@/components/container/container.component';
import ProductTile from '@/components/product/product-tile/product-tile.component';

type Props = {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const data = await getData(params.categoryId);
  const { categoryName } = data;

  return {
    title: categoryName,
  };
}

export default async function BrowseCategoryPage({
  params,
  searchParams,
}: Props) {
  const data = await getData(params.categoryId);

  if (!data) {
    notFound();
  }

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
  // add 500ms delay - to demonstrate suspense
  await new Promise((r) => setTimeout(r, 500));

  const res = await fetch(
    `http://localhost:3000/mock/data/${categoryId}.json?id=${categoryId}`,
    { next: { revalidate: Number(process.env.FETCH_CACHE_DURATION) } }
  );

  // Recommendation: handle errors
  if (!res.ok) {
    return undefined;
    // This will activate the closest `error.js` Error Boundary
    // throw new Error('Failed to fetch data');
  }

  return res.json();
}

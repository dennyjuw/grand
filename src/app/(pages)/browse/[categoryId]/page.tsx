import Breadcrumb from '@/app/components/breadcrumb/breadcrumb.component';
import CategoryTile from '@/app/components/category/category-tile/category-tile.component';
import Container from '@/app/components/container/container.component';
import ProductTile from '@/app/components/product/product-tile/product-tile.component';

export default function BrowseCategoryPage({
  params,
  searchParams,
}: {
  params: { categoryId: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <Breadcrumb />

      <h1>{params.categoryId}</h1>

      <Container>
        <CategoryTile />
        <CategoryTile />
        <CategoryTile />
      </Container>

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

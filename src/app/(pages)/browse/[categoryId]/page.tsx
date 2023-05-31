import Breadcrumb from '@/app/components/breadcrumb/breadcrumb.component';
import ProductTileContainer from '@/app/components/product/product-tile-container/product-tile-container.component';
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
      <ProductTileContainer>
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
        <ProductTile />
      </ProductTileContainer>
    </>
  );
}

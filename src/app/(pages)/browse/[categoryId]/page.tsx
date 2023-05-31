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
      <h1>Browse category - {params.categoryId}</h1>
      <ProductTileContainer>
        <ProductTile />
      </ProductTileContainer>
    </>
  );
}

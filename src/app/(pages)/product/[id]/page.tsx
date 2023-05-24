export default function ProductDetailPage({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  return (
    <>
      <div>Product id - {params.id}</div>
    </>
  );
}

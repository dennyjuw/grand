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
    </>
  );
}

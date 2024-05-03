export default function CategoryProductsPage({ params }) {
  return (
    <div>
      {params.category} : {params.products}
    </div>
  );
}

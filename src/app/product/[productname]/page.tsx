import ProductsList from "@/products/Productslist";

export async function generateStaticParams() {
  return ProductsList.map((product) => ({
    productname: product.ProductName.replace(/\s+/g, '-'),
  }));
}

export default function Page({ params }: { params: { productname: string } }) {
  const Product = ProductsList.filter(
    (product) => product.ProductName.replace(/\s+/g, '-') === `${params.productname}`
  );
  return (
    <main>
      <div className="px-20">
        {Product[0].ProductName}
      </div>
    </main>
  );
}
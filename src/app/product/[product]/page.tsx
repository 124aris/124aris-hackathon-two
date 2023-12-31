import ProductsList from "@/Products/Productslist";

export async function generateStaticParams() {
  return ProductsList.map((product) => ({
    name: product.ProductName,
  }));
}

export default function Page({ params }: { params: { name: string } }) {
  return <div>My Product: {params.name}</div>;
}
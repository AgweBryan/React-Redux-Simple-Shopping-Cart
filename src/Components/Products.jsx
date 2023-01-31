import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div className="">
      <h1 className="text-slate-600 text-2xl mb-3 font-semibold">Products</h1>
      <div className="flex flex-wrap gap-8">
        {products.map((product) => {
          return <Product key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;

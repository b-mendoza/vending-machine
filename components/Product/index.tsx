import { NormalizedProduct } from 'typings/product';

type ProductProps = Omit<NormalizedProduct, 'id'>;

function Product({ name, preparationTime }: ProductProps) {
  return (
    <article>
      <h1>{name}</h1>

      <p>{preparationTime}</p>
    </article>
  );
}

export default Product;

import { Button } from 'antd';
import Image from 'next/image';

import { useBoolean } from 'hooks/useBoolean';

import { NormalizedProduct } from 'typings/product';

type ProductProps = NormalizedProduct & {
  onPrepare?: (productId: string) => void;
};


function Product({ name, preparationTime }: ProductProps) {
  return (
    <article>
      <h1>{name}</h1>

      <p>{preparationTime}</p>
    </article>
  );
}

export default Product;

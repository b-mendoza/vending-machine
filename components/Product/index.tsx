import { Button } from 'antd';
import Image from 'next/image';

import { useBoolean } from 'hooks/useBoolean';

import { NormalizedProduct } from 'typings/product';

type ProductProps = NormalizedProduct & {
  onPrepare?: (productId: string) => void;
};

function Product({
  id,
  name,
  preparationTime,
  thumbnail,
  onPrepare,
}: ProductProps) {
  const [isBeingPrepared, setIsBeingPrepared] = useBoolean({
    initialState: false,
  });

  const handlePrepare = () => {
    if (onPrepare && typeof onPrepare === 'function') {
      setIsBeingPrepared.setTrue();

      setTimeout(() => {
        setIsBeingPrepared.setFalse();
      }, preparationTime * 1000);

      onPrepare(id);
    }
  };

  return (
    <article>
      <Image
        alt={name}
        height={240}
        layout="responsive"
        objectFit="contain"
        priority
        src={thumbnail}
        width={240}
      />

      <Button block loading={isBeingPrepared} onClick={handlePrepare}>
        {name}
      </Button>
    </article>
  );
}

export default Product;

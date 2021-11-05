import { Button } from 'antd';
import Image from 'next/image';

import { useBoolean } from 'hooks/useBoolean';

import { NormalizedProduct } from 'typings/product';

type ProductProps = NormalizedProduct;

function Product({ id, name, preparationTime, thumbnail }: ProductProps) {
  const [isBeingPrepared, setIsBeingPrepared] = useBoolean({
    initialState: false,
  });

  const handlePrepare = async () => {
    const message = (await import('antd/lib/message')).default;

    setIsBeingPrepared.setTrue();

    setTimeout(() => {
      setIsBeingPrepared.setFalse();
    }, preparationTime * 1000);

    await message.loading({
      content: `Preparing ${name} . . .`,
      duration: preparationTime,
      key: id,
    });

    await message.success({
      content: `Your ${name} is Ready to Go!`,
      duration: 1,
      key: id,
    });
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

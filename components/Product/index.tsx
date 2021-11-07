import dynamic from 'next/dynamic';
import Image from 'next/image';

import { useBoolean } from 'hooks/useBoolean';

import { NormalizedProduct } from 'typings/product';

const loadingDivStyles: React.CSSProperties = {
  height: '3.2rem',
};

const LazyButton = dynamic(() => import('antd/lib/button'), {
  loading: () => <div style={loadingDivStyles} />,
});

const LazyText = dynamic(() => import('antd/lib/typography/Text'), {
  loading: () => <div />,
});

type ProductProps = NormalizedProduct;

function Product({ id, name, preparationTime, thumbnail }: ProductProps) {
  const [isBeingPrepared, setIsBeingPrepared] = useBoolean({
    initialState: false,
  });

  const handlePrepare = async () => {
    try {
      const { default: message } = await import('antd/lib/message');

      setIsBeingPrepared.setTrue();

      setTimeout(() => {
        setIsBeingPrepared.setFalse();
      }, preparationTime * 1000);

      await message.loading({
        content: `Preparing ${name}`,
        duration: preparationTime,
        key: id,
      });

      await message.success({
        content: `Your ${name} is/are Ready to Go!`,
        duration: 2,
        key: id,
      });
    } catch {
      console.log('__ERROR__', 'Loading Message module');
    }
  };

  return (
    <article>
      <Image
        alt={name}
        height={240}
        layout="responsive"
        objectFit="scale-down"
        priority
        src={thumbnail}
        title={name}
        width={240}
      />

      <LazyButton
        aria-disabled={isBeingPrepared}
        block
        loading={isBeingPrepared}
        title={`Prepare ${name}`}
        onClick={handlePrepare}
      >
        <LazyText ellipsis>Prepare {name}</LazyText>
      </LazyButton>
    </article>
  );
}

export default Product;

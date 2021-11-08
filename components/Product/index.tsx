import dynamic from 'next/dynamic';
import Image from 'next/image';

import SkeletonButton from 'components/Skeletons/SkeletonButton';

import { useBoolean } from 'hooks/useBoolean';

import { NormalizedProduct } from 'typings/product';

const LazyButton = dynamic(() => import('antd/lib/button'), {
  loading: () => <SkeletonButton />,
});

const LazyText = dynamic(() => import('antd/lib/typography/Text'), {
  loading: () => <div />,
});

type ProductProps = NormalizedProduct & {
  onFinishPreparing?: (productId: string) => void;
  onStartPreparing?: (productId: string) => void;
};

function Product({
  id,
  name,
  preparationTime,
  thumbnail,
  onFinishPreparing,
  onStartPreparing,
}: ProductProps) {
  const [isBeingPrepared, setIsBeingPrepared] = useBoolean({
    initialState: false,
  });

  const handlePrepare = async () => {
    try {
      const { default: notification } = await import('antd/lib/notification');

      notification.config({ duration: 2 });

      notification.info({
        key: id,
        message: `Preparing ${name}`,
        placement: 'topLeft',
      });

      setIsBeingPrepared.setTrue();

      if (onStartPreparing) onStartPreparing(id);

      setTimeout(() => {
        if (onFinishPreparing) onFinishPreparing(id);

        notification.success({
          key: id,
          message: `Your ${name} have been dispatched`,
          placement: 'topRight',
        });

        setIsBeingPrepared.setFalse();
      }, preparationTime * 1000);
    } catch {
      console.log('__ERROR__', 'Loading Notification module');
    }
  };

  return (
    <article>
      <Image
        alt={name}
        height={240}
        layout="responsive"
        objectFit="scale-down"
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

import { Skeleton } from 'antd';

import SkeletonButton from '../SkeletonButton';

import styles from './SkeletonProduct.module.css';

function SkeletonProduct() {
  return (
    <article className={styles.skeleton} data-testid="skeletonProduct">
      <Skeleton.Image className={styles.image__skeleton} />

      <SkeletonButton />
    </article>
  );
}

export default SkeletonProduct;

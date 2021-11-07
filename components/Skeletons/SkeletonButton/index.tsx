import { Skeleton } from 'antd';

import styles from './SkeletonButton.module.css';

function SkeletonButton() {
  return <Skeleton.Input active className={styles.element} />;
}

export default SkeletonButton;

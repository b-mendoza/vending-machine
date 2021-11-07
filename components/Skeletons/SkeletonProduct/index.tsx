import { Skeleton } from 'antd';

import styles from './SkeletonProduct.module.css';

const { Avatar } = Skeleton;

const avatarStyles: React.CSSProperties = {
  minHeight: '24rem',
  height: 'inherit',
  minWidth: '24rem',
  width: 'inherit',
};

const titleStyles: React.CSSProperties = {
  height: '2.2rem',
  margin: 0,
  marginTop: '1rem',
};

function SkeletonProduct() {
  return (
    <article>
      <Avatar
        active
        className={styles.avatarElement}
        shape="square"
        style={avatarStyles}
      />

      <Skeleton active paragraph={false} title={{ style: titleStyles }} />
    </article>
  );
}

export default SkeletonProduct;

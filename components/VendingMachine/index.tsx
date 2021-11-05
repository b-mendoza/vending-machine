import Product from 'components/Product';

import { StyledMachineWrapper } from 'theme/shared';

import { NormalizedProduct } from 'typings/product';

type VendingMachineProps = {
  productList: NormalizedProduct[];
};

function VendingMachine({ productList }: VendingMachineProps) {
  return (
    <StyledMachineWrapper>
      {productList.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </StyledMachineWrapper>
  );
}

export default VendingMachine;

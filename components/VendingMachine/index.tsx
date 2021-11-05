import Product from 'components/Product';

import { NormalizedProduct } from 'typings/product';

import { StyledMachineWrapper } from './styled';

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

import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Product from 'components/Product';

import { StyledContainer, StyledMachineWrapper } from 'theme/shared';

import { NormalizedProduct } from 'typings/product';
import { APIResponse } from 'typings/shared';

function Home() {
  const { data: response, error } = useSWR<APIResponse, Error>(
    process.env.API_URL,
  );

  const [productList, setProductList] = useState<NormalizedProduct[]>([]);

  useEffect(() => {
    if (!response?.data) return;

    const normalizedProductList = response.data.map((product) => {
      const { preparation_time, ...productData } = product;

      return { ...productData, preparationTime: preparation_time };
    });

    setProductList(normalizedProductList);
  }, [response?.data]);

  if (error) return <h1>{error.message}</h1>;

  if (!response) return <h1>Loading . . .</h1>;

  return (
    <StyledContainer>
      <h1>Vending Machine</h1>

      <StyledMachineWrapper>
        {productList.map((product) => (
          <Product key={product.id} {...product} />
        ))}
      </StyledMachineWrapper>
    </StyledContainer>
  );
}

export default Home;

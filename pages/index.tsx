import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import VendingMachine from 'components/VendingMachine';

import { StyledContainer } from 'theme/shared';

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

  if (error)
    return (
      <>
        <Head>
          <title>Focus - Vending Machine</title>
        </Head>

        <h1>{error.message}</h1>
      </>
    );

  if (!response)
    return (
      <>
        <Head>
          <title>Focus - Vending Machine</title>
        </Head>

        <h1>Loading . . .</h1>
      </>
    );

  return (
    <>
      <Head>
        <title>Focus - Vending Machine</title>
      </Head>

      <StyledContainer>
        <h1>Vending Machine</h1>

        <VendingMachine productList={productList} />
      </StyledContainer>
    </>
  );
}

export default Home;

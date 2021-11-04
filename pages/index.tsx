import { useEffect, useState } from 'react';
import useSWR from 'swr';

import { Product } from 'typings/product';
import { APIResponse } from 'typings/shared';

type ProductList = (Omit<Product, 'preparation_time'> & {
  isAvailable: boolean;
  preparationTime: number;
})[];

export default function Home() {
  const { data: response, error } = useSWR<APIResponse, Error>(
    process.env.API_URL,
  );

  const [productList, setProductList] = useState<ProductList>([]);

  useEffect(() => {
    if (!response?.data) return;

    const normalizedProductList = response.data.map((product) => {
      const { preparation_time, ...productData } = product;

      return {
        ...productData,
        isAvailable: true,
        preparationTime: preparation_time,
      };
    });

    setProductList(normalizedProductList);
  }, [response?.data]);

  if (error) return <h1>{error.message}</h1>;

  if (!response) return <h1>Loading . . .</h1>;

  return <div>{JSON.stringify(productList, null, 2)}</div>;
}

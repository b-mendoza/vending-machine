import dynamic from 'next/dynamic';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

import Product from 'components/Product';
import SkeletonProduct from 'components/Skeletons/SkeletonProduct';

import {
  StyledContainer,
  StyledControlPanel,
  StyledMachineWrapper,
} from 'theme/shared';

import { NormalizedProduct, ProductData } from 'typings/product';
import { APIResponse } from 'typings/shared';

const loadingControlPanelStyles: React.CSSProperties = {
  height: '23rem',
};

const LazyButton = dynamic(() => import('antd/lib/button'));

const LazyControlPanel = dynamic(() => import('components/ControlPanel'), {
  loading: () => <div style={loadingControlPanelStyles} />,
});

const LazyResult = dynamic(() => import('antd/lib/result'), {
  loading: ({ error }) =>
    error ? (
      <>
        <h1>500 Network Error</h1>

        <p>😢 WE WERE NOT ABLE TO LOAD YOUR DATA</p>
      </>
    ) : null,
});

const PAGE_DATA = {
  errorTitle: 'Focus - Something Went Wrong',
  heading: 'Vending Machine',
  title: 'Focus - Vending Machine',
};

function Home() {
  const { data: response, error } = useSWR<APIResponse, Error>(
    process.env.API_URL,
  );

  const [panelData, setPanelData] = useState<ProductData[]>([]);

  const [productList, setProductList] = useState<NormalizedProduct[]>([]);

  useEffect(() => {
    if (!response?.data) return;

    const normalizedProductList = response.data.map((product) => {
      const { preparation_time, ...productData } = product;

      return { ...productData, preparationTime: preparation_time };
    });

    setProductList(normalizedProductList);
  }, [response?.data]);

  if (error) {
    const handleReload = () => {
      window.location.reload();
    };

    return (
      <>
        <Head>
          <title>{PAGE_DATA.errorTitle}</title>
        </Head>

        <StyledContainer centerContent>
          <LazyResult
            extra={<LazyButton onClick={handleReload}>Try Again</LazyButton>}
            status="500"
            subTitle="SOMETHING WENT WRONG"
            title="Network Error"
          />
        </StyledContainer>
      </>
    );
  }

  const handleStartPreparing = (productId: string) => {
    const selectedProduct = productList.find(
      (product) => product.id === productId,
    );

    if (!selectedProduct) return;

    if (panelData.some((product) => product.key === productId)) {
      setPanelData((prevState) =>
        prevState.map((product) =>
          product.key === productId
            ? {
                ...product,
                status: 'PREPARING',
                timesDispatched: product.timesDispatched + 1,
              }
            : product,
        ),
      );

      return;
    }

    const { id, name, preparationTime } = selectedProduct;

    const productToAdd: ProductData = {
      key: id,
      name,
      status: 'PREPARING',
      timesDispatched: 1,
      timeToBePrepared: preparationTime,
    };

    setPanelData((prevState) => [productToAdd, ...prevState]);
  };

  const handleFinishPreparing = (productId: string) => {
    setPanelData((prevState) =>
      prevState.map((product) =>
        product.key === productId ? { ...product, status: 'READY' } : product,
      ),
    );
  };

  return (
    <>
      <Head>
        <title>{PAGE_DATA.title}</title>
      </Head>

      <StyledContainer>
        <h1>{PAGE_DATA.heading}</h1>

        <StyledMachineWrapper>
          {!response
            ? new Array<null>(8)
                .fill(null)
                .map((_, index) => <SkeletonProduct key={index} />)
            : productList.map((product) => (
                <Product
                  key={product.id}
                  onFinishPreparing={handleFinishPreparing}
                  onStartPreparing={handleStartPreparing}
                  {...product}
                />
              ))}
        </StyledMachineWrapper>
      </StyledContainer>

      <StyledControlPanel>
        <LazyControlPanel dataSource={panelData} isLoading={!response} />
      </StyledControlPanel>
    </>
  );
}

export default Home;

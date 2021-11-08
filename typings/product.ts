export type NormalizedProduct = Omit<Product, 'preparation_time'> & {
  preparationTime: number;
};

export type Product = {
  id: string;
  name: string;
  preparation_time: number;
  thumbnail: string;
};

export type ProductData = {
  key: string;
  name: string;
  status: 'PREPARING' | 'READY';
  timesDispatched: number;
  timeToBePrepared: number;
};

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
  count: number;
  key: string;
  name: string;
  preparationTime: string;
  status: 'PREPARING' | 'READY';
};

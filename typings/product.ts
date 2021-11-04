export type NormalizedProduct = Omit<Product, 'preparation_time'> & {
  isAvailable: boolean;
  preparationTime: number;
};

export type Product = {
  id: string;
  name: string;
  preparation_time: number;
  thumbnail: string;
};

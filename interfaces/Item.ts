export interface itemInterface {
    id: string;
    title: string;
    price: number;
    images: string[];
    sku?: string;
    manufacturer?: string;
    color?: string;
    material?: string;
    season?: string;
    reason?: string;
    sizes?: [{
      size: string,
      available: boolean,
    }];
    quantity?: string;
    selectedSize?: string
  };

export interface ICatalog {
  title: string | null;
  img: string;
}

export interface ICategory {
  title: string,
  subTitle: string;
  img: string;
}

export interface IProduct {
  img: string;
  title: string;
  id: number;
  price: string;
  status:string;
  complects: string;
  count: number;
  favorite: boolean;
}
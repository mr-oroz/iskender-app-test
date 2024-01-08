// images
import Menu from '../assets/images/menu.png';
import CatalogSkeleton from '../assets/images/catalogSkeleton.png';
import Category1 from '../assets/images/category1.png';
import Category2 from '../assets/images/category2.png';
import Category3 from '../assets/images/category3.png';
import Category4 from '../assets/images/category4.png';
import Category5 from '../assets/images/category5.png';
import Category6 from '../assets/images/category6.png';
import Category7 from '../assets/images/category7.png';
import Category8 from '../assets/images/category8.png';
import Category9 from '../assets/images/category9.png';
import Category10 from '../assets/images/category10.png';
import Category11 from '../assets/images/category11.png';
import Category12 from '../assets/images/category12.png';
import Card from '../assets/images/card.png';

// models
import { ICatalog, ICategory } from '../models/models';
import { IProduct } from '../models/models';

// data
export const Catalog: ICatalog[] = [
  { title: 'Скидки', img: Menu },
  { title: 'Акции', img: Menu },
  { title: 'Распродажа', img: Menu },
  { title: 'Подарки', img: Menu },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
  { title: null, img: CatalogSkeleton },
];

export const Category: ICategory[] = [
  { title: 'Ванны', subTitle: '3000 товаров', img: Category1 },
  { title: 'Смесители', subTitle: '3000 товаров', img: Category2 },
  { title: 'Вытяжки для кухни', subTitle: '3000 товаров', img: Category3 },
  { title: 'Кухонные мойки', subTitle: '3000 товаров', img: Category4 },
  { title: 'Другие', subTitle: '3000 товаров', img: Category5 },
  { title: 'Унитазы', subTitle: '3000 товаров', img: Category6 },
  { title: 'Вытяжки для кухни', subTitle: '3000 товаров', img: Category7 },
  { title: 'Умывальники', subTitle: '3000 товаров', img: Category8 },
  { title: 'Полотенцесушители', subTitle: '3000 товаров', img: Category9 },
  { title: 'Водонагреватели', subTitle: '3000 товаров', img: Category10 },
  { title: 'Душевые', subTitle: '3000 товаров', img: Category11 },
  { title: 'Водонагреватели', subTitle: '3000 товаров', img: Category12 },
  { title: 'Водонагреватели', subTitle: '3000 товаров', img: Category12 },
  { title: 'Полотенцесушители', subTitle: '3000 товаров', img: Category9 },
];

export const Products: IProduct[] = [
  {
    id: 1,
    title: 'Держатель для лейки BOOU PG605 Держатель для лейки BOOU PG605',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 999,
    favorite: false,
  },
  {
    id: 2,
    title: 'Держатель для лейки BOOU PG605 ',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 0,
    favorite: true,
  },
  {
    id: 3,
    title: 'Держатель для лейки ',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 1,
    favorite: false,
  },
  {
    id: 4,
    title: 'Держатель для лейки BOOU PG605 ',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 1,
    favorite: false,
  },
  {
    id: 5,
    title: 'Держатель для лейки BOOU PG605 ',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 1,
    favorite: false,
  },
  {
    id: 6,
    title: 'Держатель для лейки BOOU PG605 ',
    img: Card,
    price: '1294',
    status: 'В наличии',
    complects: 'Комплект',
    count: 1,
    favorite: false,
  },
];

import classes from './ProductList.module.scss';
import { Products } from '../../data/data';
import Product from '../Product/Product';

const ProductList = (props: {active: boolean}) => {
  return (
    <div className="container">
      <div className={classes.carousel}>
        {Products &&
          Products.map((item) => (
            <Product active={props.active} product={item} key={item.id} />
          ))}
      </div>
      <div className={classes.paginations}>
        <div className={classes.pagination}></div>
        <div className={classes.paginationActive}></div>
        <div className={classes.pagination}></div>
      </div>
    </div>
  );
};

export default ProductList;

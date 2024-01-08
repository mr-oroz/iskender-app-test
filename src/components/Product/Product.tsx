import classes from './Product.module.scss';
import { IProduct } from '../../models/models';
import Heart from '../../assets/images/heart.png';

interface TypeProps {
  product: IProduct;
  active: boolean;
}
const Product = (props: TypeProps) => {
  const { img, title, price, complects, count, status } = props.product;
  const { active } = props;
  return (
    <div className={classes.container}>
      <div className={classes.image}>
        <img src={img} alt={img} />
        <div className={classes.favorite}>
          <img src={Heart} alt="Heart" />
        </div>
      </div>
      <div className={classes.title}>{title}</div>
      <div
        style={{ color: active ? 'red' : 'black', display: 'inline-block' }}
        className={classes.price}
      >
        {price} c
      </div>
      {active ? (
        <span
          style={{ textDecoration: 'line-through', color: '#808080', marginLeft: '11px' }}
        >
          {price} c
        </span>
      ) : null}
      <div className={classes.info}>
        <span className={classes.status}>{status}</span>
        <span className={classes.complects}>{complects}</span>
      </div>
      <div className={classes.countBtns}>
        <div className={classes.min}>
          <span>-</span>
        </div>
        <div className={classes.count}>{count}</div>
        <div className={classes.plus}>
          <span>+</span>
        </div>
      </div>
    </div>
  );
};

export default Product;

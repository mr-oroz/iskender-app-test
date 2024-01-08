import classes from './CatalogCard.module.scss';
import { ICatalog } from '../../models/models';

const CatalogCard = (props: ICatalog) => {
  const { title, img } = props;
  return (
    <div className={classes.container}>
      <img src={img} alt="img" />
      {title ? (
        <span className={classes.title}>{title}</span>
      ) : (
        <div className={classes.skeleton}></div>
      )}
    </div>
  );
};

export default CatalogCard;

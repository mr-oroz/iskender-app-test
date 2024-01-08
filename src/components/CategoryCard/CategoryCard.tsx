import { url } from 'inspector';
import { ICategory } from '../../models/models';
import classes from './CategoryCard.module.scss';

const CategoryCard = (props: ICategory) => {
  const { title, subTitle, img } = props;
  return (
    <div
      className={classes.container}
      style={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: 'no-repeat',
        //backgroundSize: '170px',
        backgroundPosition: 'right bottom',
        
      }}
    >
      <div className={classes.listTitle}>
        <span className={classes.title}>{title}</span>
        <span className={classes.subTitle}>{subTitle}</span>
      </div>
    </div>
  );
};

export default CategoryCard;

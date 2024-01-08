import classes from './CategoryList.module.scss';
import { Category } from '../../data/data';
import CategoryCard from '../CategoryCard';

const CategoryList = () => {
  return (
    <div className="container">
      <div className={classes.wrap}>
        {Category &&
          Category.map((item, idx) => (
            <CategoryCard
              key={idx}
              title={item.title}
              subTitle={item.subTitle}
              img={item.img}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryList;

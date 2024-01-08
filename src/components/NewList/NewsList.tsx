import NewCard from '../NewCard';
import classes from './NewsList.module.scss';

const NewsList = () => {
  return (
    <div className="container">
      <div className={classes.carousel}>
        <NewCard />
        <NewCard />
        <NewCard />
      </div>
      <div className={classes.paginations}>
        <div className={classes.pagination}></div>
        <div className={classes.paginationActive}></div>
        <div className={classes.pagination}></div>
      </div>
    </div>
  );
};

export default NewsList;

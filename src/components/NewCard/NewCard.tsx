import classes from './NewCard.module.scss';
import Ellipse1 from '../../assets/images/Ellipse 492.png';
import Ellipse2 from '../../assets/images/Ellipse 491.png';
import News from '../../assets/images/news.png';

const NewCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <div className={classes.discount}>-50%</div>
        <div className={classes.text}>На кухонную мебель</div>
        <div className={classes.btn}>Подробнее</div>
      </div>
      <div className={classes.right}>
        <img src={News} alt="News" />
      </div>
      <img className={classes.ellipse1} src={Ellipse1} alt="Ellipse2" />
      <img className={classes.ellipse2} src={Ellipse2} alt="Ellipse2" />
    </div>
  );
};

export default NewCard;
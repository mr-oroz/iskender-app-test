import classes from './AddressCard.module.scss';
import Next from '../../assets/images/next.png';
import Icon from '../../assets/images/icon.png';
import Clock from '../../assets/images/clock.png';
import Location from '../../assets/images/Location.png';
import Phone from '../../assets/images/phone.png';

const AddressCard = () => {
  return (
    <div className={classes.container}>
      <div className={classes.top}>
        <div className={classes.topLeft}>
          <img src={Icon} alt="Next" />
          <div className={classes.column}>
            <div className={classes.name}>Iskender home</div>
            <div className={classes.openMap}>открыть в карте</div>
          </div>
        </div>
        <div className={classes.next}>
          <img src={Next} alt="Next" />
        </div>
      </div>
      <div className={classes.center}>
        <img src={Location} alt="Location" />
        <div className={classes.textLocation}>
          Кыргызстан, г. Бишкек <br /> ул. Турусбекова A167
        </div>
      </div>
      <div className={classes.bottom}>
        <div className={classes.clock}>
          <img src={Clock} alt="" />
          <div className={classes.time}>08:00 - 22:00</div>
        </div>
        <div className={classes.phone}>
          <img src={Phone} alt="" />
          <div className={classes.phoneNumber}>+996 500 345 345</div>
        </div>
      </div>
    </div>
  );
};

export default AddressCard;

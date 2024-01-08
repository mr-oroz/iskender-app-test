import classes from './Header.module.scss';
import Logo from '../../assets/images/logo.png';
import Burger from '../../assets/images/burger.png';
import Search from '../../assets/images/Search.png';
import Profile from '../../assets/images/Profile.png';
import Cart from '../../assets/images/Cart.png';

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={'container'}>
        <div className={classes.content}>
          <div className={classes.logo}>
            <img className={classes.image} src={Logo} alt="logo" />
          </div>
          <div className={classes.row}>
            <div className={classes.catalog}>
              <img className={classes.burger} src={Burger} alt="Burger" />
              <span className={classes.catalogText}>Каталог</span>
            </div>
            <div className={classes.search}>
              <img className={classes.searchIcon} src={Search} alt="Search" />
              <input placeholder='Поиск' type="text" />
              <span>42903</span>
            </div>
            <div className={classes.auth}>
              <div className={classes.column}>
                <span className={classes.welcomeText}>Добро пожаловать</span>
                <span className={classes.buttonText}>Вход/Регистрация</span>
              </div>
              <div className={classes.icons}>
                <div className={classes.container}>
                  <img className={classes.person} src={Profile} alt="Profile" />
                </div>
                <div className={classes.line}></div>
                <div className={classes.container}>
                  <img className={classes.cart} src={Cart} alt="Cart" />
                <div className={classes.notification}><span className={classes.notificationText}>2</span></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

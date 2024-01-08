import classes from './Footer.module.scss';
import Logo from '../../assets/images/logo.png';
import AppStore from '../../assets/images/appstore.png';
import GoogleStore from '../../assets/images/google.png';
import Whats from '../../assets/images/whats.png';
import Faceebook from '../../assets/images/logo-facebook.png';
import Inst from '../../assets/images/logo-instagram.png';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container">
        <div className={classes.content}>
          <div className={classes.left}>
            <img className={classes.logo} src={Logo} alt="" />
            <div className={classes.text}>
              Первый отечественный бренд Iskender на рынке сантехники от
              компании ОсОО «Стройдом.кг»
            </div>
            <div className={classes.store}>
              <img src={AppStore} alt="AppStore" />
              <img src={GoogleStore} alt="GoogleStore" />
            </div>
          </div>
          <div className={classes.right}>
            <div className={classes.address}>
              <div className={classes.title}>Адреса</div>
              <div className={classes.column}>
                <div className={classes.addresTitle}>ЭлитСтрой</div>
                <div className={classes.street}>ул. Ден-Сяопина 18/1</div>
              </div>
              <div className={classes.column}>
                <div className={classes.addresTitle}>Баткен</div>
                <div className={classes.street}>ул. Льва-Толстого 19</div>
              </div>
              <div className={classes.column}>
                <div className={classes.addresTitle}>ТааТан</div>
                <div className={classes.street}>ул. Лермонтова 6</div>
              </div>
            </div>
            <div className={classes.company}>
              <div className={classes.title}>Компания</div>
              <div className={classes.addresTitle}>Каталог</div>
              <div className={classes.addresTitle}>Избранное</div>
              <div className={classes.addresTitle}>Личный кабинет</div>
            </div>
            <div className={classes.contact}>
              <div className={classes.title}>Контакты</div>
              <div className={classes.column}>
                <div className={classes.addresTitle}>Email:</div>
                <div className={classes.street}>iskender.kg@gmail.com</div>
              </div>
              <div className={classes.column}>
                <div className={classes.addresTitle}>Телефон:</div>
                <div className={classes.street}>+996 (500) 000-104</div>
                <div className={classes.street}>+996 (500) 000-104</div>
                <div className={classes.street}>+996 (500) 000-104</div>
              </div>
              <div className={classes.whats}>
                <img src={Whats} alt="Whats" />
                <div className={classes.whatsText}>WhatsApp</div>
              </div>
            </div>
          </div>
          
        </div>
        <div className={classes.bottom}>
            <div className={classes.bottomText}>
              © 2023 Iskender.kg - Отечественный бренд сантехники
            </div>
            <div className={classes.social}>
              <img className={classes.socialImage} src={Inst} alt="" />
              <img className={classes.socialImage} src={Faceebook} alt="" />
            </div>
          </div>
      </div>
    </div>
  );
};

export default Footer;

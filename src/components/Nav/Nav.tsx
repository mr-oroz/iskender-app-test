import classes from './Nav.module.scss';
import { Catalog } from '../../data/data';
import CatalogCard from '../CatalogCard';

const Nav = () => {
  return (
    <div className="container">
      <div className={classes.nav}>
        {Catalog &&
          Catalog.map((item, idx) => (
            <CatalogCard key={idx} title={item.title} img={item.img} />
          ))}
      </div>
    </div>
  );
};

export default Nav;

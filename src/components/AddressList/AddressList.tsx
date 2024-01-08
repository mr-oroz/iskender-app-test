import classes from './AddressList.module.scss';
import AddressCard from '../AddressCard/index';

const AddressList = () => {
  return (
    <div className="container">
      <div className={classes.row}>
        <AddressCard />
        <AddressCard />
        <AddressCard />
      </div>
      <div className={classes.paginations}>
        <div className={classes.pagination}></div>
        <div className={classes.paginationActive}></div>
        <div className={classes.pagination}></div>
      </div>
    </div>
  );
};

export default AddressList;

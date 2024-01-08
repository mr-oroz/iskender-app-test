import classes from './AppTitle.module.scss';

const AppTitle = (props: { title: string, text: string | null }) => {
  return (
    <div className="container">
      <div className={classes.row}>
      <h1 className={classes.title}>{props.title}</h1>
      <h1 className={classes.text}>{props.text}</h1>
      </div>
    </div>
  );
};

export default AppTitle;

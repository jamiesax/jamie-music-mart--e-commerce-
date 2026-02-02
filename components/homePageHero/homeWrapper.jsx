import classes from './homeWrapper.module.css'


const HomeWrapper = ({ children }) => {
  return (
     <main className={classes.wrapper}>
       {children}
     </main>
  );
};

export default HomeWrapper;
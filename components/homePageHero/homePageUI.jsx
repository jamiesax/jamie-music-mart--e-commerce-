import classes from './heroSection.module.css'
import Image from 'next/image';
import Logo from '@/public/image/jamieLogo/jamieSaxLogo - Copy.jpeg'

const HomePageHeroUI = () => {
  return (
    <>
     <div className={classes.hero}>

      <div className={classes.texts}>
      <h1><span className={classes.three}>Welcome to</span> 
        <br/>Jamie<span className={classes.two}>&apos;</span>s Music 
        <br/>Mart</h1>
      <p>Your <span className={classes.one}>one</span>-stop shop for all things musi<span className={classes.green}>c!</span></p>
      </div>

      <div className={classes.imageWrapper}>
        <Image src={Logo} alt='logo' />
      </div>

     </div>
    </>
  );
};

export default HomePageHeroUI;
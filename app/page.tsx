import Product from '@/app/(product)/product/page.jsx';
import HomePageHeroUI from '@/components/homePageHero/homePageUI';
import HomeWrapper from '@/components/homePageHero/homeWrapper.jsx'

const HomePage = () => {
  return (
    <HomeWrapper>
    <HomePageHeroUI />
       <Product />
    </HomeWrapper>
  );
};

export default HomePage;
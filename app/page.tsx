import Product from '@/app/(product)/product/page.jsx';

const HomePage = () => {
  return (
    <>
     <header>
      <h1>Welcome to Jamie&apos;s Music Mart</h1>
      <p>Your one-stop shop for all things music!</p>
     </header>
     <main>
       <Product />
     </main>
    </>
  );
};

export default HomePage;
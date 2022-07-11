import {
  Apprating,
  Brands,
  Experience,
  Feelspecial,
  Footer,
  Hero,
  Mobilescroll,
  ProductShowcase,
  Security,
  Storyscreen,
  Windowpeek,
} from "../components";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <ProductShowcase />
      <Feelspecial />
      <Brands />
      <Experience />
      <Mobilescroll />
      <div className="non-mobile">
        <Windowpeek />
      </div>
      <Security />
      <Storyscreen />
      <Apprating />
      <Footer />
    </div>
  );
};

export default HomePage;

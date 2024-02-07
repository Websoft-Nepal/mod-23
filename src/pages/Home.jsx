import DiscountBanner from "../components/DiscountBanner";
import NavBar from "../components/navbar";
import hero from "../assets/hero.png";
import PopUp from "../components/PopUp";
import ProductGrid from "../components/ProductsGrid";
import Gallery from "../components/Gallery";
import Sale from "../components/Sale";
import NewsLetter from "../components/NewsLetter";
import Features from "../components/Features";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <DiscountBanner />
      <NavBar />
      <div>
        <img src={hero} alt="hero" className="object-cover h-full w-full" />
      </div>
      <PopUp />
      <ProductGrid title={"New Arrivals"} />
      <ProductGrid title={"Best Seller"} />
      <ProductGrid title={"Trending"} />
      <Gallery />
      <Sale />
      <NewsLetter />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;

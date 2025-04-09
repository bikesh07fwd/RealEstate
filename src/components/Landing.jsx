import PropertyTabs from "./landing/PropertyTabs";
import Hero from "./landing/Hero";
import Stats from "./landing/Stats";
import Whyus from "./landing/Whyus";
import Gallery from "./landing/Gallery";
import Footer from "./landing/Footer";
// import PropertyListing from "./Property";
// import SellerDashboard from "./sellerDashboard";
function Landing() {
  return (
    <>
      <Hero />
      <PropertyTabs />
      <Stats />
      <Whyus />
      <Gallery />
      <Footer />
      {/* <PropertyListing /> */}
      {/* <SellerDashboard /> */}
    </>
  );
}

export default Landing;

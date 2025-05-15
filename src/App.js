import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import Home from "./Components/Home";
import Career from "./Components/Career";
import Contact from "./Components/Contact";
import About from "./Components/About";
import GoldProduct from "./Components/GoldProduct";
import SliverProduct from "./Components/SliverProduct";
import SliverProductList from "./Components/SliverProductsList";
import GoldProductList from "./Components/GoldProductsList";
import ScrollToTop from "./scrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/sliverproducts"
            element={
              <>
                <Navbar />
                <SliverProductList />
                <Footer />
              </>
            }
          />
          <Route
            path="/goldproducts"
            element={
              <>
                <Navbar />
                <GoldProductList />
                <Footer />
              </>
            }
          />
          <Route
            path="/about"
            element={
              <>
                <Navbar />
                <About />
                <Footer />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route
            path="/career"
            element={
              <>
                <Navbar />
                <Career />
                <Footer />
              </>
            }
          />
        </Routes>
      </BrowserRouter>

      <Helmet>
        <script src="js/main.js"></script>
        <script src="js/vendor/jquery-ui.min.js"></script>
        <script src="js/vendor/jquery.countdown.min.js"></script>
        <script src="js/vendor/sal.js"></script>
        <script src="js/vendor/jquery.magnific-popup.min.js"></script>
        <script src="js/vendor/imagesloaded.pkgd.min.js"></script>
        <script src="js/vendor/isotope.pkgd.min.js"></script>
        <script src="js/vendor/counterup.js"></script>
        <script src="js/vendor/waypoints.min.js"></script>
        <script src="js/vendor/popper.min.js"></script>
        <script src="js/vendor/bootstrap.min.js"></script>
        <script src="js/vendor/slick.min.js"></script>
        <script src="js/vendor/js.cookie.js"></script>
        <script src="js/vendor/jquery.js"></script>
        <script src="js/vendor/modernizr.min.js"></script>
      </Helmet>
    </>
  );
}

export default App;

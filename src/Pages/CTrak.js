// import "semantic-ui-css/semantic.min.css";

// import "bootstrap/dist/css/bootstrap.min.css";
// import "./index.css";
import App from "../components/CTrak/App";
import Heading from "../components/CTrak/UI/Layout/Heading";
import Footer from "../components/CTrak/UI/Layout/Footer";
import Prices from "../components/CTrak/Prices/Prices"
import { Routes, Route } from "react-router-dom";
import Resources from "../components/CTrak/Resources/Resources";

function CTrak() {
    return (
  <>
      <Heading />
    <Routes>
    <Route path='/' element={<App />} />
    <Route path='/prices' element={<Prices />} />
    <Route path='/resources' element={<Resources />} />
    </Routes>
      <Footer />
  </>
);
}

export default CTrak;

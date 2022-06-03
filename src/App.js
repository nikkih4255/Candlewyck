import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Amenities from "./pages/Amenities";
import Weddings from "./pages/Weddings";
import MapFAQ from "./pages/MapFAQ";
import GuestInfo from "./pages/GuestInfo";
import GcMassage from "./pages/GcMassage";
import HomePage from "./pages/HomePage";
import ContactForm from "./components/ContactForm";
import Cabins from "./pages/Cabins";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="amenities" element={<Amenities />} />
        <Route path="weddings" element={<Weddings />} />
        <Route path="mapfaq" element={<MapFAQ />} />
        <Route path="guestinfo" element={<GuestInfo />} />
        <Route path="gcmassage" element={<GcMassage />} />
        <Route path="contactform" element={<ContactForm />} />
        <Route path="cabins" element={<Cabins />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

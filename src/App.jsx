import "./App.css";
import Announcement from "./Components/Announcement";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;

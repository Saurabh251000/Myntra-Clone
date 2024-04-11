import Footer from "../componenets/Footer";
import Header from "../componenets/Header";
import { Outlet } from "react-router-dom";
// import FetchItems from "../componenets/FetchItems";

function App() {
  return (
    <>
      <Header />
      {/* <FetchItems /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

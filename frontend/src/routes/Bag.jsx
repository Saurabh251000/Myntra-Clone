import "../styles/Bag.css";
import { useSelector } from "react-redux";
import BagHeader from "../componenets/BagHeader";
import BagC from "../componenets/BagC";
// import Address from "../componenets/Address";
import BagEmpty from "../componenets/BagEmpty";
import BagFooter from "../componenets/BagFooter";

function Bag() {
  //   const [seeMore, setseeMore] = useState(true);
  const baglist = useSelector((state) => state.baglist);

  return (
    <>
      <BagHeader />
      {baglist.length === 0 ? <BagEmpty /> : <BagC baglist={baglist} />}
      {/* <Address /> */}
      <BagFooter />
    </>
  );
}

export default Bag;

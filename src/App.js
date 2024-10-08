import "./App.css";
import { FaTelegram } from "react-icons/fa";
import { FaChevronUp } from "react-icons/fa6";
import { Routes, Route } from "react-router-dom";


// All used components in Route row
import Index from "./Components/React-JSX/Index"; // Main Component (Home page)
import ShopXiaomi from "./Components/React-JSX/shopXiaomi/shopXiaomi";
import ShopSamsung from "./Components/React-JSX/shopSamsung/shopSamsung";
import ShopApple from "./Components/React-JSX/shopApple/shopApple";
import ShopHonor from "./Components/React-JSX/shopHonor/shopHonor";
import ShopTecno from "./Components/React-JSX/shopTecno/shopTecno";
import ShopInfinix from "./Components/React-JSX/shopInfinix/shopInfinix";
import ShopPhone from "./Components/React-JSX/shopPhone/shopPhone";
import ShopTablets from "./Components/React-JSX/shopTablets/shopTablets";
import ShopXiaomiTab from "./Components/React-JSX/shopXiaomiTab/shopXiaomiTab";
import ShopSamsungTab from "./Components/React-JSX/shopSamsungTab/shopSamsungTab";
import ShopAppleTab from "./Components/React-JSX/shopAppleTab/shopAppleTab";
import Registration from "./Components/React-JSX/Registration/registration";
import Login from "./Components/React-JSX/Registration/login";
import ShopLaptops from "./Components/React-JSX/shopLaptops/shopLaptops";
import ShopAppleLap from "./Components/React-JSX/shopAppleLap/shopAppleLap";
import ToDetail from "./Components/React-JSX/toDetail/toDetail";
import NotFoundPage from "./Components/React-JSX/notFoundPage";
import AllCategory from "./Components/React-JSX/allCategory/allCategory"; // Site Map page
import InstallMent from "./Components/React-JSX/Installment/installMent"; // Installment
import OurLocations from "./Components/React-JSX/ourLocations/ourLocations"; // Our locations page
import Cart from "./Components/React-JSX/Cart/cart";
import Checkout from "./Components/React-JSX/Checkout/checkout";
import ShopMSILap from "./Components/React-JSX/shopMSILap/shopMSILap";
import ShopWatches from "./Components/React-JSX/shopWatches/shopWatches";

function App() {

  return (
    <>
      <Routes>
        {/** Home page main route (index) */}
        <Route path="/" element={<Index />} />

        <Route path="/shop/product" element={<ToDetail />}></Route>

        {/** All filter page routes - start  */}
        <Route path="/shop/phones" element={<ShopPhone />} />
        <Route path="/shop/phones/xiaomi" element={<ShopXiaomi />} />
        <Route path="/shop/phones/samsung" element={<ShopSamsung />} />
        <Route path="/shop/phones/apple" element={<ShopApple />} />
        <Route path="/shop/phones/honor" element={<ShopHonor />} />
        <Route path="/shop/phones/tecno" element={<ShopTecno />} />
        <Route path="/shop/phones/infinix" element={<ShopInfinix />} />

        <Route path="/shop/tablets" element={<ShopTablets />} />
        <Route path="/shop/tablets/xiaomi" element={<ShopXiaomiTab />} />
        <Route path="/shop/tablets/samsung" element={<ShopSamsungTab />} />
        <Route path="/shop/tablets/apple" element={<ShopAppleTab />} />

        <Route path="/shop/laptops" element={<ShopLaptops />} />
        <Route path="/shop/laptops/mac-book" element={<ShopAppleLap />}></Route>
        <Route path="/shop/laptops/msi" element={<ShopMSILap />}></Route>

        <Route path="/shop/watches" element={<ShopWatches />}></Route>
        {/** All filter page routes - end  */}

        {/** Main Pages  */}
        <Route path="/notFound" element={<NotFoundPage />}></Route>
        <Route path="/shop/categories" element={<AllCategory />}></Route>
        <Route path="/shop/installment" element={<InstallMent />}></Route>
        <Route path="/our/locations" element={<OurLocations />}></Route>
        <Route path="/user/cart" element={<Cart />}></Route>
        <Route path="/user/cart/checkout" element={<Checkout />}></Route>

        {/** Routes for user registration  */}
        <Route path="/user/registration" element={<Registration />}></Route>
        <Route path="/user/login" element={<Login />}></Route>
      </Routes>

      <a href="#top">
        <button
          className="backToTop p-3 fixed"
          style={{
            backgroundColor: "#212121",
            color: "#ffff",
            borderRadius: "50%",
            bottom: "6rem",
            right: "2rem",
          }}
        >
          <FaChevronUp />
        </button>
      </a>
      <a href="https://t.me/wwwopenshopuz" target="_blank" rel="noreferrer">
        <button
          className="telegramSupport flex items-center gap-1 p-3 font-bold fixed"
          style={{
            backgroundColor: "#24A1DE",
            color: "#ffff",
            borderRadius: "30px",
            bottom: "1.5rem",
            right: "1rem",
          }}
        >
          <FaTelegram /> Telegram Support
        </button>
      </a>
    </>
  );
}

export default App;

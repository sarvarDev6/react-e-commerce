import "./App.css";

import { Routes, Route } from "react-router-dom";
import Index from "./Components/React-JSX/Index";
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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop/xiaomi" element={<ShopXiaomi />} />
        <Route path="/shop/samsung" element={<ShopSamsung />} />
        <Route path="/shop/apple" element={<ShopApple />} />
        <Route path="/shop/honor" element={<ShopHonor />} />
        <Route path="/shop/tecno" element={<ShopTecno />} />
        <Route path="/shop/infinix" element={<ShopInfinix />} />
        <Route path="/shop/phones" element={<ShopPhone />} />
        <Route path="/shop/tablets" element={<ShopTablets />} />
        <Route path="/shop/xiaomi-tablets" element={<ShopXiaomiTab />} />
        <Route path="/shop/samsung-tablets" element={<ShopSamsungTab />} />
        <Route path="/shop/apple-tablets" element={<ShopAppleTab />} />
      </Routes>
    </>
  );
}

export default App;

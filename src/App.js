import "./App.css";

import { Routes, Route } from "react-router-dom";
import Index from "./Components/React-JSX/Index";
import ShopXiaomi from "./Components/React-JSX/shopXiaomi/shopXiaomi";
import ShopSamsung from "./Components/React-JSX/shopSamsung/shopSamsung";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/shop/xiaomi" element={<ShopXiaomi />} />
        <Route path="/shop/samsung" element={<ShopSamsung />} />
      </Routes>
    </>
  );
}

export default App;

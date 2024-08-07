import { BrowserRouter,Routes,Route} from "react-router-dom";
import Layout from "./component/Layout";
import Home from "./component/Home";
import "./style/App.css";
import FoodPage from "./component/FoodPage";
import Cart from "./component/Cart";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Kopi-Wong/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="cart" element={<Cart/>}></Route>
            <Route path="food/:id" element={<FoodPage/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;

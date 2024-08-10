import {User} from "./dulieu2/User";
import {Route, Routes} from "react-router-dom";
import {HotProduct} from "./dulieu2/HotProduct";
import './App.css'
import {DetailProduct} from "./dulieu2/DetailProduct";
import {Category} from "./dulieu2/Category";
import {Admin} from "./dulieu2/Admin";

function App() {
    return (
        <>
            <Routes>
                <Route path={'admin'} element={<Admin/>}></Route>
            </Routes>
            <Routes>
                <Route path={'user'} element={<User/>}>
                    <Route path={'hot-product'} element={<HotProduct/>}/>
                    <Route path={'detail-product'} element={<DetailProduct/>}/>
                    <Route path={'category'} element={<Category/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;

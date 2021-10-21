import React from "react";
import Products from "../Products/Products";
import Signup from "../Signup/Signup";
import Cart from "../Cart/Cart";
import { Route, Switch } from "react-router";


//so productItems gi zemamo produktite i gi stavame vvo routes da bidat renderirani na app.js kade sto gi povikuvame komponennitite routes za da bidat renderirani

const Routes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleRemoveAll}) => {
    return(
        <div>
            <Switch>
                <Route path="/home" exact>
                    <Products productItems={productItems} handleAddProduct={handleAddProduct}></Products>  {/*povikuvame home i gi zimame vrednostite od cart*/}
                </Route>

                <Route path="/signup" exact>
                    <Signup></Signup>       {/*povikuvame signup*/}
                </Route>

                <Route path="/cart" exact>
                    <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct = {handleRemoveProduct} handleRemoveAll = {handleRemoveAll}></Cart> 
                    {/*vo cart gi povikuvame site potrebni handles i cart items*/}
                </Route>

            </Switch>
        </div>
    )
}

export default Routes
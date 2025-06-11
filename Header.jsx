
import { useState } from "react";
import { Cart } from "./Cart";

export function Header({cartItems,onRemove}){



  const [showCart ,setShowCart]=useState(false);
    return (
      <header
        className="stickk top-0 w-100% border-b-1 mt-2 
       shadow-black z-200 "
      >
        <nav className="flex items-center justify-between p-2 ">
          <a
            href="#"
            className="text-xl lg:pl-15  bg-gradient-to-r from-blue-300 to-blue-700
            text-transparent bg-clip-text"
          >
            SHAYAN
          </a>
          <div className="relative lg:pr-15">
            <i className="ri-shopping-cart-fill text-2xl cursor-pointer"
           
            onClick={()=>setShowCart(true)}></i>
            <span className="absolute -right-1 -top-3 lg:pr-15">{cartItems.length}</span>
          </div>
        </nav>
        {showCart && <Cart onRemove={onRemove} cartItems={cartItems} onClose={()=> setShowCart(false)}/>}
      </header>
    );
}
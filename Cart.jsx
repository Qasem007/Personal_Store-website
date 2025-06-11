
export const Cart=({ cartItems,onClose})=>{
  

 
 
  const totalPrice=cartItems.reduce((totalPrice, item)=> totalPrice + item.price ,0);

    return (
      <div
        className="fixed top-0 right-0 w-70 lg:w-90 bg-white h-190 pt-5 shadow-2xl 
      z-10 transition-shadow"
      >
        <div className="flex items-center justify-between border-b-1 pb-5">
          <h2 className="pl-2 font-bold ">Your Cart</h2>
          <button
            onClick={onClose}
            className="mr-5 bg-red-500 p-1 text-white rounded-md
          hover:bg-red-800 cursor-pointer"
          >
            X
          </button>
        </div>
        <ul>
          {cartItems.map((item, idx) => (
            <>
              <li key={idx} className="border-b py-1">
                {item.name}-{item.price}
               
              </li>
            </>
          ))}
        </ul>
        <div className="items-end p-1 mt-2 font-bold">
          Total: $<span>{totalPrice}</span>
        </div>
        <div className="bg-red-500 text-center text-white rounded-md m-1 cursor-pointer hover:bg-red-700 mt-3">
          Checkout
        </div>
      </div>
    );
}


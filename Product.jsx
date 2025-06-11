
import { Products } from "./Data";


export function Product({onAddToCart}){



    return (
      <div className="flex flex-wrap justify-center items-center  md:gap-4 lg:gap-2 pt-10 ">
        {Products.map((product) => (
          <div key={product.id} className="rounded-lg shadow-md bg-amber-10">
            <img
              src={product.img}
              alt="products img"
              className="h-50 w-40 object-cover rounded-xl m-3 object-center"
            />
            <h2 className="font-bold pl-3">{product.name}</h2>
            <div className="flex justify-between items-center ">
              <div className="p-3">
                <h2 className="text-blue-400 text-bold">{product.price}</h2>
                <p className="text-sm text-gray-500">Details</p>
              </div>
              <div className="">
                <i
                  className="ri-add-line bg-blue-500 text-white cursor-pointer text-center
                rounded-2xl p-2 m-3 hover:bg-blue-700"
                  onClick={()=>onAddToCart(product)}
                ></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
}
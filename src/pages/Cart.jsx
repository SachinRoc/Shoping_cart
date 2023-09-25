import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";



const Cart = () => {
  const {cart} = useSelector((state) => state);
  const [totalAmount , setTotalAmount] = useState(0);

  useEffect(() =>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])
  

  return (
    <div className="max-w-[1200px]">
      {
        cart.length > 0 ?
        (<div className="flex flex-row mx-auto w-[800px]">
           <div>
            {
            cart.map((item,index) =>{
              return <CartItem key={item.id} item = {item} itemIndex={index}/>
            })

            }

            </div>

            <div className="flex flex-col max-w-[300px] mt-16 ml-10">
                <div>
               <div className="text-2xl text-green-700">Your Cart</div> 
               <div className="text-5xl uppercase text-green-700">Summary</div>
               <p className="text-md text-green-700 mt-8">
                <span>Total Items :{cart.length}</span>
               </p>

               </div>

               <div>
                  <p className="text-xl text-green-700 font-semibold mt-6">Total Amount :${totalAmount}</p>
                  <div className=" flex justify-center w-full bg-green-800 py-4 rounded-full text-white font-semibold mt-4
                  hover:bg-white hover:text-green-700 border border-green-700 transition duration-200">
                  <button>CheckOut Now</button>
                  </div>
                 
                </div>

            </div>  

          

          </div>):
        (<div className="flex flex-col items-center justify-items-center mt-56 ml-44">
           <h1 className="text-xl text-slate-950 font-bold">Your Cart is Empty!</h1>
           <Link to="/">
           <button className=" flex justify-center w-[250px] bg-green-800 py-4 rounded-full text-white font-semibold mt-4
                  hover:bg-white hover:text-green-700 border border-green-700 transition duration-200">
             Show Now
           </button>
           </Link>
          </div>)
      }
        
    </div>
  );
};

export default Cart;

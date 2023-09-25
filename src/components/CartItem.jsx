import { toast } from "react-hot-toast";
import {FcDeleteDatabase} from "react-icons/fc";
import { useDispatch } from "react-redux";
import {remove} from "../redux/Slices/CartSlice";

const CartItem = ({item , itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () =>{
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");

  }

  return (
    <div className="flex flex-row space-x-8 border-b-2 border-y-green-600">
         <div className="mt-5 mb-8">
          <img src={item.image} className="h-80 w-80" />
          </div> 

          <div className="flex flex-col max-w-[380px] mt-5">
            <h1 className="text-[20px] text-bold">{item.title}</h1>
            <h1 className="text-sm mt-6 ">{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
            <div className="flex flex-row justify-between">
              <p className="text-md text-green-600 font-semibold  py-16">${item.price}</p>
              <div className="relative w-[35px] h-[35px] bg-red-400 rounded-full mt-14 mr-8">
              <div  className="absolute items-center mt-2 ml-2.5 "
              onClick={removeFromCart}>
                <FcDeleteDatabase/>
              </div>
              </div>
            </div>
          </div>
    </div>
  )
};

export default CartItem;

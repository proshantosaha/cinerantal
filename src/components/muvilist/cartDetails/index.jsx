import React, { useContext } from "react";
import { getImgUrl } from "../../../utils/cine-utility";
import { MovieContext } from "../../../context";
import Delete from "../../../assets/delete.svg";
import CheckOut from "../../../assets/icons/checkout.svg";

const CartDetail = ({ onClose }) => {
  const { cartData, setCartData } = useContext(MovieContext);

  const handleDeleteCart = (e, itemId) => {
    e.preventDefault();
    const filterd = cartData.filter((item) => {
      return item.id !== itemId;
    });

    setCartData([...filterd]);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>

          {cartData.length === 0 ? (
            <p className="text-3xl">the cart is empty </p>
          ) : (
            cartData.map((data) => (
              <div
                key={data.id}
                className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14"
              >
                <div className="grid grid-cols-[1fr_auto] gap-4">
                  <div className="flex items-center gap-4">
                    <img
                      className="rounded overflow-hidden"
                      src={getImgUrl(data?.cover)}
                      alt=""
                      width={"50px"}
                      height={"50px"}
                    />
                    <div>
                      <h3 className="text-base md:text-xl font-bold">
                        {data.title}
                      </h3>
                      <p className="max-md:text-xs text-[#575A6E]">
                        Action/Adventure/Sci-fi
                      </p>
                      <span className="max-md:text-xs">${data.price}</span>
                    </div>
                  </div>
                  <div className="flex justify-between gap-4 items-center">
                    <button
                      onClick={(e) => handleDeleteCart(e, data.id)}
                      className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                    >
                      <img className="w-5 h-5" src={Delete} alt="delete" />
                      <span className="max-md:hidden">Remove</span>
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
          <div className="flex items-center justify-end gap-2">
            <a
              className="rounded-md p-2 md:px-4 inline-flex items-center space-x-2 bg-primary text-[#171923] text-sm"
              href="#"
            >
              <img src={CheckOut} width="24" height="24" alt="" />
              <span>Checkout</span>
            </a>
            <a
              className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              href="#"
              onClick={onClose}
            >
              Cancel
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetail;

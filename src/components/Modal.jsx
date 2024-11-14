import { useContext } from "react";
import Success from "../assets/success.png";
import { ClearAllData, TotalProductPrice } from "../Layout/Layout";
import { Link, useNavigate } from "react-router-dom";

const Modal = () => {
  const navigate = useNavigate;
  const [totalPrice, setTotalPrice] = useContext(TotalProductPrice);
  const handleClearData = useContext(ClearAllData);
  return (
    <div>
      <button
        className="btn text-white bg-gradient-to-b from-primary via-primary to-pink-400/70 rounded-full"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        Purchase
      </button>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-center py-6 text-secondary">
          <figure className="flex justify-center mb-5">
            <img src={Success} alt="Payment Success" />
          </figure>
          <h3 className="font-bold text-xl text-myDark1">
            Payment Successfully
          </h3>
          <div className="divider"></div>
          <p className="mb-4 font-medium">Thanks for purchasing.</p>
          <p className="mb-6 font-medium">Total: {totalPrice.toFixed(1)}</p>
          <div className="">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                onClick={() => navigate(0)}
                className="w-full btn text-lg font-bold hover:bg-primary hover:text-white rounded-full"
              >
                Close
              </Link>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Modal;

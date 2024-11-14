import Asus from "../assets/asus_laptop_offer.png";
import Acer from "../assets/acer_offer.png";
import Gigabyte from "../assets/gigabyte_offer.jpg";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

const Offer = () => {
  return (
    <div className="w-11/12 lg:w-5/6 mx-auto">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Offer | Gadget Heaven</title>
        <link rel="canonical" href="/" />
      </Helmet>
      <h2 className="text-2xl text-myDark1 font-bold">Offer</h2>
      <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Asus Offer Cart */}
        <div className="card bg-base-100 w-96 shadow-xl transition hover:scale-105">
          <figure className="h-80">
            <img className="w-full h-full" src={Asus} alt="Shoes" />
          </figure>
          <div className="p-5">
            <h2 className="card-title text-myDark1 mb-4">
              Gadget Heaven এ চলছে Asus Creator Series Laptop Offer!!!!!!!
            </h2>
            <p>
              Gadget Heaven থেকে অফার চলাকালীন সময়ে নির্দিষ্ট মডেল এর Asus
              Creator Series Laptop কিনলেই সাথে থাকছে সর্বোচ্চ ২২,০০০ টাকা
              ডিস্কাউন্ট এবং সর্বোচ্চ ১০,০০০ টাকা পর্যন্ত Cashback!
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/detail/2001" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        {/* Gigabyte Monitor Offer Cart */}
        <div className="card bg-base-100 w-96 shadow-xl transition hover:scale-105">
          <figure className="h-80">
            <img className="w-full h-full" src={Gigabyte} alt="Shoes" />
          </figure>
          <div className="p-5">
            <h2 className="card-title text-myDark1 mb-4">
              Gadget Heaven এ চলছে Gigabyte Dhamaka Offer
            </h2>
            <p>
              Gadget Heaven এ গিগাবাইট ব্র্যান্ডের ২৪ এবং ২৭ ইঞ্চি যে কোন মডেলের
              মনিটর কিনলেই ক্রেতারা সাথে পাচ্ছেন ১০০০ টাকার নিশ্চিত ক্যাশব্যাক।
              অফারটি ২৬শে অক্টোবর থেকে ৩০শে নভেম্বর ২০২৪ পর্যন্ত প্রযোজ্য।
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/detail/5017" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
        {/* Acer Offer Cart */}
        <div className="card bg-base-100 w-96 shadow-xl transition hover:scale-105">
          <figure className="h-80">
            <img className="w-full h-full" src={Acer} alt="Shoes" />
          </figure>
          <div className="p-5 flex flex-col">
            <h2 className="card-title text-myDark1 mb-4">
              Gadget Heaven এ চলছেAcer Amazing Autumn Offer!!!!
            </h2>
            <p>
              Gadget Heaven থেকে অফার চলাকালীন সময়ে নির্দিষ্ট Acer Laptop কিনলেই
              সাথে থাকছে সর্বোচ্চ ১৫০০ টাকা পর্যন্ত Gifts Voucher ফ্রি! অফারটি
              ১৫ সেপ্টেম্বর থেকে ১৫ অক্টোবর ২০২৪ পর্যন্ত প্রযোজ্য।
            </p>
            <div className="card-actions justify-center mt-4">
              <Link to="/detail/2004" className="btn btn-primary">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Offer;
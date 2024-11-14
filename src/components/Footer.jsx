const Footer = () => {
  return (
    <footer className="bg-white py-10">
      <div className="text-center">
        <h3 className="text-3xl text-myDark1 font-bold mb-3">Gadget Heaven</h3>
        <p>
          Whether a customer is purchasing or inquiring, our customers get the
          highest priority
        </p>
      </div>
      <div className="w-11/12 lg:w-5/6 mx-auto divider"></div>
      <div className="footer  text-secondary flex justify-evenly">
        <nav>
          <h6 className="text-myDark1 font-semibold text-lg">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="text-myDark1 font-semibold text-lg">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="text-myDark1 font-semibold text-lg">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;

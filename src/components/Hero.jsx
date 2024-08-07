const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row    py-16">
      <div className="order-1 sm:-order-1  text-[#2A2A2A] flex-1  flex justify-start sm:justify-end text-4xl sm:text-6xl font-poppins font-semibold leading-[3.5rem] sm:leading-[4.5rem] sm:self-center py-6 sm:py-0 px-6  sm:px-0">
        Your Destination <br />
        for Cutting-Edge <br /> Mobile Devices
      </div>
      <div className=" flex-1   flex justify-center">
        <img src="src/assets/mobilePhones/blue.png" />
      </div>
    </div>
  );
};
export default Hero;

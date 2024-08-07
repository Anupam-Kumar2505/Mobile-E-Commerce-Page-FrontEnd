const Header = () => {
  return (
    <div className="flex flex-row h-11 font-poppins justify-between sm:justify-normal">
      <div className="flex-[0.5] flex justify-center items-center ">
        <img className="pb-6" src="src/assets/icons/logo.png" />
      </div>
      <div className=" flex-1  hidden sm:flex justify-evenly text-xl text-[#7D7D7D] ">
        <button className="hover:border-black hover:border-[3px] hover:border-solid rounded-full hover:text-[#262626]  px-5">
          Home
        </button>
        <button className="hover:border-black hover:border-[3px] hover:border-solid rounded-full hover:text-[#262626]  px-5">
          {" "}
          About US
        </button>
        <button className="hover:border-black hover:border-[3px] hover:border-solid rounded-full hover:text-[#262626] px-5">
          {" "}
          Customer Support
        </button>
        <button className="hover:border-black hover:border-[3px] hover:border-solid rounded-full hover:text-[#262626] px-5">
          {" "}
          Explore More
        </button>
      </div>

      <div className="  flex-[0.5] hidden sm:flex justify-center items-center text-white ">
        <div className="bg-[#219EBC] px-5 py-2 rounded-full h-full">
          Contact us
        </div>
      </div>
      <div className="flex flex-row pr-5 gap-4 justify-center items-center">
        <div className=" sm:hidden order-1 flex justify-center items-center">
          <img className="     " src="src/assets/icons/menu.png" />
        </div>
        <div className=" sm:hidden bg-[#219EBC]  border-[#219EBC] border-2 h-10 w-10  rounded-full flex justify-center items-center ">
          <img className="   " src="src/assets/icons/call2.png" />
        </div>
      </div>
    </div>
  );
};
export default Header;

const Contacts = () => {
  return (
    <div className="w-full h-10 bg-[#013047] text-white flex flex-row items-center justify-end  sm:justify-center gap-3 sm:gap-7">
      <div>
        <img
          className=" inline  sm:mb-1 sm:pr-1"
          src="src/assets/icons/whatsapp.png"
        />
        <span className="hidden sm:inline  ">(845) 652-8592</span>
      </div>
      <div>
        <img
          className=" inline sm:mb-1 pr-3 sm:pr-1"
          src="src/assets/icons/gmail.png"
        />
        <span className="hidden sm:inline   ">Husnain@gmail.com</span>
      </div>
    </div>
  );
};

export default Contacts;

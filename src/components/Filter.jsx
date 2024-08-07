const Filter = () => {
  return (
    <div className="bg-[#013047D9] w-full h-[120px] grid grid-cols-2 sm:grid-cols-4 justify-items-center items-center  px-12 sm:px-48 ">
      <select
        className="flex w-32 sm:w-44 h-10 font-poppins bg-[#D9D9D91A] border-2 text-white  border-white rounded-lg"
        name="Price range"
        id="Price Range"
      >
        <option className="hidden  " value="PriceRange" disabled selected>
          Price Range
        </option>
        <option className="text-black" value="2000">
          2000
        </option>
      </select>
      <select
        className=" w-32 sm:w-44 h-10 font-poppins bg-[#D9D9D91A] border-2 text-white  border-white rounded-lg"
        name="Price range"
        id="Price Range"
      >
        <option className="hidden  " value="Brand" disabled selected>
          Brand
        </option>
        <option className="text-black" value="Vivo">
          Vivo
        </option>
      </select>
      <select
        className=" w-32 sm:w-44 h-10 font-poppins bg-[#D9D9D91A] border-2 text-white  border-white rounded-lg"
        name="Price range"
        id="Price Range"
      >
        <option className="hidden  " value="Feature" disabled selected>
          Feature
        </option>
        <option className="text-black" value="6000mH Battery">
          6000mH Battery
        </option>
      </select>
      <div className=" flex  justify-center items-center text-white ">
        <div className="bg-[#219EBC] px-5 py-2 rounded-lg w-32 flex justify-center">
          Select
        </div>
      </div>
    </div>
  );
};

export default Filter;

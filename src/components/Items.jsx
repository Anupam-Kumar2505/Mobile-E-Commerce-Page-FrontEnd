const Items = () => {
  return (
    <>
      <div className="w-full py-8 flex justify-start items-center px-10">
        <img className="inline" src="src/assets/icons/filter.png" />
        <span className="px-3">Filters</span>
      </div>
      <div className="grid grid-rows-2 grid-cols-1 sm:grid-cols-3 grid-flow-row gap-4 bg-[#FAFAFA] px-6  ">
        <div className=" hidden sm:inline sm:row-span-2   px-10 custom-shadow  ">
          <div className="w-full my-8  flex justify-start items-center ">
            <img className="inline " src="src/assets/icons/filter.png" />
            <span className="px-6 text-2xl font-poppins font-semibold text-[#2A2A2A]">
              Filters
            </span>
          </div>
          <div className=" border-y-[1.5px] border-[#E6E6E6]">
            <div className="py-6 text-2xl font-poppins font-medium tex-[#2A2A2A]">
              Offers
            </div>
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Loren Ipsum Dolor"
              />
              <label className="text-xl leading-0" for="Loren Ipsum Dolor">
                Loren Ipsum Dolor
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Loren Ipsum Dolor"
              />
              <label className="text-xl leading-0" for="Loren Ipsum Dolor">
                Loren Ipsum Dolor
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Loren Ipsum Dolor"
              />
              <label className="text-xl leading-0" for="Loren Ipsum Dolor">
                Loren Ipsum Dolor
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Loren Ipsum Dolor"
              />
              <label className="text-xl leading-0" for="Loren Ipsum Dolor">
                Loren Ipsum Dolor
              </label>
            </div>
            <br />
          </div>

          <div className=" border-y-[1.5px] border-[#E6E6E6]">
            <div className="py-6 text-2xl font-poppins font-medium tex-[#2A2A2A]">
              Price
            </div>
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Under 50,000"
              />
              <label className="text-xl leading-0" for="Under 50,000">
                Under 50,000
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Under 100,000"
              />
              <label className="text-xl leading-0" for="Under 100,000">
                Under 100,000
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Under 200,000"
              />
              <label className="text-xl leading-0" for="Under 200,000">
                Under 200,000
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Above 200,000"
              />
              <label className="text-xl leading-0" for="Above 200,000">
                Above 200,000
              </label>
            </div>
            <br />
          </div>

          <div className=" border-y-[1.5px] border-[#E6E6E6]">
            <div className="py-6 text-2xl font-poppins font-medium tex-[#2A2A2A]">
              Display Size
            </div>
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="5.0” - 5.9”"
              />
              <label className="text-xl leading-0" for="5.0” - 5.9”">
                5.0” - 5.9”
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="6.0” - 6.9”"
              />
              <label className="text-xl leading-0" for="6.0” - 6.9”">
                6.0” - 6.9”
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="7.0” -7.9”"
              />
              <label className="text-xl leading-0" for="7.0” -7.9”">
                7.0” -7.9”
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Above 8.0”"
              />
              <label className="text-xl leading-0" for="Above 8.0”">
                Above 8.0”
              </label>
            </div>
            <br />
          </div>

          <div className=" border-y-[1.5px] border-[#E6E6E6]">
            <div className="py-6 text-2xl font-poppins font-medium tex-[#2A2A2A]">
              Storage
            </div>
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="32 GB"
              />
              <label className="text-xl leading-0" for="32 GB">
                32 GB
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="64 GB"
              />
              <label className="text-xl leading-0" for="64 GB">
                64 GB
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="128 GB"
              />
              <label className="text-xl leading-0" for="128 GB">
                128 GB
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="256 GB"
              />
              <label className="text-xl leading-0" for="256 GB">
                256 GB
              </label>
            </div>
            <br />
          </div>

          <div className="border-y-[1.5px] border-[#E6E6E6]">
            <div className="py-6 text-2xl font-poppins font-medium tex-[#2A2A2A]">
              Camera
            </div>
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Dual Camera"
              />
              <label className="text-xl leading-0" for="Dual Camera">
                Dual Camera
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Triple Camera"
              />
              <label className="text-xl leading-0" for="Triple Camera">
                Triple Camera
              </label>
            </div>
            <br />
            <div className="flex justify-items-center gap-4">
              <input
                className="accent-[#D9D9D9] border-[#D9D9D9] py-2 h-6 w-6"
                type="radio"
                value="Quad Camera"
              />
              <label className="text-xl leading-0" for="Quad Camera">
                Quad Camera
              </label>
            </div>
            <br />
          </div>
        </div>

        <div className="custom-shadow rounded-xl px-10 py-4  ">
          <div className="flex justify-center items-center py-12">
            <div className="px-6">
              <input
                className="accent-[#D9D9D9] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className=" accent-[#000573] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#E8E8E8] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#303030] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
            </div>
            <img src="src/assets/mobilePhones/green.png" />
          </div>
          <div className="text-3xl ">Mobile Name</div>
          <div className="flex justify-between my-4 ">
            <div className=" text-[32px] font-semibold">Rs.32,799.00</div>
            <div>
              <img
                className="inline pb-2 pr-2"
                src="src/assets/icons/star.png"
              />
              <span className="text-lg text-[#FB8500] font-extrabold ">
                4.5
              </span>
            </div>
          </div>
          <div className="text-[#7D7D7D] pb-10">
            &#8226; Lorem ipsum dolor <br />
            &#8226; sitamet consectetu <br />
            &#8226; Id dui duis morbi nullam
          </div>
          <div className="flex justify-between py-4">
            <div className="bg-[#219EBC] px-5 py-2 rounded-full h-full">
              Contact us
            </div>

            <div className=" bg-[#FB8500] rounded-full flex justify-center items-center w-10">
              <img className="h-8 " src="src/assets/icons/call.png" />
            </div>
          </div>
        </div>

        <div className="custom-shadow rounded-xl px-10 py-4  ">
          <div className="flex justify-center items-center py-12">
            <div className="px-6">
              <input
                className="accent-[#D9D9D9] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className=" accent-[#000573] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#E8E8E8] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#303030] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
            </div>
            <img src="src/assets/mobilePhones/purple.png" />
          </div>
          <div className="text-3xl ">Mobile Name</div>
          <div className="flex justify-between my-4 ">
            <div className=" text-[32px] font-semibold">Rs.32,799.00</div>
            <div>
              <img
                className="inline pb-2 pr-2"
                src="src/assets/icons/star.png"
              />
              <span className="text-lg text-[#FB8500] font-extrabold ">
                4.5
              </span>
            </div>
          </div>
          <div className="text-[#7D7D7D] pb-10">
            &#8226; Lorem ipsum dolor <br />
            &#8226; sitamet consectetu <br />
            &#8226; Id dui duis morbi nullam
          </div>
          <div className="flex justify-between py-4">
            <div className="bg-[#219EBC] px-5 py-2 rounded-full h-full">
              Contact us
            </div>

            <div className=" bg-[#FB8500] rounded-full flex justify-center items-center w-10">
              <img className="h-8 " src="src/assets/icons/call.png" />
            </div>
          </div>
        </div>

        <div className="custom-shadow rounded-xl px-10 py-4  ">
          <div className="flex justify-center items-center py-12">
            <div className="px-6">
              <input
                className="accent-[#D9D9D9] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className=" accent-[#000573] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#E8E8E8] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#303030] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
            </div>
            <img src="src/assets/mobilePhones/violet.png" />
          </div>
          <div className="text-3xl ">Mobile Name</div>
          <div className="flex justify-between my-4 ">
            <div className=" text-[32px] font-semibold">Rs.32,799.00</div>
            <div>
              <img
                className="inline pb-2 pr-2"
                src="src/assets/icons/star.png"
              />
              <span className="text-lg text-[#FB8500] font-extrabold ">
                4.5
              </span>
            </div>
          </div>
          <div className="text-[#7D7D7D] pb-10">
            &#8226; Lorem ipsum dolor <br />
            &#8226; sitamet consectetu <br />
            &#8226; Id dui duis morbi nullam
          </div>
          <div className="flex justify-between py-4">
            <div className="bg-[#219EBC] px-5 py-2 rounded-full h-full">
              Contact us
            </div>

            <div className=" bg-[#FB8500] rounded-full flex justify-center items-center w-10">
              <img className="h-8 " src="src/assets/icons/call.png" />
            </div>
          </div>
        </div>

        <div className="custom-shadow rounded-xl px-10 py-4  ">
          <div className="flex justify-center items-center py-12">
            <div className="px-6">
              <input
                className="accent-[#D9D9D9] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className=" accent-[#000573] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#E8E8E8] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
              <input
                className="accent-[#303030] block w-6 h-6 my-2"
                type="radio"
                value="grey"
              />
            </div>
            <img src="src/assets/mobilePhones/pink.png" />
          </div>
          <div className="text-3xl ">Mobile Name</div>
          <div className="flex justify-between my-4 ">
            <div className=" text-[32px] font-semibold">Rs.32,799.00</div>
            <div>
              <img
                className="inline pb-2 pr-2"
                src="src/assets/icons/star.png"
              />
              <span className="text-lg text-[#FB8500] font-extrabold ">
                4.5
              </span>
            </div>
          </div>
          <div className="text-[#7D7D7D] pb-10">
            &#8226; Lorem ipsum dolor <br />
            &#8226; sitamet consectetu <br />
            &#8226; Id dui duis morbi nullam
          </div>
          <div className="flex justify-between py-4">
            <div className="bg-[#219EBC] px-5 py-2 rounded-full h-full">
              Contact us
            </div>

            <div className=" bg-[#FB8500] rounded-full flex justify-center items-center w-10">
              <img className="h-8 " src="src/assets/icons/call.png" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Items;

import { useState } from "react";
import arrow from "../../assets/arrow.svg";
import check from "../../assets/checked.svg";

const Signup = () => {
  const [activeTab, setActiveTab] = useState("buyer");
  const [fade, setFade] = useState(false);

  const handleTabChange = (tab) => {
    if (tab !== activeTab) {
      setFade(true); // Trigger fade-out
      setTimeout(() => {
        setActiveTab(tab); // Switch the tab
        setFade(false); // Trigger fade-in
      }, 300); // Match the transition duration
    }
  };

  return (
    <>
      <div id="signup" className="container h-[100%] pb-40 mx-auto w-[1516px]">
        <div className="signup-box flex items-center justify-center w-full pb-28 py-20 px-0 lg:px-24">
          <div className="first-side flex-shrink-0 w-full lg:w-[50%]">
            <h2 className="text-[37px] font-bold">
              Ready to dive into{" "}
              <span className="text-[#271555]" style={{ lineHeight: "40px" }}>
                HABOT
              </span>
            </h2>
            <p className="text-[17px] font-light py-6 pe-12 lg:pe-32">
              Signing up with HABOT opens the door to a world of new
              opportunities and potential for business growth. Gain access to a
              vibrant community of like-minded individuals, unlock valuable
              resources, and take the first step towards realizing your
              entrepreneurial dreams.
            </p>
            <button className="bg-[#00732F] button-sign text-white mt-4 text-lg font-semibold px-20 py-3 rounded hover:bg-[#00732F] transition duration-300 flex items-center">
              Sign up Today! <img src={arrow} alt="arrow icon" className="ms-3" />
            </button>
          </div>
          <div className="second-side flex-shrink-0 w-full flex-wrap lg:w-[50%] mt-10 lg:mt-0 ">
            <div className="boxes flex flex-wrap gap-5 justify-center">
              {[
                "Abu Dhabi",
                "Dubai",
                "Sharjah & Ajman",
                "Fujairah",
                "Ras AL Khaimah",
                "Umm AL Quwain",
              ].map((city, index) => (
                <div
                  key={index}
                  className="first-box border w-[260px] h-[65px] text-center font-semibold flex items-center justify-center border-[#E7760D] rounded-[5px] 
        transition-colors duration-300 hover:bg-[#E7760D] hover:text-white group"
                >
                  <span className="ms-8">
                    {city}{" "}
                    <img
                      src={arrow}
                      alt="arrow"
                      className="ml-4 inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          id="iframe"
          className="bg-[#072F57] rounded-lg w-[1316px] mx-auto ps-16 h-[623px] text-white py-10 px-6 flex flex-col lg:flex-row items-center justify-center gap-10"
        >
          {/* Video Section */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                id="video"
                className="w-full h-[400px] rounded-lg"
                src="https://www.youtube.com/embed/i8tgRHXx4oQ?si=bYxZ-f6to6YZrdwD"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full mt-[-140px] ms-5 lg:w-1/2">
            {/* Buyer and Supplier Toggle */}
            <div id="tabs" className="flex justify-start mb-4 text-center gap-6">
              <span
                onClick={() => handleTabChange("buyer")}
                className={`text-[26px] text-center font-bold px-16 cursor-pointer ${
                  activeTab === "buyer"
                    ? "text-[#EB7150] border-b-4 border-[#EB7150] pb-1"
                    : "text-gray-400"
                }`}
              >
                Buyer
              </span>
              <span
                onClick={() => handleTabChange("supplier")}
                className={`ml-6 text-[26px] font-bold px-16 cursor-pointer ${
                  activeTab === "supplier"
                    ? "text-[#EB7150] border-b-4 border-[#EB7150] pb-1"
                    : "text-gray-400"
                }`}
              >
                Supplier
              </span>
            </div>

            {/* List Content Wrapper */}
            <div
              className={`transition-opacity duration-300 ${
                fade ? "opacity-0" : "opacity-100"
              } flex flex-col justify-between min-h-[200px]`}
            >
              {/* List Content based on active tab */}
              <ul className="text-lg space-y-4 mt-8">
                {activeTab === "buyer" ? (
                  <>
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="text-[18px] font-[500]">Post your requirements.</p>
                    </li>
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="text-[18px] font-[500]">Sit back for multiple suppliers to contact you.</p>
                    </li>
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="paragraph text-[18px] font-[500] pe-28">
                        Choose among the suppliers based on the ratings and
                        reviews.
                      </p>
                    </li>
                  </>
                ) : (
                  <>
                    {/* Content for Supplier tab */}
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="text-[18px] font-[500]">Completer your profile and get verified</p>
                    </li>
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="text-[18px] font-[500]">Select service tags for relevant opportunities.</p>
                    </li>
                    <li className="flex content-center items-center gap-3">
                      <span className="text-[#32BA7C]">
                        <img src={check} alt="check" />
                      </span>
                      <p className="paragraph pe-28 text-[18px] font-[500]">
                        Reach out to buyers and expand your business.
                      </p>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;

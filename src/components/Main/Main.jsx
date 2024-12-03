import City from "../../assets/city.png";
import suitcase from "../../assets/suitcase 1.svg";
import location from "../../assets/location.svg";

const Main = () => {
    return (
        <>
            <section className="relative w-full h-[609px] bg-cover bg-center"
                style={{
                    backgroundImage: `linear-gradient(356.01deg, rgba(7, 47, 87, 0.75) 50.8%, rgba(7, 47, 87, 0) 94.58%), 
                      linear-gradient(0deg, rgba(7, 47, 87, 0.45), rgba(7, 47, 87, 0.45)), 
                      url(${City})`,
                    backgroundPosition: "center 0px",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}>
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="relative z-10 flex flex-col items-center justify-center w-full gap-4 h-full text-white text-center space-y-6">
                    <h1 className="main-heading text-[55px] md:text-5xl font-[700]" style={{ lineHeight: '66px' }}>
                        Are You a Supplier? <br />
                        <span className="text-[55px] md:text-5xl font-[400]" style={{ lineHeight: '65px' }}>Explore Matching Opportunities.</span>
                    </h1>
                    <div className="input-parent flex flex-col md:flex-row gap-2 w-[800px]">
                        <div className="flex items-center relative space-x-2 w-full">
                            <img src={suitcase} alt="suitcase" className="absolute left-5 z-10 text-2xl text-[#E7760D]" />
                            <input
                                type="text"
                                placeholder="Search your required service here"
                                className="bg-white text-gray-700 text-lg rounded ps-14 px-5 py-3 w-[360px] outline-none"
                            />
                        </div>
                        <div className="flex items-center relative space-x-2 w-full">
                            <img src={location} alt="location" className="absolute left-5 z-10 text-2xl text-[#E7760D]" />
                            <input
                                type="text"
                                placeholder="Search your required service here"
                                className="bg-white text-gray-700 text-lg ps-14 rounded px-5 py-3 w-[360px] outline-none"
                            />
                        </div>
                        <button id='btn' className="bg-[#00732F] text-white text-lg font-semibold px-6 py-2 rounded hover:bg-[#00732F] transition duration-300">
                            Search
                        </button>
                    </div>
                    <p className="text-[18px] font-[700] mt-4">
                        Are you a buyer? <a href="#" className="text-white font-[400] underline hover:underline">Click here if you are looking to post requirements</a>
                    </p>
                </div>
            </section>
        </>
    )
}


export default Main







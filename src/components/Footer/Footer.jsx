import Logo from "../../assets/white-logo.png";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";

const Footer = () => {
    return (
        <footer className="py-16 bg-[#123557] text-white">
            <div id="footer" className="container py-12 flex justify-between mx-auto lg:gap-72" style={{
                borderWidth: "1px 0 1px 0",
                borderStyle: "solid",
                borderColor: "rgba(255, 255, 255, 0.2)",
            }}>
                <div id="footer-left" className="flex flex-wrap items-start justify-start gap-24">
                    <div className="flex mt-8 flex-col ps-12 items-start mb-6 md:mb-0 w-full md:w-auto">
                        <img src={Logo} className="h-[40px] w-[206] mb-4" alt="Habot Logo" />
                        <span className="text-white ms-3 font-[300] text-[16px]">&copy; 2024 R Singhania</span>
                    </div>
                    <div className="flex flex-col mb-6 md:mb-0 w-1/2 md:w-auto">
                        <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    FAQ
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-6 md:mb-0 w-1/2 md:w-auto">
                        <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    Data Privacy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    Terms
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    Accessibility
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="flex flex-col mb-6 md:mb-0 w-full md:w-auto">
                        <h4 className="text-lg font-semibold text-white mb-4">Explore</h4>
                        <ul className="space-y-2">
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    Find Buyer
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white transition duration-300 ease-in-out text-[14px] text-[400] hover:text-[#EB7150]">
                                    Feedback
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="">
                    <div className="container mx-auto flex justify-center space-x-6">
                        <a
                            href="#"
                            className="text-white hover:text-[#EB7150] text-2xl h-[40px] w-[40px] flex items-center justify-center transition border border-white p-2 rounded-full"
                        >
                            <img src={linkedin} alt="Linkedin" />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-[#EB7150] text-2xl h-[40px] w-[40px] flex items-center justify-center transition border border-white p-2 rounded-full"
                        >
                            <img src={twitter} alt="Twitter" />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-[#EB7150] text-2xl h-[40px] w-[40px] flex items-center justify-center transition border border-white p-2 rounded-full"
                        >
                            <img src={facebook} alt="Facebook" />
                        </a>
                        <a
                            href="#"
                            className="text-white hover:text-[#EB7150] text-2xl h-[40px] w-[40px] flex items-center justify-center transition border border-white p-2 rounded-full"
                        >
                            <img src={instagram} alt="instagram" />
                        </a>
                    </div>
                </div>
            </div>

            {/* Social Media Icons at Bottom */}

        </footer>
    );
};

export default Footer;
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import Font Awesome Icon
import Logo from "../../assets/logo.png";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <>
            <header className="text-black">
                <div className="container mx-auto px-8 py-0 flex items-center justify-between">
                    <div className="text-2xl font-bold">
                        <img src={Logo} className="h-24" alt="Habot Logo" />
                    </div>
                    <nav className="hidden md:flex items-center justify-center space-x-6">
                        <a
                            href="#home" id="home"
                            className="hover:text-[#00732F] text-[16px] me-6 text-[#737373]"
                        >
                            Find Suppliers
                        </a>
                        <a
                            href="#about"
                            className="hover:text-blue-300 text-[16px] me-10 text-[#737373] relative"
                        >
                            <div className="relative">
                                <select
                                    name="services"
                                    id="services"
                                    className="appearance-none cursor-pointer hover:text-[#00732F] bg-white text-[#737373] text-[16px] px-4 py-2 pe-[40px] rounded-md focus:outline-none focus:ring-0 w-full"
                                >
                                    <option value="1" selected>
                                        Find Service Tags
                                    </option>
                                    <option value="2">Tour</option>
                                    <option value="3">Hotels</option>
                                    <option value="4">Services</option>
                                    <option value="5">Contact</option>
                                </select>
                                <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
                                    <FaChevronDown className="text-[#737373] text-sm" />
                                </span>
                            </div>
                        </a>
                        <button className="border border-[#00732F] font-semibold text-[#00732F] hover:bg-[#00732F] hover:text-white px-10 py-3 rounded transition duration-300">
                            Login / Sign Up
                        </button>
                    </nav>
                    <button
                        className="block md:hidden text-black focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
                <div
                    className={`md:hidden bg-slate-100 overflow-hidden transition-all duration-500 ease-in-out ${isMenuOpen ? "max-h-screen" : "max-h-0"}`}
                >
                    <a href="#home" className="block py-2 px-4 hover:bg-blue-500">
                        Home
                    </a>
                    <a href="#about" className="block py-2 px-4 hover:bg-blue-500">
                        About
                    </a>
                    <a href="#services" className="block py-2 px-4 hover:bg-blue-500">
                        Services
                    </a>
                    <a href="#contact" className="block py-2 px-4 hover:bg-blue-500">
                        Contact
                    </a>
                    <a href="#contact" className="block py-2 px-4 hover:bg-blue-500">
                        Login / Sign Up
                    </a>
                </div>
            </header>
        </>
    );
};

export default Header;

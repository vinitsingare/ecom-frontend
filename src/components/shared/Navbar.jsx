import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaUser, FaRegHeart, FaSearch } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "../UserMenu";

const Navbar = () => {
    const path = useLocation().pathname;
    const [navbarOpen, setNavbarOpen] = useState(false);
    const { cart } = useSelector((state) => state.carts);
    const { user } = useSelector((state) => state.auth);
    
    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="bg-white z-50 sticky top-0 border-b border-gray-200">
            <div className="w-full px-4 sm:px-8 md:px-12">
                <div className="flex items-center justify-between h-20">
                    
                    {/* Left - Menu & Search */}
                    <div className="flex items-center gap-6 flex-1">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="text-black hover:text-gray-600 transition-colors flex items-center gap-2 font-medium text-sm tracking-wide"
                        >
                            {navbarOpen ? (
                                <RxCross2 className="text-xl" />
                            ) : (
                                <IoIosMenu className="text-2xl" />
                            )}
                            <span className="hidden md:block">Menu</span>
                        </button>
                        
                        <button className="hidden md:flex text-black hover:text-gray-600 transition-colors items-center gap-2 font-medium text-sm tracking-wide">
                            <FaSearch className="text-lg" />
                            <span>Search</span>
                        </button>
                    </div>

                    {/* Center - Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-3xl font-serif font-semibold tracking-widest text-black">
                                PARIDHAN
                            </span>
                        </Link>
                    </div>

                    {/* Right Side - Call Us, Wishlist, Cart & Auth */}
                    <div className="flex items-center justify-end gap-6 flex-1">
                        <span className="hidden lg:block text-sm font-medium tracking-wide">Call Us</span>
                        
                        <button className="hidden md:block text-black hover:text-gray-600 transition-colors">
                            <FaRegHeart className="text-xl" />
                        </button>

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="text-black hover:text-gray-600 transition-colors relative"
                        >
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        fontSize: '0.7rem',
                                        minWidth: '18px',
                                        height: '18px',
                                    }
                                }}
                            >
                                <FaShoppingCart className="text-xl" />
                            </Badge>
                        </Link>

                        {/* Login / User Menu */}
                        {user && user.id ? (
                            <UserMenu />
                        ) : (
                            <Link
                                to="/login"
                                className="text-black hover:text-gray-600 transition-colors"
                            >
                                <FaUser className="text-xl" />
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile/Desktop Dropdown Menu */}
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    navbarOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
                }`}>
                    <div className="flex flex-col gap-4 py-6 px-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setNavbarOpen(false)}
                                className={`text-sm font-medium tracking-wide uppercase transition-colors ${
                                    path === link.path
                                        ? "text-black underline underline-offset-4"
                                        : "text-gray-500 hover:text-black"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

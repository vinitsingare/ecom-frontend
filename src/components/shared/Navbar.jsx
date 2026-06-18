import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
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
        <nav className="bg-white z-50 sticky top-0 border-b border-gray-100">
            <div className="w-full px-4 sm:px-8 md:px-12">
                <div className="flex items-center justify-between h-20 md:h-24">
                    
                    {/* Left - Navigation Links */}
                    <div className="hidden lg:flex items-center gap-8 flex-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-xs md:text-sm font-semibold tracking-widest uppercase transition-colors hover:text-gray-500 ${
                                    path === link.path
                                        ? "text-black border-b-2 border-black pb-1"
                                        : "text-black"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button - Left on mobile */}
                    <div className="lg:hidden flex-1">
                        <button
                            onClick={() => setNavbarOpen(!navbarOpen)}
                            className="text-black hover:text-gray-600 transition-colors flex items-center gap-2 font-medium"
                        >
                            {navbarOpen ? (
                                <RxCross2 className="text-2xl" />
                            ) : (
                                <IoIosMenu className="text-3xl" />
                            )}
                        </button>
                    </div>

                    {/* Center - Logo */}
                    <div className="flex-1 flex justify-center">
                        <Link to="/" className="flex items-center">
                            <span className="text-2xl md:text-4xl font-serif tracking-[0.25em] md:tracking-[0.3em] text-black uppercase font-medium">
                                PARIDHAN
                            </span>
                        </Link>
                    </div>

                    {/* Right Side - Profile & Cart */}
                    <div className="flex items-center justify-end gap-6 md:gap-8 flex-1">
                        {/* Login / User Menu */}
                        {user && user.id ? (
                            <UserMenu />
                        ) : (
                            <Link
                                to="/login"
                                className="text-black hover:text-gray-500 transition-colors"
                            >
                                <FaUser className="text-xl md:text-2xl font-light" />
                            </Link>
                        )}

                        {/* Cart */}
                        <Link
                            to="/cart"
                            className="text-black hover:text-gray-500 transition-colors relative flex items-center gap-2"
                        >
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        backgroundColor: '#000',
                                        color: '#fff',
                                        fontSize: '0.65rem',
                                        minWidth: '16px',
                                        height: '16px',
                                        fontWeight: 'bold',
                                    }
                                }}
                            >
                                <FaShoppingCart className="text-xl md:text-2xl" />
                            </Badge>
                        </Link>
                    </div>
                </div>

                {/* Mobile Dropdown Menu */}
                <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
                    navbarOpen ? "max-h-96 border-t border-gray-100" : "max-h-0"
                }`}>
                    <div className="flex flex-col gap-6 py-8 px-4">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setNavbarOpen(false)}
                                className={`text-sm font-semibold tracking-widest uppercase transition-colors ${
                                    path === link.path
                                        ? "text-black underline underline-offset-8"
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

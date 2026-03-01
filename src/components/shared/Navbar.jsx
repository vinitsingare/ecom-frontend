import { Badge } from "@mui/material";
import { useState } from "react";
import { FaShoppingCart, FaSignInAlt, FaStore, FaHeart } from "react-icons/fa";
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
        <nav className="glass-effect z-50 sticky top-0 backdrop-blur-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo Section */}
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/25 group-hover:shadow-purple-500/40 transition-all duration-300">
                            <FaStore className="text-white text-lg" />
                        </div>
                        <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            E-Shop
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                                    path === link.path
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    {/* Right Side - Cart & Auth */}
                    <div className="hidden md:flex items-center gap-4">
                        {/* Cart */}
                        <Link
                            to="/cart"
                            className={`p-2.5 rounded-xl transition-all duration-300 ${
                                path === "/cart"
                                    ? "bg-purple-500/20 text-purple-400"
                                    : "text-gray-300 hover:text-white hover:bg-white/5"
                            }`}
                        >
                            <Badge
                                showZero
                                badgeContent={cart?.length || 0}
                                sx={{
                                    '& .MuiBadge-badge': {
                                        background: 'linear-gradient(135deg, #7e22ce 0%, #ec4899 100%)',
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        minWidth: '20px',
                                        height: '20px',
                                        borderRadius: '10px',
                                    }
                                }}
                                overlap="circular"
                            >
                                <FaShoppingCart size={20} />
                            </Badge>
                        </Link>

                        {/* Login / User Menu */}
                        {user && user.id ? (
                            <UserMenu />
                        ) : (
                            <Link
                                to="/login"
                                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 hover:scale-105 transition-all duration-300"
                            >
                                <FaSignInAlt />
                                <span>Login</span>
                            </Link>
                        )}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setNavbarOpen(!navbarOpen)}
                        className="md:hidden p-2 text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                        {navbarOpen ? (
                            <RxCross2 className="text-2xl" />
                        ) : (
                            <IoIosMenu className="text-2xl" />
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`md:hidden overflow-hidden transition-all duration-300 ${
                    navbarOpen ? "max-h-96 pb-6" : "max-h-0"
                }`}>
                    <div className="flex flex-col gap-2 pt-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.path}
                                to={link.path}
                                onClick={() => setNavbarOpen(false)}
                                className={`px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                                    path === link.path
                                        ? "bg-purple-500/20 text-purple-400"
                                        : "text-gray-300 hover:text-white hover:bg-white/5"
                                }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        
                        <div className="flex items-center gap-4 mt-4 pt-4 border-t border-white/10">
                            <Link
                                to="/cart"
                                onClick={() => setNavbarOpen(false)}
                                className="flex items-center gap-2 text-gray-300"
                            >
                                <Badge
                                    showZero
                                    badgeContent={cart?.length || 0}
                                    sx={{
                                        '& .MuiBadge-badge': {
                                            background: 'linear-gradient(135deg, #7e22ce 0%, #ec4899 100%)',
                                            color: '#fff',
                                        }
                                    }}
                                >
                                    <FaShoppingCart size={20} />
                                </Badge>
                                <span>Cart</span>
                            </Link>

                            {!user && (
                                <Link
                                    to="/login"
                                    onClick={() => setNavbarOpen(false)}
                                    className="flex-1 flex items-center justify-center gap-2 px-5 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full"
                                >
                                    <FaSignInAlt />
                                    <span>Login</span>
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

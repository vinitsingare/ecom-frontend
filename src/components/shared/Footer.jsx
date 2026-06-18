import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-white w-full">
            {/* Newsletter Section */}
            <div className="flex flex-col items-center justify-center py-20 px-4 md:px-8 border-b border-gray-800">
                <h2 className="text-[13px] tracking-[0.2em] font-medium uppercase mb-6 text-center">
                    Sign up for Paridhan Updates
                </h2>
                <p className="text-xl md:text-2xl lg:text-3xl font-serif text-center max-w-3xl leading-relaxed text-gray-200">
                    Get exclusive updates on the collection's launch, personalised communication and the House's latest news.
                </p>
                <button className="mt-10 tracking-[0.2em] text-[13px] uppercase font-medium border-b border-white pb-1 hover:text-gray-400 hover:border-gray-400 transition-colors">
                    + Subscribe
                </button>
            </div>

            {/* Links Section */}
            <div className="py-16 px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
                    {/* Column 1 */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-medium mb-6">
                            May We Help You?
                        </h3>
                        <ul className="flex flex-col space-y-4 text-[13px] text-gray-300">
                            <li><Link to="/contact" className="hover:text-white transition-colors underline underline-offset-4 decoration-1">Contact Us</Link></li>
                            <li><Link to="/faq" className="hover:text-white transition-colors underline underline-offset-4 decoration-1">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Column 2 */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-medium mb-6">
                            The Company
                        </h3>
                        <ul className="flex flex-col space-y-4 text-[13px] text-gray-300">
                            <li><Link to="/about" className="hover:text-white transition-colors underline underline-offset-4 decoration-1">About Paridhan</Link></li>
                            <li><Link to="/products" className="hover:text-white transition-colors underline underline-offset-4 decoration-1">Our Products</Link></li>
                        </ul>
                    </div>

                    {/* Column 3 (Address) */}
                    <div className="flex flex-col">
                        <h3 className="text-[11px] tracking-[0.2em] uppercase text-gray-500 font-medium mb-6">
                            Store Locator & HQ
                        </h3>
                        <ul className="flex flex-col space-y-4 text-[13px] text-gray-300">
                            <li className="font-serif text-white text-base">Paridhan</li>
                            <li className="leading-relaxed">Aurangabad<br />Maharashtra, India</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Bottom Legal & Location Section */}
            <div className="border-t border-gray-800 py-8 px-8 md:px-16 lg:px-24">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                    {/* Location */}
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <span className="text-lg">🇮🇳</span>
                        <span className="text-[12px] uppercase tracking-widest group-hover:text-gray-400 transition-colors">
                            India
                        </span>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-[12px] text-gray-400">
                        <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
                        <Link to="#" className="hover:text-white transition-colors">Cookie Policy</Link>
                        <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

                <div className="mt-12 flex justify-center pb-8">
                    <h1 className="text-3xl md:text-5xl font-serif tracking-[0.2em] text-white">
                        PARIDHAN
                    </h1>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

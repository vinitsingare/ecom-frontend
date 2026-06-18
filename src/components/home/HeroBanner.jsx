import { Link } from 'react-router-dom';

const HeroBanner = () => {
    return (
        <div className='relative w-full h-[75vh] md:h-[85vh] bg-gray-100 overflow-hidden'>
            {/* Background Image - High quality fashion placeholder */}
            <img 
                src="https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop" 
                alt="Spring Collection" 
                className="absolute inset-0 w-full h-full object-cover object-top"
            />
            
            {/* Subtle gradient overlay to ensure text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-end pb-20 text-white z-10">
                <span className="text-xs md:text-sm tracking-[0.2em] uppercase mb-3 font-semibold">
                    Women
                </span>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-sans font-medium mb-6 text-center px-4 luxury-heading">
                    The Spring Collection
                </h1>
                <Link 
                    to="/products"
                    className="border-b border-white pb-1 font-medium text-sm md:text-base tracking-wide hover:opacity-70 transition-opacity"
                >
                    Explore More
                </Link>
            </div>
        </div>
    );
}

export default HeroBanner;

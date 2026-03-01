// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay';

// Import Swiper styles
import 'swiper/css';
import { Autoplay, Pagination, EffectFade, Navigation } from 'swiper/modules';

import { bannerLists } from '../../utils';
import { Link } from 'react-router-dom';

const gradients = [
    "bg-gradient-to-r from-purple-900 via-violet-900 to-slate-900",
    "bg-gradient-to-r from-slate-900 via-purple-900 to-pink-900",
    "bg-gradient-to-r from-slate-900 via-indigo-900 to-purple-900"
];

const HeroBanner = () => {
    return (
        <div className='py-2 rounded-2xl overflow-hidden'>
            <Swiper
                grabCursor = {true}
                autoplay = {{
                    delay:5000,
                    disableOnInteraction: false,
                }}
                navigation
                modules={[Pagination, EffectFade, Navigation, Autoplay]}
                pagination={{clickable: true}}
                scrollbar={{ draggable: true}}
                slidesPerView={1}
                className="hero-swiper">

                    {bannerLists.map((item, i) => (
                        <SwiperSlide key={item.id}>
                            <div className={`carousel-item rounded-2xl sm:h-[550px] h-80 ${gradients[i]} relative overflow-hidden`}>
                                {/* Animated background elements */}
                                <div className="absolute inset-0 opacity-30">
                                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-500 rounded-full filter blur-3xl animate-pulse"></div>
                                    <div className="absolute bottom-10 right-10 w-48 h-48 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                                </div>
                                
                                <div className='flex items-center justify-center relative z-10 h-full'>
                                    <div className='hidden lg:flex justify-center w-1/2 p-8'>
                                    <div className='text-center'>
                                        <h3 className='text-2xl text-purple-300 font-medium tracking-wider uppercase mb-2'>
                                            {item.title}
                                        </h3>
                                        <h1 className='text-6xl text-white font-bold mt-2 bg-gradient-to-r from-white via-purple-200 to-purple-300 bg-clip-text text-transparent'>
                                            {item.subtitle}
                                        </h1>
                                        <p className='text-gray-300 mt-4 text-lg max-w-md mx-auto'>
                                            {item.description}
                                        </p>
                                        <Link 
                                            className='mt-8 inline-block btn-gradient text-white py-3 px-8 rounded-full font-semibold text-lg hover:shadow-purple-500/40 transition-all duration-300 transform hover:scale-105'
                                            to="/products">
                                        Shop Now
                                        </Link>
                                    </div>
                                </div>
                                <div className='w-full flex justify-center lg:w-1/2 p-4 relative z-10'>
                                    <img 
                                        src={item?.image}
                                        alt={item.title}
                                        className="max-h-80 object-contain drop-shadow-2xl"
                                    ></img>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
}


export default HeroBanner;

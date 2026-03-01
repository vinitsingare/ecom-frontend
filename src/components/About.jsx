import { FaAward, FaHandshake, FaHeart, FaRocket, FaShieldAlt, FaStar } from "react-icons/fa";

const About = () => {
    const features = [
        {
            icon: FaShieldAlt,
            title: "Secure Shopping",
            description: "Your data and payments are protected with enterprise-grade security"
        },
        {
            icon: FaRocket,
            title: "Fast Delivery",
            description: "Quick and reliable shipping to get your products on time, every time"
        },
        {
            icon: FaHeart,
            title: "Customer First",
            description: "Dedicated support team ready to help you with any questions"
        },
        {
            icon: FaAward,
            title: "Quality Products",
            description: "Curated selection of premium products from trusted brands"
        },
        {
            icon: FaHandshake,
            title: "Easy Returns",
        description: "Hassle-free return policy within 30 days of purchase"
        },
        {
            icon: FaStar,
            title: "Best Prices",
            description: "Competitive pricing with regular deals and discounts"
        }
    ];

    const stats = [
        { number: "50K+", label: "Happy Customers" },
        { number: "10K+", label: "Products" },
        { number: "99%", label: "Satisfaction" },
        { number: "24/7", label: "Support" }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <div className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-transparent to-pink-900/20"></div>
                <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
                
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            <span className="gradient-text">About E-Shop</span>
                        </h1>
                        <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                            We're on a mission to revolutionize online shopping by providing a seamless, 
                            enjoyable experience for every customer.
                        </p>
                    </div>
                </div>
            </div>

            {/* Story Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-6">
                            Our <span className="gradient-text">Story</span>
                        </h2>
                        <div className="space-y-4 text-gray-400 leading-relaxed">
                            <p>
                                Founded in 2020, E-Shop began with a simple vision: to make online shopping 
                                accessible, enjoyable, and trustworthy for everyone. What started as a 
                                small startup has grown into a trusted marketplace serving millions of customers.
                            </p>
                            <p>
                                We believe in the power of technology to connect people with products they love, 
                                while maintaining the highest standards of customer service and product quality.
                            </p>
                            <p>
                                Today, we continue to innovate and expand our offerings, always keeping our 
                                customers at the heart of everything we do.
                            </p>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur opacity-20"></div>
                        <div className="relative dark-card rounded-2xl p-8 gradient-border">
                            <div className="grid grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="text-center">
                                        <div className="text-4xl font-bold gradient-text mb-2">{stat.number}</div>
                                        <div className="text-gray-500">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="dark-card rounded-2xl p-8 gradient-border hover:border-purple-500/50 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-6">
                            <FaRocket className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To provide a seamless shopping experience that combines quality products, 
                            competitive prices, and exceptional customer service. We strive to make 
                            online shopping effortless and enjoyable for everyone.
                        </p>
                    </div>
                    <div className="dark-card rounded-2xl p-8 gradient-border hover:border-pink-500/50 transition-all duration-300">
                        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center mb-6">
                            <FaStar className="text-white text-2xl" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                        <p className="text-gray-400 leading-relaxed">
                            To become the most trusted online marketplace, known for innovation, 
                            reliability, and customer satisfaction. We envision a world where 
                            shopping is simple, secure, and delightful.
                        </p>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Why Choose <span className="gradient-text">E-Shop</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We're committed to providing you with the best shopping experience possible
                    </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div 
                            key={index} 
                            className="dark-card rounded-xl p-6 gradient-border hover:border-purple-500/50 transition-all duration-300 hover:transform hover:-translate-y-1"
                        >
                            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center mb-4">
                                <feature.icon className="text-purple-400 text-xl" />
                            </div>
                            <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Values Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 mb-12">
                <div className="dark-card rounded-2xl p-10 gradient-border">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold text-white mb-4">
                            Our <span className="gradient-text">Values</span>
                        </h2>
                    </div>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                <FaShieldAlt className="text-purple-400 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Trust</h3>
                            <p className="text-gray-500 text-sm">
                                Building lasting relationships through transparency and honesty
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-pink-500/20 flex items-center justify-center mb-4">
                                <FaHeart className="text-pink-400 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Passion</h3>
                            <p className="text-gray-500 text-sm">
                                Dedicated to exceeding customer expectations every day
                            </p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 mx-auto rounded-full bg-purple-500/20 flex items-center justify-center mb-4">
                                <FaStar className="text-purple-400 text-2xl" />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                            <p className="text-gray-500 text-sm">
                                Striving for perfection in everything we do
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;

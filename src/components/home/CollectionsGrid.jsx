import { Link } from "react-router-dom";

const CollectionsGrid = () => {
    const collections = [
        {
            id: 1,
            title: "Banarasi Silk",
            image: "/collections/model_silk_saree.png",
            link: "/products"
        },
        {
            id: 2,
            title: "Designer Lehengas",
            image: "/collections/model_lehenga.png",
            link: "/products"
        },
        {
            id: 3,
            title: "Summer Cottons",
            image: "/collections/model_cotton_saree.png",
            link: "/products"
        },
        {
            id: 4,
            title: "Premium Anarkalis",
            image: "/collections/model_anarkali.png",
            link: "/products"
        }
    ];

    return (
        <section className="w-full mb-16 md:mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
                {collections.map((collection) => (
                    <div key={collection.id} className="flex flex-col group cursor-pointer border-r border-b border-gray-100 last:border-r-0">
                        {/* Image Container */}
                        <div className="w-full overflow-hidden bg-[#f6f6f6] aspect-[4/5] relative flex items-center justify-center pt-8 md:pt-12 px-8">
                            <img 
                                src={collection.image} 
                                alt={collection.title}
                                className="w-full h-full object-cover object-top mix-blend-multiply transition-transform duration-1000 group-hover:scale-105"
                            />
                        </div>
                        
                        {/* Label Container */}
                        <div className="py-6 px-6 flex justify-start bg-white">
                            <h3 className="text-[13px] tracking-wide font-medium text-gray-900 group-hover:underline underline-offset-4 decoration-1">
                                {collection.title}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default CollectionsGrid;

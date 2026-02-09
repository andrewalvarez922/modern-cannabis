import React from 'react';

const Brands = () => {
    const brands = [
        { name: "OIL TRADERZ", color: "text-primary-black" },
        { name: "BUD TRADERZ", color: "text-primary-black" },
        { name: "OKC KUSH CO", color: "text-primary-black" },
        { name: "OIL & CO", color: "text-primary-black" },
        { name: "FROZEN FARMS", color: "text-emerald-700" },
    ];

    return (
        <section id="brands" className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-primary-black mb-4">
                        Our Exclusive <span className="text-accent-green">Brands</span>
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto">
                        Cultivating excellence across our diverse portfolio of premium cannabis products.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center opacity-80">
                    {/* Stylized Text Logos */}
                    <div className="p-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span className="text-2xl font-black tracking-tighter">OIL<span className="text-accent-green">TRADERZ</span></span>
                    </div>

                    <div className="p-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span className="text-2xl font-black tracking-tighter">BUD<span className="text-accent-green">TRADERZ</span></span>
                    </div>

                    <div className="p-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span className="text-2xl font-black tracking-widest text-primary-black">OKC KUSH CO</span>
                    </div>

                    <div className="p-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span className="text-2xl font-bold font-serif">OIL <span className="text-accent-green">&</span> CO</span>
                    </div>

                    <div className="p-8 grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                        <span className="text-2xl font-bold tracking-tight text-emerald-800">FROZEN<span className="text-accent-green">FARMS</span></span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Brands;

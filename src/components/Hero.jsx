import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/assets/hero-bg.jpg"
                    alt="Modern Cannabis Facility"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-black via-primary-black/90 to-transparent opacity-95"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Content */}
                <div className="space-y-8 max-w-2xl">
                    <div className="inline-block px-4 py-1 bg-accent-green/10 border border-accent-green/20 rounded-full">
                        <span className="text-accent-green text-xs font-bold tracking-widest uppercase">
                            Vertically Integrated Supply Chain
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white">
                        One Source. <br />
                        <span className="text-accent-green">Every Cannabis Product.</span>
                    </h1>

                    <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                        Empowering retailers and brands with premium, lab-tested cannabis solutions.
                        From bulk distillate to finished retail goods.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <button className="px-8 py-4 bg-accent-green text-primary-black font-bold rounded-full hover:bg-white transition-all transform hover:translate-y-[-2px] shadow-[0_0_20px_rgba(0,200,116,0.3)]">
                            Browse Inventory
                        </button>
                        <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-full hover:border-accent-green hover:text-accent-green transition-all">
                            Wholesale Portal
                        </button>
                    </div>
                </div>

                {/* Right Content - Floating Product Cards */}
                {/* On mobile, this will stack below content. On LG, it floats right. */}
                <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 flex gap-4 overflow-x-auto pb-8 lg:pb-0 lg:pl-10 no-scrollbar snap-x">

                    {/* Card 1: Distillate */}
                    <div className="flex-shrink-0 w-72 h-[420px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-accent-green/50 transition-all duration-300 group snap-center">
                        <div className="h-1/2 overflow-hidden relative">
                            <img
                                src="/assets/distillate.jpg"
                                alt="Distillate"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent"></div>
                        </div>
                        <div className="p-6 h-1/2 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Distillate</h3>
                                <p className="text-sm text-gray-400">97%+ Total Cannabinoids. Bulk pricing available.</p>
                            </div>
                            <div className="flex items-center text-accent-green text-sm font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                                View Specs <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </div>

                    {/* Card 2: Disposables */}
                    <div className="flex-shrink-0 w-72 h-[420px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-accent-green/50 transition-all duration-300 group snap-center translate-y-8">
                        <div className="h-1/2 overflow-hidden relative">
                            <img
                                src="/assets/vape.png"
                                alt="Disposables"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent"></div>
                        </div>
                        <div className="p-6 h-1/2 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Disposables</h3>
                                <p className="text-sm text-gray-400">All-in-one hardware - Minimum order 100 units.</p>
                            </div>
                            <div className="flex items-center text-accent-green text-sm font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                                Configure <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </div>

                    {/* Card 3: Prerolls */}
                    <div className="flex-shrink-0 w-72 h-[420px] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:border-accent-green/50 transition-all duration-300 group snap-center">
                        <div className="h-1/2 overflow-hidden relative">
                            <img
                                src="/assets/flower.png"
                                alt="Prerolls"
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-black/80 to-transparent"></div>
                        </div>
                        <div className="p-6 h-1/2 flex flex-col justify-between">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">Prerolls</h3>
                                <p className="text-sm text-gray-400">Premium Flower material. 1g Full Size. Lab Tested.</p>
                            </div>
                            <div className="flex items-center text-accent-green text-sm font-semibold cursor-pointer group-hover:translate-x-2 transition-transform">
                                See Strains <ArrowRight size={16} className="ml-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Hero;

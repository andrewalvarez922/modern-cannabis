import React from 'react';
import { Sprout, Factory, Package, Route, ArrowUpRight } from 'lucide-react';

const Services = () => {
    const services = [
        {
            icon: <Sprout size={32} className="text-accent-green" />,
            title: "Commercial Cultivation",
            desc: "Expert indoor and outdoor cultivation processes ensuring maximum yield and purity."
        },
        {
            icon: <Factory size={32} className="text-accent-green" />,
            title: "Manufacturing",
            desc: "Advanced processing to turn your raw biomass into market-ready finished products."
        },
        {
            icon: <Package size={32} className="text-accent-green" />,
            title: "Packaging",
            desc: "Best-in-class filling and bagging services for premium flower and concentrates."
        },
        {
            icon: <Route size={32} className="text-accent-green" />,
            title: "Distribution",
            desc: "Efficient supply chain management to get your products to customers quickly and safely."
        }
    ];

    return (
        <section id="services" className="bg-primary-black py-24 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-accent-green/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="mb-16">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Our Professional <span className="text-accent-green">Services</span>
                    </h2>
                    <div className="w-24 h-1 bg-accent-green rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group p-8 bg-white/5 border border-white/10 rounded-2xl hover:border-accent-green/50 transition-all duration-300 hover:-translate-y-2"
                        >
                            <div className="mb-6">{service.icon}</div>
                            <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed mb-8 min-h-[80px]">
                                {service.desc}
                            </p>

                            <a href="#" className="inline-flex items-center text-xs font-bold text-accent-green tracking-widest uppercase group-hover:text-white transition-colors">
                                Learn More <ArrowUpRight size={14} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;

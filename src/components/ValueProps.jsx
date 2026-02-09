import React from 'react';
import { ShieldCheck, Truck, RefreshCw, FlaskConical } from 'lucide-react';

const ValueProps = () => {
    const props = [
        {
            icon: <ShieldCheck size={48} className="text-accent-green mb-4" />,
            title: "Single Source",
            desc: "Full chain of custody"
        },
        {
            icon: <FlaskConical size={48} className="text-accent-green mb-4" />,
            title: "Lab Tested",
            desc: "Full Panel COAs"
        },
        {
            icon: <Truck size={48} className="text-accent-green mb-4" />,
            title: "Fast Delivery",
            desc: "Fleet and courier network"
        },
        {
            icon: <RefreshCw size={48} className="text-accent-green mb-4" />,
            title: "Money Back",
            desc: "Satisfaction guarantee"
        }
    ];

    return (
        <section className="bg-white py-20 border-b border-gray-100">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {props.map((item, index) => (
                        <div key={index} className="flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300">
                            <div className="p-6 bg-accent-green/5 rounded-3xl mb-6 group-hover:bg-accent-green/10 transition-colors">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-primary-black mb-2 uppercase tracking-tight">{item.title}</h3>
                            <p className="text-gray-500 font-medium">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ValueProps;

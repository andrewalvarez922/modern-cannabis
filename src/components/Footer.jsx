import React from 'react';
import { Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-primary-black border-t border-gray-900 py-12">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

                <div className="mb-6 md:mb-0">
                    <a href="#" className="font-sans text-xl font-bold tracking-tighter text-white">
                        MØDERN<span className="text-accent-green">CANNABIS</span>
                    </a>
                    <p className="text-gray-600 text-sm mt-2">
                        © {new Date().getFullYear()} Modern Cannabis Co. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="#" className="text-gray-500 hover:text-accent-green transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-accent-green transition-colors">
                        <Twitter size={20} />
                    </a>
                    <a href="#" className="text-gray-500 hover:text-accent-green transition-colors">
                        <Linkedin size={20} />
                    </a>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

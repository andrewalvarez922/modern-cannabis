import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'WHOLESALE', href: '#wholesale' },
        { name: 'BRANDS', href: '#brands' },
        { name: 'SERVICES', href: '#services' },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <a href="#" className="font-sans text-2xl font-bold tracking-tighter text-white">
                    MØDERN<span className="text-accent-green">CANNABIS</span>
                </a>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-gray-300 hover:text-accent-green transition-colors tracking-wide"
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-6 py-2 bg-accent-green text-primary-black font-semibold rounded-full hover:bg-white hover:text-primary-black transition-all transform hover:scale-105"
                    >
                        Contact Us
                    </a>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white hover:text-accent-green transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {mobileMenuOpen && (
                <div className="absolute top-full left-0 w-full bg-primary-black/95 backdrop-blur-lg border-b border-gray-800 md:hidden flex flex-col items-center py-8 space-y-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium text-white hover:text-accent-green"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href="#contact"
                        className="px-8 py-3 bg-accent-green text-primary-black font-bold rounded-full"
                        onClick={() => setMobileMenuOpen(false)}
                    >
                        Contact Us
                    </a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;

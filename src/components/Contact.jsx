import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="bg-white py-24">
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-start">

                    {/* Left: Info */}
                    <div className="space-y-12">
                        <div>
                            <h2 className="text-4xl text-primary-black font-bold mb-6">
                                Partner With <span className="text-accent-green">The Best.</span>
                            </h2>
                            <p className="text-gray-500 text-lg leading-relaxed">
                                Ready to scale your cannabis business? Contact our team for wholesale inquiries,
                                white-label manufacturing, or distribution partnerships.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="p-4 bg-accent-green/10 rounded-xl mr-6">
                                    <Mail className="text-accent-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-black mb-1">Email Us</h4>
                                    <p className="text-gray-500">info@moderncannabis.co</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-4 bg-accent-green/10 rounded-xl mr-6">
                                    <Phone className="text-accent-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-black mb-1">Call Us</h4>
                                    <p className="text-gray-500">+1 (800) 555-MODERN</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="p-4 bg-accent-green/10 rounded-xl mr-6">
                                    <MapPin className="text-accent-green" size={24} />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-primary-black mb-1">Headquarters</h4>
                                    <p className="text-gray-500">
                                        7200 Innovation Way<br />
                                        Oklahoma City, OK 73102
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Form */}
                    <div className="bg-gray-50 p-8 md:p-12 rounded-3xl shadow-sm">
                        <form className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="John Doe"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all placeholder:text-gray-300 text-primary-black"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="john@company.com"
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all placeholder:text-gray-300 text-primary-black"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">How can we help?</label>
                                <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all text-gray-700">
                                    <option>Wholesale Inquiry</option>
                                    <option>White Label Services</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
                                <textarea
                                    rows="4"
                                    placeholder="Tell us about your project..."
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-accent-green focus:ring-2 focus:ring-accent-green/20 outline-none transition-all placeholder:text-gray-300 text-primary-black"
                                ></textarea>
                            </div>

                            <button className="w-full py-4 bg-accent-green text-primary-black font-bold rounded-xl hover:bg-emerald-500 transition-colors shadow-lg shadow-accent-green/20">
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;

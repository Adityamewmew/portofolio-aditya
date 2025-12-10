import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Code, PenTool, Layout, Smartphone, Globe, Database, Server, Camera, Play, ExternalLink, Mail, Phone } from 'lucide-react';

const Portfolio = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    // GANTI NAMA ANDA DI SINI
    const yourName = "Aditya Purnama Herlambang";

    // Handle scroll effect for navbar
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Data Skill Bubbles
    const skills = [
        { name: "React JS", color: "bg-blue-500", size: "scale-110" },
        { name: "UI/UX Design", color: "bg-purple-500", size: "scale-100" },
        { name: "Php", color: "bg-cyan-400", size: "scale-125" },
        { name: "JavaScript", color: "bg-yellow-400", size: "scale-105" },
        { name: "Figma", color: "bg-pink-500", size: "scale-95" },
        { name: "Premiere Pro", color: "bg-green-500", size: "scale-110" },
        { name: "After Effect", color: "bg-blue-400", size: "scale-100" },
        { name: "Capcut", color: "bg-blue-600", size: "scale-90" },
        { name: "Davinci", color: "bg-orange-500", size: "scale-100" },
    ];

    // Data Layanan
    const services = [
        { icon: <Code size={24} />, title: "Development", desc: "Membangun website modern dan responsif." },
        { icon: <PenTool size={24} />, title: "UI/UX Designer", desc: "Desain antarmuka yang intuitif dan menarik." },
        { icon: <Layout size={24} />, title: "Graphic Designer", desc: "Visual branding yang kuat untuk bisnis Anda." },
        { icon: <Smartphone size={24} />, title: "Motion Graphic", desc: "Animasi halus untuk pengalaman pengguna." },
        { icon: <Camera size={24} />, title: "Photography", desc: "Visual berkualitas tinggi untuk produk Anda." },
        { icon: <Play size={24} />, title: "Videography", desc: "Konten video yang menarik dan cinematic." },
    ];

    // Data Portofolio (LINK YANG DIMASUKKAN DI SINI)
    const portfolioItems = [
        {
            title: "Safety Induction",
            category: "Google Drive",
            image: "porto1.png", // Ganti dengan gambar thumbnail video
            link: "https://drive.google.com/file/d/1kSA9oudueCjetEInDQmu6FmqN1xXRr-1/view?usp=drive_link",
            className: ""
        },
        {
            title: "Jemparingan",
            category: "Google Drive",
            image: "porto2.png", // Ganti dengan gambar thumbnail video
            link: "https://drive.google.com/file/d/1FSTLt298oh23GxWRZ4K1a3tBANq4jQp8/view?usp=drive_link",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },
        {
            title: "Ambang(Short film)",
            category: "Social Media",
            image: "porto3.png", // Ganti dengan gambar thumbnail video
            link: "https://www.instagram.com/reel/DRegvR7j7t2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            className: ""
        },

        {
            title: "OMG X Gandrung Sewu",
            category: "Social Media",
            image: "porto4.png", // Ganti dengan gambar thumbnail video
            link: "https://www.instagram.com/reel/DQl4gPvElc7/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },
        {
            title: "Company Profile HMJBI 2025",
            category: "Youtube",
            image: "porto5.png", // Ganti dengan gambar thumbnail video
            link: "https://youtu.be/FH6rZKw6U34?si=Houmzjok7Iuy3t7a",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },
        {
            title: "Company Profile Satgas PPKPT",
            category: "Social Media",
            image: "porto6.png", // Ganti dengan gambar thumbnail video
            link: "https://www.instagram.com/reel/DM6-P9MyLRq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },

        {
            title: "OMG X BEC",
            category: "Social Media",
            image: "porto7.png", // Ganti dengan gambar thumbnail video
            link: "https://www.instagram.com/reel/DMVaVvQTyjk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },

        {
            title: "Angkatan 2024 SMK PGRI 1 GIRI",
            category: "Google Drive",
            image: "porto8.png", // Ganti dengan gambar thumbnail video
            link: "https://drive.google.com/file/d/1THM5YVp47HBznI3TWyVSHhdjrSmCkOMa/view?usp=drive_link",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },

        {
            title: "Dance Rock Ur Body",
            category: "Social Media",
            image: "porto9.png", // Ganti dengan gambar thumbnail video
            link: "https://www.instagram.com/reel/DK9stsgpNOn/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
            className: "md:mt-12" // Efek turun sedikit untuk item tengah
        },
    ];

    return (
        <div className="min-h-screen bg-[#191919] text-white font-sans overflow-x-hidden selection:bg-[#5454D4] selection:text-white">

            {/* Background Gradients/Glows */}
            <div className="fixed top-[-10%] right-[-5%] w-96 h-96 bg-[#5454D4] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>
            <div className="fixed bottom-[-10%] left-[-5%] w-96 h-96 bg-[#5454D4] rounded-full blur-[150px] opacity-20 pointer-events-none"></div>

            {/* Navbar */}
            <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#191919]/90 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
                <div className="container mx-auto px-6 flex justify-between items-center">
                    <div className="text-2xl font-bold flex items-center gap-2">
                        <span className="text-[#5454D4]">{yourName}</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center gap-8 text-gray-300">
                        <a href="#home" className="hover:text-[#5454D4] transition-colors">Beranda</a>
                        <a href="#services" className="hover:text-[#5454D4] transition-colors">Layanan</a>
                        <a href="#portfolio" className="hover:text-[#5454D4] transition-colors">Proyek</a>
                        <a href="#about" className="hover:text-[#5454D4] transition-colors">Tentang</a>
                    </div>

                    <a href="#contact" className="hidden md:block border border-white/20 px-6 py-2 rounded-lg hover:bg-white hover:text-black transition-all duration-300">
                        Hubungi Kami
                    </a>

                    {/* Mobile Menu Toggle */}
                    <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 w-full bg-[#1F1D2B] border-t border-white/10 p-6 flex flex-col gap-4">
                        <a href="#home" className="block text-gray-300 hover:text-[#5454D4]" onClick={() => setIsMenuOpen(false)}>Beranda</a>
                        <a href="#services" className="block text-gray-300 hover:text-[#5454D4]" onClick={() => setIsMenuOpen(false)}>Layanan</a>
                        <a href="#portfolio" className="block text-gray-300 hover:text-[#5454D4]" onClick={() => setIsMenuOpen(false)}>Proyek</a>
                        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="block w-full mt-4 bg-[#5454D4] py-3 rounded-lg font-medium text-center">Hubungi Kami</a>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">

                    {/* Hero Text */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
                            Halo, Saya <br />
                            <span className="text-[#5454D4]">{yourName}</span>
                        </h1>
                        <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto md:mx-0 leading-relaxed">
                            Mewujudkan ide kreatif Anda menjadi website dan aplikasi digital yang modern, cepat, dan fungsional.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <a href="#services" className="bg-[#5454D4] hover:bg-[#4343aa] text-white px-8 py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-[#5454D4]/30">
                                Layanan Saya
                                <ArrowRight size={18} />
                            </a>
                            <a href="#portfolio" className="border border-white/20 hover:border-white px-8 py-3.5 rounded-lg transition-all flex items-center justify-center gap-2">
                                <Play size={18} fill="currentColor" /> Lihat Portofolio
                            </a>
                        </div>
                    </div>

                    {/* Hero Image / Visual */}
                    <div className="flex-1 relative z-10 w-full max-w-lg">
                        {/* Geometric Decorations */}
                        <div className="absolute top-0 right-0 animate-bounce delay-700">
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" className="text-yellow-400">
                                <circle cx="20" cy="20" r="10" stroke="currentColor" strokeWidth="4" />
                            </svg>
                        </div>
                        <div className="absolute bottom-10 left-0 animate-pulse">
                            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" className="text-[#5454D4]">
                                <path d="M15 0L30 15L15 30L0 15L15 0Z" stroke="currentColor" strokeWidth="2" />
                            </svg>
                        </div>

                        {/* Main Image Container */}
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#5454D4] to-pink-500 rounded-[2rem] rotate-6 group-hover:rotate-3 transition-transform duration-500 opacity-60 blur-sm"></div>
                            <div className="relative bg-[#252532] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                                {/* FOTO ANDA */}
                                <img src="1.png" alt={yourName} className="w-full h-auto object-cover opacity-100 hover:scale-105 transition-transform duration-700" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SKILL BUBBLES SECTION */}
            <section className="py-20 bg-[#1F1D2B]/50 backdrop-blur-sm relative overflow-hidden">
                <div className="container mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Keahlian & Teknologi</h2>
                    <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
                        Saya menggunakan teknologi terbaru untuk memastikan performa terbaik.
                    </p>

                    <div className="relative flex flex-wrap justify-center gap-6 md:gap-8 max-w-4xl mx-auto p-8">
                        {skills.map((skill, index) => (
                            <div key={index} className={` ${skill.size} relative group cursor-default transition-all duration-500 ease-in-out hover:-translate-y-2 `} style={{ animation: `float ${3 + index * 0.5}s ease-in-out infinite` }}>
                                {/* Bubble Background */}
                                <div className={`absolute inset-0 rounded-full blur-md opacity-40 group-hover:opacity-70 transition-opacity ${skill.color}`}></div>

                                {/* Bubble Content */}
                                <div className="relative bg-[#252532] border border-white/10 px-6 py-3 md:px-8 md:py-4 rounded-full shadow-xl flex items-center justify-center">
                                    <span className="font-semibold text-sm md:text-base text-gray-200 group-hover:text-white transition-colors">
                                        {skill.name}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CSS for custom float animation */}
                <style>
                    {`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
              100% { transform: translateY(0px); }
            }
          `}
                </style>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="max-w-xl">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Layanan yang Saya <br /> Sediakan Untuk Anda
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex gap-2 text-[#5454D4]">
                            <ArrowRight className="animate-pulse" />
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((item, idx) => (
                        <div key={idx} className="group p-8 rounded-[20px] hover:bg-[#1F1D2B] transition-all duration-300 border border-transparent hover:border-white/5 cursor-pointer text-center">
                            <div className="w-14 h-14 mx-auto bg-[#5454D4]/20 text-[#5454D4] rounded-full flex items-center justify-center mb-6 group-hover:bg-[#5454D4] group-hover:text-white transition-all duration-300 shadow-[0_0_20px_rgba(84,84,212,0.3)]">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Portfolio Section */}
            <section id="portfolio" className="py-20 container mx-auto px-6">
                <h2 className="text-3xl md:text-5xl font-bold mb-16 leading-tight">
                    Portofolio Luar Biasa Saya
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                    {portfolioItems.map((project, idx) => (
                        <a key={idx} href={project.link} target="_blank" rel="noopener noreferrer" className={`md:col-span-1 bg-[#1F1D2B] p-4 rounded-3xl group cursor-pointer hover:-translate-y-2 transition-transform duration-300 block ${project.className}`}>
                            <div className="overflow-hidden rounded-2xl h-[400px] relative">
                                <img src={project.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={project.title} />
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                    <ExternalLink size={32} className="text-white mb-2" />
                                    <span className="text-white font-bold text-lg">{project.title}</span>
                                    <span className="text-[#5454D4] text-sm bg-white/10 px-3 py-1 rounded-full">Klik untuk melihat</span>
                                </div>
                            </div>
                            <div className="mt-4 px-2">
                                <h4 className="text-lg font-bold">{project.title}</h4>
                                <p className="text-sm text-gray-400">{project.category}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 container mx-auto px-6">
                <div className="bg-[#1F1D2B] rounded-[30px] p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden border border-white/5">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#5454D4] rounded-full blur-[100px] opacity-20 pointer-events-none"></div>

                    <div className="flex-1 z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Hubungi saya untuk layanan yang ingin Anda gunakan
                        </h2>
                        <p className="text-gray-400 text-lg mb-8 max-w-xl">
                            Saya siap membantu Anda membuat proyek digital yang menakjubkan. Diskusikan ide Anda sekarang melalui email atau telepon.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="mailto:purnamaaditya939@gmail.com"
                                className="bg-[#5454D4] hover:bg-[#4343aa] text-white px-8 py-3.5 rounded-lg flex items-center justify-center gap-3 transition-all shadow-lg shadow-[#5454D4]/30">
                                <Mail size={20} /> Hubungi via Email
                            </a>
                            <a href="https://wa.me/6281249155653" target="_blank" rel="noreferrer"
                                className="border border-white/20 hover:border-white px-8 py-3.5 rounded-lg transition-all flex items-center justify-center gap-3 hover:bg-white/5">
                                <Phone size={20} /> +62 812-4915-5653
                            </a>
                        </div>
                    </div>

                    {/* Decorative Icon Side */}
                    <div className="relative z-10 hidden md:flex items-center justify-center w-full md:w-auto">
                        <div className="w-64 h-64 bg-[#252532] rounded-full flex items-center justify-center border border-white/10 relative">
                            <div className="absolute inset-0 rounded-full border border-[#5454D4]/30 animate-[spin_10s_linear_infinite]"></div>
                            <Mail size={80} className="text-[#5454D4]" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-[#1F1D2B] py-12 mt-20 border-t border-white/5">
                <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-2xl font-bold text-white">{yourName}</div>

                    <div className="flex gap-6 text-gray-400 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Support</a>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
                    </div>

                    <div className="text-gray-500 text-sm">
                        © 2024 {yourName}. All Rights Reserved
                    </div>
                </div>
            </footer>

        </div>
    );
};

export default Portfolio;

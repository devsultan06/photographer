"use client";

import { navLinks } from "@/data/navLinks";
import CustomImage from "@components/ui/CustomImage";
import GradientButton from "@components/ui/GradientButton";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 900) {
                setIsOpen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="fixed border-b border-dark12  left-0 top-0 z-50 right-0  bg-dark06 text-white  px-[100px] max-900:px-[20px] transition-all duration-300">
            <div className="max-900:border-l border-r border-dark12 max-900:flex max-900:justify-between">


                <div className="border-l border-r border-dark12 max-900:border-none flex items-center justify-between px-[30px] max-900:px-0 ">
                    <Link href="/">
                        <div className="flex items-center gap-4  py-5 max-900:px-3 max-900:py-7">
                            <CustomImage src="/images/Logo.png" alt="Logo" width={130} height={130} priority />
                        </div>
                    </Link>

                    <nav className="flex items-center max-900:hidden border-t border-r border-l border-dark12 rounded-tl-lg rounded-tr-lg  mt-[30px] ">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`py-5 px-4 transition border-l border-dark12
                          ${pathname === link.href
                                        ? "bg-dark12 text-white rounded-tl-lg rounded-tr-lg "
                                        : "text-grey70 hover:bg-dark12 hover:border-lightgrey rounded-tl-lg rounded-tr-lg"
                                    }`
                                }
                            >
                                {link.name}
                            </Link>

                        ))}

                    </nav>
                    <div className="max-900:hidden">

                        <GradientButton href="/contact">Contact Us</GradientButton>

                    </div>

                </div>

                <div className={`fixed top-0 right-0 h-full w-full bg-black text-white flex flex-col items-center justify-center px-6 py-10 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"} max-900:flex max-900:fixed
            `}>
                    {/* Close Button */}
                    <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 text-white text-2xl">
                        ✖
                    </button>

                    <div className="flex flex-col gap-6 text-xl">
                        {navLinks.map((link) => (
                            <Link key={link.href} href={link.href} onClick={handleLinkClick} className="py-2 hover:bg-lightgrey p-3 rounded-md text-center">
                                {link.name}
                            </Link>
                        ))}
                    </div>

                    <div className="mt-[20px]">

                        <GradientButton href="/contact">Contact Us</GradientButton>

                    </div>
                </div>

                <button className="hidden max-900:block text-white border border-dark12 rounded-tl-[25px] mt-[20px] p-3 " onClick={() => setIsOpen(!isOpen)}>
                    <CustomImage src="/images/toggle.png" alt="Menu" width={30} height={30} />
                </button>

            </div>
        </div>
    );
}

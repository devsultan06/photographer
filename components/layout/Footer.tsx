"use client";
import CustomImage from "@components/ui/CustomImage";
import React from "react";
import Socials from "./Socials";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className=" bg-dark03 text-white py-10">

            <div className="relative py-10">
                <div className="absolute left-0 top-1/2 transform -translate-y-1/2 max-900:bottom-40 z-10">
                    <CustomImage src="/images/three.png" alt="Logo" width={100} height={100} />
                </div>

                <div className="absolute  inset-0 flex flex-col items-center justify-center text-center px-[150px] uppercase max-900:px-[20px] z-20">
                    <p className="text-lg text-grey50 mb-[30px] pt[100px]">A MORE MEANINGFUL HOME FOR PHOTOGRAPHY</p>
                    <div className="inline-flex items-center gap-2">
                        <h1 className="text-[40px]">Let’s</h1>
                        <CustomImage src="/images/button.png" alt="Hero" width={80} height={100} />
                    </div>
                    <h1 className="text-[40px]">Work Together</h1>
                </div>

                <div className="absolute right-0 top-1/2 transform -translate-y-1/2 max-900:bottom-40 z-10">
                    <CustomImage src="/images/three2.png" alt="Logo" width={100} height={100} className="z-1" />
                </div>
            </div>



            <div className="flex justify-between px-[100px] items-center pt-[80px] mt-10 text-gray-400  max-900:block text-center max-900:px-[0px] ">

                <div className="max-900:mx-auto flex justify-center max-900:mt-[30px]">
                    <Socials />

                </div>

                <p className="text-grey50 text-sm">
                    @ {year} Damien Braun Photography. All rights reserved.
                </p>
            </div>

        </footer >
    );
};

export default Footer;

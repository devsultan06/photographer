"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { faqdata } from "@/data/faqdata";

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-[100px] max-900:px-[20px]" >
            {faqdata.map((faq, index) => (
                <motion.div
                    key={index}
                    className="border-b border-dark12 py-3"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                    <button
                        onClick={() => toggleFAQ(index)}
                        className="w-full flex justify-between items-center text-white text-lg text-left"
                    >
                        <span className="text-left text-grey70">{faq.question}</span>
                        {openIndex === index ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
                    </button>


                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: openIndex === index ? "auto" : 0, opacity: openIndex === index ? 1 : 0 }}
                        className="overflow-hidden text-gray-400 text-sm mt-2 text-left w-full"
                    >
                        {openIndex === index && <p className="text-left w-full text-grey50 mt-[10px] capitalize">{faq.answer}</p>}
                    </motion.div>

                </motion.div>
            ))}
        </div>
    );
};

export default Faq;

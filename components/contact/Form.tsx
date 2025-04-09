'use client'

import Socials from "@components/layout/Socials"
import CustomImage from "@components/ui/CustomImage"
import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"

const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(5, "Message must be at least 5 characters long"),
})

type FormData = z.infer<typeof formSchema>

const Form = () => {
    const [sent, setSent] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(formSchema),
    })

    const onSubmit = (data: FormData) => {
        console.log("Message sent:", data)
        alert("Message sent successfully!")
        setSent(true)
        reset()
    }

    return (
        <div className="pb-[60px] mb-[100px]">
            <div className="flex max-900:block items-start gap-10 px-[100px] max-900:px-[20px]">
                <div className="flex-[1] max-900:w-full">
                    <h1 className="text-[30px] max-900:text-[25px] mb-[30px] text-grey50">Send Me a Message</h1>
                    <p className="text-grey50 normal-case">
                        Have a specific inquiry or message for us? Please use the contact form below, and we'll get back to you
                        promptly.
                    </p>
                </div>

                <div className="flex-[2]">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="flex gap-10 max-900:block mb-[20px]">
                            <div className="flex-[1] max-900:w-full">
                                <label className="text-grey90 capitalize">First Name</label>
                                <input
                                    {...register("firstName")}
                                    className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                    placeholder="FIRST NAME"
                                />
                                {errors.firstName && <p className="text-red-500 text-sm mt-[5px]">{errors.firstName.message}</p>}
                            </div>

                            <div className="flex-[1] max-900:w-full">
                                <label className="text-grey90 capitalize">Last Name</label>
                                <input
                                    {...register("lastName")}
                                    className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                    placeholder="LAST NAME"
                                />
                                {errors.lastName && <p className="text-red-500 text-sm mt-[5px]">{errors.lastName.message}</p>}
                            </div>
                        </div>

                        <div className="flex gap-10 max-900:block mb-[20px]">
                            <div className="flex-[1] max-900:w-full">
                                <label className="text-grey90 capitalize">Email</label>
                                <input
                                    {...register("email")}
                                    className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                    placeholder="EMAIL ADDRESS"
                                />
                                {errors.email && <p className="text-red-500 text-sm mt-[5px]">{errors.email.message}</p>}
                            </div>

                            <div className="flex-[1] max-900:w-full">
                                <label className="text-grey90 capitalize">Phone Number</label>
                                <input
                                    {...register("phone")}
                                    className="w-full border-b border-dark20 h-[50px] mt-[5px] text-grey90 bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90"
                                    placeholder="PHONE NUMBER"
                                />
                            </div>
                        </div>

                        <div className="mt-[30px]">
                            <label className="text-grey90 capitalize">Your Message</label>
                            <textarea
                                {...register("message")}
                                rows={2}
                                className="w-full border-b border-dark20 mt-[10px] text-grey90 pb-[5px] bg-transparent placeholder:text-grey40 focus:outline-none focus:border-grey90 resize-none"
                                placeholder="MESSAGE"
                            />
                            {errors.message && <p className="text-red-500 text-sm mt-[5px]">{errors.message.message}</p>}
                        </div>

                        <div className="mt-[30px]">
                            <div className="flex items-center gap-2">
                                <h1 className="text-[40px]">SEND MESSAGE</h1>
                                <button type="submit">
                                    <CustomImage src="/images/button.png" alt="Hero" width={80} height={100} />
                                </button>
                            </div>
                            {sent && <p className="text-green-500 mt-2">Your message was sent successfully!</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Form

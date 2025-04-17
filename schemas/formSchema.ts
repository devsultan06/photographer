import { z } from "zod"

export const formSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().optional(),
    message: z.string().min(5, "Message must be at least 5 characters long"),
})

export type FormData = z.infer<typeof formSchema>
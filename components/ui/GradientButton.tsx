import Link from "next/link";

interface GradientButtonProps {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function GradientButton({ href, children, onClick }: GradientButtonProps) {
    const ButtonContent = (
        <button
            className="relative px-6 py-3 text-white rounded-md transition duration-300 
                bg-[#2F2F37]
                before:absolute before:inset-[-3px] before:rounded-lg before:bg-gradient-to-r 
                before:from-[#2F2F37] before:via-transparent before:to-transparent
                before:-z-10 before:blur-md hover:before:opacity-80"
            onClick={onClick}
        >
            {children}
        </button>
    );

    return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
}

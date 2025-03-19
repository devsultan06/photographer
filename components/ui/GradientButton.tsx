import Link from "next/link";

interface GradientButtonProps {
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
}

export default function GradientButton({ href, children, onClick,}: GradientButtonProps) {
    const ButtonContent = (
        <button
            className="relative px-6 py-3 text-white rounded-md transition duration-300 bg-cover bg-center hover:opacity-80"
            style={{ backgroundImage: `url(${"/images/btn.png"})` }}
            onClick={onClick}
        >
            {children}
        </button>
    );

    return href ? <Link href={href}>{ButtonContent}</Link> : ButtonContent;
}

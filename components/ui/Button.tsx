import { MdArrowForward } from "react-icons/md";

interface ButtonWithArrowProps {
    text: string;
    onClick?: () => void;
    className?: string;
    showArrow?: boolean;
    bgImage?: string; // New prop for background image
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
    text,
    onClick,
    className = "",
    showArrow = true,
   // Default background image
}) => {
    return (
        <button
            onClick={onClick}
            className={`relative flex items-center justify-center gap-2 text-white px-6 py-3 rounded-lg transition duration-300
                bg-cover bg-center hover:opacity-80 ${className}`}
            style={{ backgroundImage: `url(${"/images/btn.png"})` }}
        >
            {text}
            {showArrow && <MdArrowForward className="text-white w-5 h-5" />}
        </button>
    );
};

export default ButtonWithArrow;

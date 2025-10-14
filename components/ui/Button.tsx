"use client";

import { MdArrowForward } from "react-icons/md";
import { useRouter } from "next/navigation";

interface ButtonWithArrowProps {
  text: string;
  onClick?: () => void;
  route?: string; // 👈 new optional route prop
  className?: string;
  showArrow?: boolean;
}

const ButtonWithArrow: React.FC<ButtonWithArrowProps> = ({
  text,
  onClick,
  route,
  className = "",
  showArrow = true,
}) => {
  const router = useRouter();

  const handleClick = () => {
    if (onClick) {
      onClick(); // allow custom behavior
    } else if (route) {
      router.push(route); // navigate if route provided
    }
  };

  return (
    <button
      onClick={handleClick}
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

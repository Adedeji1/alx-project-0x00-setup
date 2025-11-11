import React from "react";

interface ButtonProps {
    title: string;
    size?: "small" | "medium" | "large";
    shape?: "rounded-sm" | "rounded-md" | "rounded-full";
    className?: string;
    onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
    title,
    size = "medium",
    shape = "rounded-md",
    className = "",
    onClick,
}) =>{
   const baseStyles = "text-white font-semibold transition-colors duration-300";

  const sizeStyles = {
    small: "px-3 py-1 text-sm",
    medium: "px-4 py-2 text-base",
    large: "px-6 py-3 text-lg",
  }[size];

  const shapeStyles = {
    "rounded-sm": "rounded-sm",
    "rounded-md": "rounded-md",
    "rounded-full": "rounded-full",
  }[shape];

  return (
    <button 
        onClick={onClick}
        className={`${baseStyles} ${sizeStyles} ${shapeStyles} bg-blue-600 hover:bg-blue-700 ${className}`}
    >
        {title}
    </button>
  );
};

export default Button;
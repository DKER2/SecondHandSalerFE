import React from 'react';

interface ButtonProps {
    onClick?: () => void;          // Type the onClick as a function that returns nothing
    children: React.ReactNode;    // Type the children to accept any valid React node
    customClassName?: string;     // Optional string for additional CSS classes
    disabled?: boolean;           // Optional boolean for disabled state
}

const Button: React.FC<ButtonProps> = ({ onClick= () => {}, children, customClassName = '', disabled = false }) => {
    return (
        <button
            className={`hover:border-b-gray-800 border-b-gray-300 border-4 bg-white rounded-none ${customClassName}`} // Ensure you have standard-button or similar in your CSS
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
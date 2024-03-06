import React, {FC} from 'react';

export interface IButtonsProps {
    style?: string,
    children: React.ReactNode,
    onClick?: () => void;
}

const Buttons:FC<IButtonsProps> = (
    {
        style,
        children,
        onClick,
    }
) => {
    return (
        <button className={`text-[20px] min-h-[50px] rounded-lg font-bold text-center w-full ${style}`}
                onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Buttons;
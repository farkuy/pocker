import React, {FC} from 'react';

export interface IButtonsProps {
    style?: string,
    children: React.ReactNode,
}

const Buttons:FC<IButtonsProps> = (
    {
        style,
        children,
    }
) => {
    return (
        <button className={`text-[20px] rounded-lg font-bold text-center w-full ${style}`}
        >
            {children}
        </button>
    );
};

export default Buttons;
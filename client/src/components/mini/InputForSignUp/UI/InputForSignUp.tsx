import React, {FC} from 'react';
import {IInputForSignUp} from "../model/IInputForSignUp";

const InputForSignUp:FC<IInputForSignUp> = (
    {
        placeholder,
        typeInputForSignUp = 'text',
        testId,
        errorTestId,
        error,
        register
    }
) => {
    return (
        <div
            className={'mb-[10px]'}
        >
            <input
                className={'w-full font-semibold p-[12px] bg-[#F8F1FF] rounded-md h-[40px]'}
                type={typeInputForSignUp}
                data-testid={testId}
                placeholder={placeholder}
                {...register}
            />
            {error && (
                <div
                    className={'text-red-600 text-[14px] text-center'}
                    data-testid={errorTestId}
                >
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default InputForSignUp;
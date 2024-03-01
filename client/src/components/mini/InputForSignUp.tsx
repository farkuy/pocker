import React, {FC} from 'react';
import {IInputForSignUp} from "../big/Auth/models/IAuth";

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
        <div>
            <input
                className={'text-red-600'}
                type={typeInputForSignUp}
                data-testid={testId}
                placeholder={placeholder}
                {...register}
            />
            {error && (
                <div
                    className={'text-red-600 text-[14px]'}
                    data-testid={errorTestId}
                >
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default InputForSignUp;
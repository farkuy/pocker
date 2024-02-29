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
                type={typeInputForSignUp}
                data-testid={testId}
                placeholder={placeholder}
                {...register}
            />
            {error && (
                <div
                    data-testid={errorTestId}
                >
                    {error.message}
                </div>
            )}
        </div>
    );
};

export default InputForSignUp;
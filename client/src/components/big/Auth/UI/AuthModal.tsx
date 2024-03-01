import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod'
import {IField, IRegister, TypeInput} from "../models/IAuth";
import {signUpSchema} from "../models/model";
import InputForSignUp from "../../../mini/InputForSignUp";


const authField: IField[] = [
    {
        name: 'email',
        placeholder: 'Ваш email',
        type: TypeInput.text,
    },
    {
        name: 'password',
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
    {
        name: 'repeatPassword',
        placeholder: 'Повторите пароль',
        type: TypeInput.password,
    },
]

const AuthModal = () => {
    // @ts-ignore
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        formState: { isDirty, isSubmitting, errors },} = useForm<IRegister>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const registerSubmit: SubmitHandler<IRegister> = (data) => {
        alert('Вы зарегестрировались')
    };

    return (
        <form
            data-testid="add_new_user"
            onSubmit={handleSubmit(registerSubmit)}
        >
            {
                authField.map((item, index) => {
                    // @ts-ignore
                    return (
                        <InputForSignUp
                            placeholder={item.placeholder}
                            register={register(item.name)}
                            typeInputForSignUp={item.type}
                            error={errors[item.name]}
                            testId={`new_user_${item.name}`}
                            errorTestId={`error_message_${item.name}`}
                            key={index}
                        />
                    )
                })
            }
            <div>
                <button
                >
                    Регистрация
                </button>
            </div>
        </form>
    );
}

export default AuthModal;

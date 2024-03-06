import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigUp, signUpSchema} from "../models/model";
import {zodResolver} from "@hookform/resolvers/zod";
import InputForSignUp from "../../../mini/InputForSignUp/UI/InputForSignUp";
import Buttons from "../../../mini/Button/Buttons";
import {signUpField} from "../models/consts";
const SignUp = () => {

    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        trigger,
        formState: { isDirty, isSubmitting, errors },} = useForm<FormSchemaSigUp>({
        resolver: zodResolver(signUpSchema),
        defaultValues: {
            email: '',
            password: '',
            repeatPassword: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigUp> = (data) => {
        alert('Вы зарегестрировались')
    };

    return (
        <form
            data-testid="add_new_user"
            onSubmit={handleSubmit(registerSubmit)}
        >
            {
                signUpField.map((item, index) => {
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
            <div className={'mt-[50px]'}>
                <Buttons
                    style={'text-white min-h-[40px] bg-[#985ACE]'}
                >
                    Регистрация
                </Buttons>
            </div>
        </form>
    );
};

export default SignUp;
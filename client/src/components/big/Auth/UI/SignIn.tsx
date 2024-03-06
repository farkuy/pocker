import React from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {FormSchemaSigIn, FormSchemaSigUp, signInSchema, signUpSchema} from "../models/model";
import {zodResolver} from "@hookform/resolvers/zod";
import InputForSignUp from "../../../mini/InputForSignUp/UI/InputForSignUp";
import Buttons from "../../../mini/Button/Buttons";
import {signInField} from "../models/consts";

const SignIn = () => {
    const {
        register,
        handleSubmit,
        reset,
        setFocus,
        trigger,
        formState: { isDirty, isSubmitting, errors },} = useForm<FormSchemaSigIn>({
        resolver: zodResolver(signInSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const registerSubmit: SubmitHandler<FormSchemaSigIn> = (data) => {
        alert('Вы вошли')
    };

    return (
        <form
            data-testid="add_new_user"
            onSubmit={handleSubmit(registerSubmit)}
        >
            {
                signInField.map((item, index) => {
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
            <div className={'mt-[20px]'}>
                <Buttons
                    style={'text-white min-h-[40px] bg-[#985ACE]'}
                >
                    Войти
                </Buttons>
            </div>
        </form>
    );
};

export default SignIn;
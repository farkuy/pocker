import {IField, IFieldSign, NameIField, NameIFiendSignIn, TypeInput} from "./IAuth";

export const signInField: IFieldSign[] = [
    {
        name: NameIFiendSignIn.email,
        placeholder: 'Ваш email',
        type: TypeInput.text,
    },
    {
        name: NameIFiendSignIn.password,
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
]


export const signUpField: IField[] = [
    {
        name: NameIField.name,
        placeholder: 'Ваше имя',
        type: TypeInput.text,
    },
    {
        name: NameIField.email,
        placeholder: 'Ваш email',
        type: TypeInput.text,
    },
    {
        name: NameIField.password,
        placeholder: 'Ваш пароль',
        type: TypeInput.password,
    },
    {
        name: NameIField.repeatPassword,
        placeholder: 'Повторите пароль',
        type: TypeInput.password,
    },
]
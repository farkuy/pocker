import React from 'react';
import {render, screen} from "@testing-library/react"
import '@testing-library/jest-dom/extend-expect';
import AuthModal from "../components/big/Auth/UI/AuthModal";
import userEvent from "@testing-library/user-event";

describe('Регистрация нового пользователя', () => {
    render(<AuthModal />);

    const emailInput = screen.getByTestId('new_user_email');
    const password = screen.getByTestId('new_user_password');
    const repeatPassword = screen.getByTestId('new_user_repeatPassword');
    const addNewUser = screen.getByText(/регистрация/i);

    it('Пустой email и пароли', async () => {
        let errorBefore = await screen.queryByTestId("error_message_email");
        let errorPasswordBefore = await screen.queryByTestId("error_message_password")
        let repeatPasswordBefore = await screen.queryByTestId("error_message_repeatPassword")

        expect(errorBefore).toBeNull();
        expect(errorPasswordBefore).toBeNull();
        expect(repeatPasswordBefore).toBeNull();

        screen.debug();

        await userEvent.click(addNewUser);

        errorBefore = await screen.findByTestId("error_message_email");
        errorPasswordBefore = await screen.findByTestId("error_message_password");
        repeatPasswordBefore = await screen.findByTestId("error_message_repeatPassword");

        expect(errorBefore).toBeInTheDocument();
        expect(errorPasswordBefore).toBeInTheDocument();
        expect(repeatPasswordBefore).toBeInTheDocument();

        screen.debug();
    })

    it('Некорректная почта', async () => {
        const errorBefore = await screen.queryByTestId("error_message");
        expect(errorBefore).toBeNull();
        screen.debug();

        await userEvent.type(emailInput, "2wwqw3Серега")
        await userEvent.click(addNewUser);
        const error = await screen.findByText(/введите корректную эл.почту/i);
        expect(error).toBeInTheDocument();

        await userEvent.type(emailInput, "oleg@masail.casom.e");
        await userEvent.click(addNewUser);
        expect(error).toBeInTheDocument();

        await userEvent.type(emailInput, "@masail.ru");
        await userEvent.click(addNewUser);
        expect(error).toBeInTheDocument();
    })

    it('Тест неправльных паролей', async () => {
        let errorPasswordBefore = await screen.queryByTestId("error_message_password")
        let repeatPasswordBefore = await screen.queryByTestId("error_message_repeatPassword")

        expect(errorPasswordBefore).toBeNull();
        expect(repeatPasswordBefore).toBeNull();

        await userEvent.type(password, '2323');
        await userEvent.type(repeatPassword, '23111111')
        await userEvent.click(addNewUser);

        repeatPasswordBefore = await screen.findByTestId("error_message_repeatPassword")
        expect(repeatPasswordBefore)
    })

})


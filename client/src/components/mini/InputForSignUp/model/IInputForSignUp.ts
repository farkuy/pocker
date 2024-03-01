import {FieldError, IForTest, IRegisterHook, TypeInput} from "../../../big/Auth/models/IAuth";

export interface IInputForSignUp extends IForTest{
    placeholder?: string,
    typeInputForSignUp: TypeInput,
    error?: FieldError,
    register: IRegisterHook
}
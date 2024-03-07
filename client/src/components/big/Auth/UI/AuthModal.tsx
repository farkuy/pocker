import React, {useState} from 'react';
import {RegOrSig} from "../models/IAuth";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import Buttons from "../../../mini/Button/Buttons";

const AuthModal = () => {

    const [regOrSig, setRegOrSig] = useState<RegOrSig>(RegOrSig.signUp)

    return (
        <div className={'flex justify-center items-center w-screen h-screen bg-[#985ACE] backdrop-opacity-10'}>

            <div className={'max-w-[500px] tra w-full px-[50px] py-[60px] z-50 rounded-md relative bg-white'}>
                <div className={'absolute top-[-45px] left-0 flex flex-row'}>
                    <Buttons style={regOrSig === 'signIn' ? 'bg-white w-[120px]' : 'bg-green-50 w-[120px]'}
                             onClick={() => setRegOrSig(RegOrSig.signIn)}
                    >
                        Вход
                    </Buttons>
                    <Buttons style={regOrSig === 'signUp' ? 'bg-white w-[170px]' : 'bg-green-50 w-[170px]'}
                             onClick={() => setRegOrSig(RegOrSig.signUp)}
                    >
                        Регистрация
                    </Buttons>
                </div>
                <div className={'flex flex-row gap-[20px] mb-[20px] justify-center'}>
                    <p className={'text-center text-[30px]'}>
                        {
                            regOrSig === 'signIn'
                                ? 'Вход в учетную запись'
                                : 'Регистрация'
                        }
                    </p>
                </div>
                {
                    regOrSig === 'signIn'
                        ? <SignIn/>
                        : <SignUp/>
                }
            </div>
        </div>
    );
}

export default AuthModal;

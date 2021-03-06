import React, { useState } from 'react';
import LoginComponent from '../../components/login/loginComponent';
import ResetPassword from '../../components/password-reset/PasswordReset';
import './Entrystyle.css';

function Entrypage() {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [formLoad, setFormLoad] = useState('login');

    const handleOnChange = e => {
        var {name, value} = e.target;
        switch(name){
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            
        }
    };

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(email == ''){
           return  alert("No haz escrito ni correo ");
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        if((email == '') || (password = '')){
           return  alert("No haz escrito ni correo ni contraseña");
        }
        setPassword('');
        setEmail('');    

    }

    const formSwitcher = (frmtype) =>{
        setFormLoad(frmtype);
    }

    return (
        <div className="entry-page">
            <div className="jumbotron">
            {formLoad === 'login' && (
                <LoginComponent 
                    handleOnChange={handleOnChange}
                    handleSubmit={handleSubmit}
                    formSwitcher={formSwitcher} 
                    email={email}
                    password={password}
                />
            )}
            {formLoad === 'reset' && ( 
                <ResetPassword 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}  
                    email={email}
                />
            )}
            </div>
        </div>
    )
}

export default Entrypage

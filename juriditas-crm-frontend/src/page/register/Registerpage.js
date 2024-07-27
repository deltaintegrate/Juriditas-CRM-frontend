import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginComponent from '../../components/login/loginComponent';
import ResetPassword from '../../components/password-reset/PasswordReset';
import axios from "axios";
import './Registerstyle.css';

function Registerpage() {

    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [isdeleted, setDeleted] = useState(false);
    let [created_at, setCreated_at] = useState('');
    let [updated_at, setUpdated_at] = useState('');
    let [created_by, setCreated_by] = useState(1);
    let [userType, setUserType] = useState(2);
    let [userRoleType, setUserRoleType] = useState(2);
    let [document, setDocument] = useState('');
    let [document_number, setDocument_number] = useState('');
    let [lastname, setLastname] = useState('');
    let [city, setCity] = useState('');
    let [region, setRegion] = useState('');
    let [phone, setPhone] = useState(1);
    let [demand_id, setDemand_id] = useState(null);

    let navigate = useNavigate();
    let [formLoad, setFormLoad] = useState('login');

    const handleOnChange = e => {
        var {name, value} = e.target;
        switch(name){
            case "telefono":
                setTelefono(value);
                break;
            case "password":
                setPassword(value);
                break;
            case "correo":
                console.log(value);
                setCorreo(value);
                break;
            
        }
        if(name === "telefono"){
            setTelefono(value);
        }
        if(name === "password"){
            setPassword(value);
        }
        if(name === "correo"){
            setCorreo(value);
        }
    };

    const handleOnResetSubmit = e => {
        e.preventDefault();
        if(correo == ''){
           return  alert("No haz escrito ningun correo ");
        }

    }
    const handleSubmit = e => {
        e.preventDefault();
        if((telefono == '') || (password == '')){
           return  alert("No haz escrito ningun telefono o contraseña");
        }
        const configuration = {
            method: "post",
            url: "http://localhost:3005/api/v1/auth/login",
            data: {
                phone: telefono,
                password: password,
            },
          };
        axios(configuration)
          .then((result) => {
            navigate('/dashboard', { })
            console.log(result.data)
          })
          .catch((error) => {console.log(error);})
        
        setPassword('');
        setTelefono('');    

    }

    const formSwitcher = (frmtype) =>{
         (frmtype);
    }

    return (
        <div className="entry-page">
            <div className='image'></div>
            <div className="jumbotron">
            {formLoad === 'login' && (
                <LoginComponent 
                    handleOnChange={handleOnChange}
                    handleSubmit={handleSubmit}
                    formSwitcher={formSwitcher} 
                    telefono={telefono}
                    password={password}
                />
            )}
            {formLoad === 'reset' && ( 
                <ResetPassword 
                    handleOnChange={handleOnChange}
                    handleOnResetSubmit={handleOnResetSubmit}
                    formSwitcher={formSwitcher}  
                    correo={correo}
                />
            )}
            </div>
        </div>
    )
}

export default Entrypage

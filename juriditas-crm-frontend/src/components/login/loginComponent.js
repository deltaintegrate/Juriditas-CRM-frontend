import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import {Container, Row, Col, Form, Button, InputGroup} from 'react-bootstrap';
import './LoginStyle.css';

function loginComponent({handleOnChange, handleSubmit, telefono, password, formSwitcher}) {
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };
    return (
        <Container>
            <Row>
                <Col>
                <div className='text-container'>
                    <h1 className="text-initial" >Somos</h1>
                    <h1 className="text-final" >Juriditas</h1>
                </div>
                <div>
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Control className='input-telefono-cont'
                                type="telefono"
                                name="telefono"
                                placeholder="ingresa tu telefono"
                                value={telefono}
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group className='input-group-contrasena-cont'>
                            <Form.Control className='input-contrasena-cont'
                                type={passwordVisible ? 'text' : 'password'}
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Contraseña"
                                required
                            />
                            <span
                                className="password-toggle-icon"
                                onClick={togglePasswordVisibility}
                            >
                                {passwordVisible ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </Form.Group>
                        <Button className='boton-login' type="submit">Iniciar seccion</Button>
                    </Form>
                    <hr />
                </div>
                </Col>
            </Row>
            <Row className='row-suggetsion'>
                <Col>
                    <a href="#" onClick={() => formSwitcher('reset')}>¿Olvidaste tu contraseña?</a>
                </Col>
                <Col>
                    <Form.Check inline type='checkbox' label="Acepta terminos y condiciones"/>
                </Col>
            </Row>
        </Container>
    )
}



export default loginComponent

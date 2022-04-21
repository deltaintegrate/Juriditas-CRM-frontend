import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function loginComponent({handleOnChange, handleSubmit, email, password, formSwitcher}) {
    return (
        <Container>
            <Row>
                <Col>
                <div>
                    <h1 className="text-center" >Juriditas</h1>
                </div>
                <div>
                    <Form autoComplete="off" onSubmit={handleSubmit}>
                        <Form.Group >
                            <Form.Label>Correo electronico</Form.Label>
                            <Form.Control 
                                type="email"
                                name="email"
                                placeholder="ingresa tu correo"
                                value={email}
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control 
                                type="password"
                                name="password"
                                value={password}
                                onChange={handleOnChange}
                                placeholder="Contraseña"
                                required
        
                            />
                        </Form.Group>
                        <Button type="submit">Iniciar seccion</Button>
                    </Form>
                    <hr />
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher('reset')}>¿Olvidaste tu contraseña?</a>
                </Col>
            </Row>
        </Container>
    )
}



export default loginComponent

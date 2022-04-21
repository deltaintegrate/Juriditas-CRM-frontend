import React from 'react';
import {Container, Row, Col, Form, Button} from 'react-bootstrap';

function ResetPassword ({handleOnChange, handleOnResetSubmit, email, formSwitcher }) {
    return (
        <Container>
            <Row>
                <Col>
                <div>
                    <h1 className="text-center" >Recuperar Contraseña</h1>
                </div>
                <div>
                    <Form autoComplete="off" onSubmit={handleOnResetSubmit}>
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
                        <Button type="submit">Recuperar contraseña</Button>
                    </Form>
                    <hr />
                </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <a href="#" onClick={() => formSwitcher('login')} >Inicia session</a>
                </Col>
            </Row>
        </Container>
    )
}



export default ResetPassword

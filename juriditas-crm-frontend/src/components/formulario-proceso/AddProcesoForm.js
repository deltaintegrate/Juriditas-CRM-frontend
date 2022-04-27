import React from 'react'
import {Form, Button, Row, Col} from  'react-bootstrap';
import '../../page/entry/Entrystyle.css';
import './addProcesoForm.css';


function AddProcesoForm({handleOnChange, handleSubmit, FrmData}) {
    
    return (
        <div className="jumbotron mt-4 add-new-proceso">
                    
                    <Form autoComplete="off" onSubmit={handleSubmit} >
                        <Form.Group >
                            <Form.Label>Nombre completo</Form.Label>
                            <Form.Control 
                                type="text"
                                name="nombre"
                                placeholder="Ingresa tu Nombre completo"
                                value={FrmData.nombre}
                                onChange={handleOnChange}
                                required
                            />
                        </Form.Group>
                        <Form.Group >
                            <Form.Label >Apellidos</Form.Label>
                            <Form.Control 
                                type="text"
                                name="apellido"
                                value={FrmData.apellido}
                                onChange={handleOnChange}
                                placeholder="Ingresa tus apellidos"
                                required
                            />
                        </Form.Group>
                        <Form.Group as={Row} className="mb-3 mt-3" >
                        <Form.Label column sm={3} >Ingresa tu Documento</Form.Label>
                            <Col sm={3}>
                            <Form.Select type="text" name="tipo_documento" value={FrmData.tipo_documento} onChange={handleOnChange}>
                                <option>tipo de documento</option>
                                <option value="cc" >Cedula de ciudadania</option>
                                <option value="ce" >Cedula de extranjeria</option>
                                <option value="ti" >Tarjeta de identidad</option>
                            </Form.Select>
                            </Col>
                            <Col sm={6} >
                            <Form.Control 
                                type="text"
                                name="documento"
                                value={FrmData.documento}
                                onChange={handleOnChange}
                                placeholder="Ingresa tus numero de documento"
                                required
                            />
                            </Col>
                        </Form.Group>
                        <div className="d-grid gap-2">   
                        <Button type="submit" size="lg" variant="dark"  >Crear Proceso</Button>
                        </div>
                    </Form>
        </div>
    )
}

export default AddProcesoForm

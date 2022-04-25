import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import TablaProcesos from '../../components/tabla-proceso/TablaProcesos';

import users from '../../assets/data/DummyUser';
import Procesos from '../../assets/data/DummyProcess';

function Dashboard({name}) {
    return (
        <Container>
        <Row>
            <Col className="mt-3 " >
                <h3>Hola {name}, Bienvenido a la información sobre tu proceso</h3> 
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2" >
                <Button variant="dark" style={{
                    'fontSize':'1rem',
                    'padding':'10px 30px'
                    }} >Nuevo Proceso</Button>
            </Col>
            <Col className="text-center mt-5 mb-5" >
                <Button variant="dark" style={{
                    'fontSize':'1rem',
                    'padding':'10px 30px'
                    }} >Subir Anexo</Button>
            </Col>
        </Row>
        <Row>
            <Col className="recent-proceso" >
                <TablaProcesos users={users} procesos={Procesos} />
            </Col>
        </Row>
        <Row>
            <Col className="text-center mt-5 mb-2" >
                    <div>Avance del Proceso: 50% </div>
                    <div>Informacion pendiente por diligenciar: 5 archivos </div>
            </Col>
        </Row>       
        </Container>
    )
}

export default Dashboard

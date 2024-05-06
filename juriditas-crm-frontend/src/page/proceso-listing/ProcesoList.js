import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import PageBreadCrumb from '../../components/breadcrumb/Breadcrumb';
import SearchForm from '../../components/formsearch/SearchForm';
import InfoProcesos from '../../components/process-info-table/Infoproceso';
import users from '../../assets/data/DummyUser';
import Procesos from '../../assets/data/DummyProcess';



function ProcesoList() {
    const [str, setStr] = useState('');
    const [displayProceso, setDisplayProceso] = useState([]);

    useEffect(() =>{
        setDisplayProceso(Procesos);
    }, [str,displayProceso])

    const handleOnChange = e => {
        const {value} = e.target.value;
        console.log(value)
        setStr(value)
        searchProceso(value)
        
    };

    const searchProceso = sttr => {
        const displayProcesos =  Procesos.filter(row => row.nombre_documento.toLowerCase().
        includes(sttr.toLowerCase()));

        setDisplayProceso(displayProcesos);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="lista de procesos" />
                </Col>
            </Row>
            <Row className='mt-4'>
                <Col>
                    <Button variant="dark">Agregar nuevo proceso</Button>
                </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} str={str} />
                </Col>
            </Row>
            <hr />
            <Row>
                <Col>
                    <InfoProcesos users={users} procesos={displayProceso} />
                </Col>
            </Row>
        </Container>
    )
}

export default ProcesoList

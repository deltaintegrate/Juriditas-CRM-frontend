import React, {useState, useEffect} from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import  PageBreadCrumb  from '../../components/breadcrumb/Breadcrumb';
import AddProcesoForm from '../../components/formulario-proceso/AddProcesoForm';


const initialFrmDt = {
        nombre: '',
        apellido:'',
        tipo_documento:'',
        documento:'',
}

function AddProcesoPage() {

    const [FrmData, setFrmData] = useState(initialFrmDt);
    useEffect(() => {}, [FrmData]);

    const handleOnChange = e => {
        const {name, value} = e.target;
        setFrmData({
            ...FrmData,
            [name]:value,
        })
    }

    const handleSubmit = async e => {
        console.log(FrmData)
        e.preventDefault()
        alert('Nuevo proceso creado');
        setFrmData(initialFrmDt)
    }
    return (
        <Container>
            <Row>
                <Col>
                    <PageBreadCrumb page="nuevo Proceso" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddProcesoForm 
                    handleOnChange={handleOnChange} 
                    handleSubmit={handleSubmit}
                    FrmData={FrmData}/>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProcesoPage

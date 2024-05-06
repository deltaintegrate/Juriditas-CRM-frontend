import React from 'react';
import {Table} from 'react-bootstrap';

function InfoProcesos({users, procesos}) {

    return (
<>
        <Table striped bordered hover className="mb-5">
            <thead>
                <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Documento</th>
                <th>Fecha de inicio del proceso</th>
                </tr>
            </thead>
            <tbody>
            {users.length ? users.map( row => (
                <tr key={row.id}>
                    <td>{row.nombre}</td>
                    <td>{row.apellido}</td>
                    <td>{row.documento}</td>
                    <td>{row.Fecha_inicio}</td>
                </tr>
            )):
            <tr>
                <td colSpan="4" className="text-center" >No existe Procesos asociados a este usuario aún</td>
            </tr>
            }
            </tbody>
        </Table>
        <h4>Documentos añexos del proceso</h4>
        <Table striped bordered hover >
            <thead>
                <tr>
                <th>Nombre documento</th>
                <th>Formato del documento</th>
                <th>Ver documento</th>
                <th>Estado del documento en el proceso</th>
                </tr>
            </thead>
            <tbody>
            {procesos.length ? procesos.map( row => (
                    <tr key={row.id_proceso}>
                    <td>{row.nombre_documento}</td>
                    <td>{row.formato +" - "+ row.extension}</td>
                    <td>{row.base64}</td>
                    <td>{row.Estado_anexo}</td>
                </tr>
            )): 
            <tr>
                <td colSpan="4" className="text-center" >No existe Anexos asociado, Agrega alguno </td>
            </tr>}
            </tbody>
        </Table>
        </>
    )
}

export default InfoProcesos

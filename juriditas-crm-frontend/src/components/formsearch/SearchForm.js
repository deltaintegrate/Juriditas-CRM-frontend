import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';


function SearchForm({handleOnChange, str}) {
    
    return (
        
        <div>
        <Form>
            <Form.Group as={Row}>
                <Form.Label column sm="2">
                    Buscar:{" "}
                </Form.Label>
                <Col sm="10">
                    <Form.Control 
                    name="searchstr"
                    onChange={handleOnChange}
                    value={str}
                    placeholder="Busca tu proceso ..."
                    />
                </Col>
            </Form.Group>
        </Form>
            
        </div>
    )
}

export default SearchForm

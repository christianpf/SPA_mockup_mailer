import {useState} from "react"

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {

    const initialEntries = {name: "", email: "", phone:"", message: ""}
    const [formEntries, setFormEntries] = useState(initialEntries);
    const {name, email, phone, message} = formEntries;

    const handleOnChange = (e) => {
        setFormEntries({...formEntries, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:3002/send', {
            method: "POST",
            body: JSON.stringify(formEntries),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }).then(
            (response) => (response.json())).then((response)=> {
        if (response.status === 'success') {
            alert("Message Sent.");
            setFormEntries({name: "", email: "", phone:"", message: ""})
        } else if(response.status === 'fail') {
            alert("Message failed to send.")
        }
        })
    }

    return (
        <Container className="contact-container">
            <Row>
                <Col md={12} lg={5} className="mt-5">
                    <h3 className="title">Contacta conmigo y comencemos tu viaje</h3>
                    <p className="text">Deja tus datos por aquí y me pondre en contacto contigo cuanto antes</p>
                </Col>
                <Col md={12} lg={7} className="form">
                 <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="name">           
                        <Form.Label >Nombre Completo: </Form.Label>
                        <Form.Control required type="text" value={name} name="name" onChange={handleOnChange}/>
                        </Form.Group>

                        <Form.Group controlId="email">
                            <Form.Label className="mt-3">Email:</Form.Label>
                            <Form.Control required type="email" name="email" placeholder="Introduzca su email" value={email} onChange={handleOnChange}/>
                        </Form.Group>

                        
                        <Form.Group controlId="phone">
                            <Form.Label  className="mt-3">Número de teléfono (opcional): </Form.Label>
                            <Form.Control type="number" name="phone" placeholder="Introduzca su telefono móvil" value={phone} onChange={handleOnChange}/>
                        </Form.Group>


                        <Form.Group controlId="message">
                            <Form.Label className="mt-3">Mensaje:</Form.Label>
                            <Form.Control as="textarea" rows="4" name="message" required value={message} onChange={handleOnChange}/>
                        </Form.Group>
                        <div className="submit-container">
                        <Button className="submit-form" type="submit">Enviar
                        </Button>
                        </div>
                    </Form>
                </Col>
            </Row>

        </Container>
    )
}


export default Contact;
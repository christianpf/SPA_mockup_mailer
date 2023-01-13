import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Contact = () => {
    return (
        <Container className="justify-content-between contact-container">
            <Row>
                <Col md={12} lg={5}>
                    <h3 className="title">Contacta conmigo y comencemos tu viaje</h3>
                    <p className="text">Deja tus datos por aquí y me pondre en contacto contigo cuanto antes</p>
                </Col>
                <Col md={12} lg={7} className="form">
                    d
                </Col>
            </Row>

        </Container>
    )
}


export default Contact;
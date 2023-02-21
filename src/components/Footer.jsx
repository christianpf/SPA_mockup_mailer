import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import { Whatsapp, Instagram } from 'react-bootstrap-icons'

const Footer = () => {
    return (
        <Container>
            <Row>
                <h3 className='c-title'>Si lo prefieres seguimos en contacto por mis redes sociales</h3>
            </Row>
            <Row className="text-center">
                <Col className=" p-2" xs={12} md={6}>
                    <a href="#whatsapp"><Whatsapp color='#E3FAEC' size={96}/></a>
                </Col>
                <Col className="p-2" xs={12} md={6}>
                    <a href="#instagram"><Instagram color='#E3FAEC' size={96} /></a>
                </Col>

            </Row>

            <Row>
                <h5 className='despedida'> ¡¡¡ Muchas Gracias, nos vemos pronto !!! </h5>
                <p className='copyright'>2023. Creado por Christian Pascua</p>
            </Row>
        </Container>
    )
}

export default Footer;



import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image"

import foto from '../assets/foto-perfil.jpg'


const Hero = () => {
    return (
        <Container className="hero-container" >
            <Row>
                <Col md={12} lg={5}>
                    <Image 
                    className="foto"
                    src={foto} 
                    thumbnail
                    roundedCircle        
                    />
                </Col>
                <Col md={12} lg={7} className="hero-text mt-5">
                    <h2 className="title">Soy Ana y ayudo a gente como tú a dar un giro en su vidar</h2>
                    <p className="text">
                        Día a día olvidamos lo que es realmente importante, 
                        junto a mí conseguiras poner en valor lo realmente importante 
                        y volverás a tomar las riendas de tu vida.

                        No serás capaz de imaginarte lo que puedes llegar a conseguir
                    </p>
                </Col>
            </Row>
        </Container>
    );
}


export default Hero;
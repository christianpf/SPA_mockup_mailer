import Carousel  from "react-bootstrap/Carousel"
import Container from "react-bootstrap/Container"
import Image from "react-bootstrap/Image"


import testi1 from "../assets/testimonio_1.jpg"
import testi2 from "../assets/testimonio_2.jpg"
import testi3 from "../assets/testimonio_3.jpg"

const Testimonial = () => {

    const testimonios = [
        {
            "name": "Maria Jose",
            "text": "A mi me ha ayudado mucho a mejorar, sobre todo dandome cuenta que no debo cambiar a nadie, solamente a mí misma.",
            "path": testi2,
        },
        {
            "name": "Armando Guerra",
            "text": "Gran profesional Ana, realmente sabe donde hacer que mires para mejorar y llegar a alcanzar tus metas.",
            "path": testi3,
        },
        {
            "name": "Laura Moreno",
            "text": "No soy la misma, soy la mejor versión de mí. Desde que Ana empezó a trabajar conmigo todo vuelve a fluir, le debo muchísimo.",
            "path": testi1,
        }
    ]

    return (
        <Container className="testimonial-container">
            <h2 className="c-title">Logra el cambio que ellos han conseguido</h2>
            <Carousel>
                {testimonios.map((testi, index) => {
                    return <Carousel.Item className="c-item" key={index} interval={10000}>
                                <Image
                                className="d-block c-img"
                                src={testi.path}
                                thumbnail
                                alt={`Imagen del testimonio de ${testi.name}`}
                                />
                                {console.log(testi)}
                                <Carousel.Caption className="c-caption">
                                    <h3>{testi.name}</h3>
                                    <p>{testi.text}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
            })}

            </Carousel>
        </Container>
        
    )
}



export default Testimonial;
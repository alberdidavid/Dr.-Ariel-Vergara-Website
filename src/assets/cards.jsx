import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from 'react-router-dom';

function Cards() {
  return (
    <div className="flex flex-col gap-12 px-4 pb-5 lg:w-[765px]">

      <Card style={{ width: "100%" }} className="shadow-sm pc-card">
        <Card.Img variant="top" src="https://i.postimg.cc/nrrLDpFv/Whats-App-Image-2023-12-14-at-16-19-55.jpg"  className="lg:rounded-tl-md lg:rounded-bl-md radius-check"  />
        <Card.Body>
          <Card.Title className="font-sans uppercase">Tratamiento con Implantes</Card.Title>
          <Card.Text className="font-sans text-sm">
          La pérdida dental no solo afecta tu sonrisa, sino también tu confianza
          y comodidad en la vida diaria. ¿Te imaginas recuperar la libertad de
          comer lo que amas y mostrar una sonrisa radiante sin preocupaciones?
          </Card.Text>
          <Link to="/implantes"><Button className="shadow-sm btn-gray w-full">Haz click aqui</Button></Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%" }} className="shadow-sm pc-card">
        <Card.Img variant="top" src="https://i.postimg.cc/Bv0h98Lb/IMG-5202.png"  className="lg:rounded-tl-md lg:rounded-bl-md radius-check" />
        <Card.Body>
          <Card.Title className="font-sans uppercase">Rehabilitación Oral Adhesiva</Card.Title>
          <Card.Text className="font-sans text-sm">
          El alivio y la comodidad son beneficios tangibles para aquellos que
          han experimentado problemas dentales. La utilización de tecnología
          avanzada en los procedimientos de rehabilitación oral no solo
          garantiza resultados efectivos, sino que también minimiza las
          molestias asociadas.
          </Card.Text>
          <Link to="/rehabilitacion"><Button className="shadow-sm btn-gray w-full">Haz click aqui</Button></Link>
        </Card.Body>
      </Card>

      <Card style={{ width: "100%" }} className="shadow-sm pc-card">
        <Card.Img variant="top" src="https://i.postimg.cc/y8S5z4LQ/Whats-App-Image-2023-12-14-at-22-32-23.jpg" className="lg:rounded-tl-md lg:rounded-bl-md radius-check" />
        <Card.Body>
          <Card.Title className="font-sans uppercase">Estética Dental</Card.Title>
          <Card.Text className="font-sans text-sm">
          La estética dental no solo embellece la sonrisa, sino que también
          puede tener un impacto positivo en la apariencia facial general.
          Dientes bien alineados y proporcionados pueden realzar la armonía de
          tu rostro.
          </Card.Text>
          <Link to="/estetica"><Button  className="shadow-sm btn-gray w-full">Haz click aqui</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;

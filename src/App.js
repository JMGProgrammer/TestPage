import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Badge,
  Alert,
  Button,
} from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import Header from "../components/Header";

function App() {
  const [locales, setLocales] = useState([
    {
      id: 1,
      nombre: "Bar Sur",
      tipo: "Bar",
      ubicacion: "Colonia",
      imagen: "https://picsum.photos/seed/bar/800/600",
    },
    {
      id: 2,
      nombre: "Café Centro",
      tipo: "Cafetería",
      ubicacion: "Montevideo",
      imagen: "https://picsum.photos/seed/cafe/800/600",
    },
    {
      id: 3,
      nombre: "Food Truck Plaza",
      tipo: "Food Truck",
      ubicacion: "Canelones",
      imagen: "https://picsum.photos/seed/foodtruck/800/600",
    },
    {
      id: 4,
      nombre: "Pizzería La Esquina",
      tipo: "Restaurante",
      ubicacion: "San José",
      imagen: "https://picsum.photos/seed/pizza/800/600",
    },
  ]);

  const [platos, setPlatos] = useState([
    {
      id: 1,
      nombre: "Milanesa",
      precio: 450,
      localNombre: "Bar Sur",
      imagen: "https://picsum.photos/seed/milanesa/800/600",
    },
    {
      id: 2,
      nombre: "Capuccino",
      precio: 220,
      localNombre: "Café Centro",
      imagen: "https://picsum.photos/seed/capu/800/600",
    },
    {
      id: 3,
      nombre: "Hamburguesa completa con cheddar y panceta",
      precio: 520,
      localNombre: "Food Truck Plaza",
      imagen: "https://picsum.photos/seed/burger/800/600",
    },
    {
      id: 4,
      nombre: "Pizza muzzarella",
      precio: 600,
      localNombre: "Pizzería La Esquina",
      imagen: "https://picsum.photos/seed/pizzaplate/800/600",
    },
  ]);

  return (
    <>
      <Container className="my-4">
        <Navbar className="bg-body-tertiary">
          <Container>
            <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>
                Signed in as: <a href="#login">Mark Otto</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Card className="mb-4 mt-3">
          <Card.Body>
            <Card.Title as="h1"> Listado Taller</Card.Title>
          </Card.Body>
        </Card>

        <Card className="mb-4">
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>Locales</span>
            <Badge bg="secondary">{locales.length}</Badge>
          </Card.Header>

          <Card.Body>
            {locales.length === 0 && (
              <Alert variant="warning" className="mb-0">
                No hay locales para mostrar
              </Alert>
            )}

            <Row className="g-3">
              {locales.map((local) => (
                <Col key={local.id} xs={12} sm={6} md={4}>
                  <Card
                    className="h-100 hover-card"
                    key={local.id}
                    onClick={() => console.log("Test")}
                  >
                    <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={local.imagen}
                        alt={local.nombre}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="mb-2">{local.nombre}</Card.Title>

                      <Card.Text className="text-muted mb-3">
                        {local.tipo} — {local.ubicacion}
                      </Card.Text>

                      <div className="mt-auto mb-2">
                        <Badge bg="secondary">{local.tipo}</Badge>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>

        <Card>
          <Card.Header className="d-flex align-items-center justify-content-between">
            <span>Platos</span>
            <Badge bg="success">{platos.length}</Badge>
          </Card.Header>

          <Card.Body>
            {platos.length === 0 && (
              <Alert variant="warning" className="mb-0">
                No hay platos para mostrar
              </Alert>
            )}

            <Row className="g-3">
              {platos.map((plato) => (
                <Col key={plato.id} xs={12} sm={6} md={4}>
                  <Card className="h-100">
                    <div style={{ aspectRatio: "16 / 9", overflow: "hidden" }}>
                      <Card.Img
                        variant="top"
                        src={plato.imagen}
                        alt={plato.nombre}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </div>

                    <Card.Body className="d-flex flex-column">
                      <Card.Title className="mb-2">{plato.nombre}</Card.Title>

                      <Card.Text className="text-muted mb-3">
                        {plato.localNombre}
                      </Card.Text>

                      <div className="mt-auto mb-2 d-flex align-items-center justify-content-between">
                        <Badge bg="success">${plato.precio}</Badge>
                        <span className="text-muted" style={{ fontSize: 13 }}>
                          Plato
                        </span>
                      </div>

                      <Button onClick={() => console.log("Test")}>
                        Ver detalles
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Card.Body>
        </Card>
      </Container>

      <footer className="bg-dark text-light mt-5 py-4">
        <Container>
          <Row>
            <Col md={6}>
              <h5>Rutas del Sabor</h5>
              <p className="mb-0">Descubrí los mejores lugares para comer</p>
            </Col>

            <Col md={6} className="text-md-end mt-3">
              <p className="mb-0">2026 — Taller Frontend</p>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
}

export default App;

import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardBody,
  CardImg,
  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import NavbarSimples from "../components/NavbarSimples";
import SimpleFooter from "../components/Footers";

class Index extends React.Component {
  state = {};

  componentDidMount() {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    this.refs.main.scrollTop = 0;
  }

  render() {
    return (
      <>
        <NavbarSimples />
        <main ref="main">
          <div className="position-relative">
            <section className="section section-lg section-shaped pb-250">
              <div className="shape shape-style-1 shape-default">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
              <Container className="py-lg-md d-flex">
                <div className="col px-0">
                  <Row>
                    <Col lg="6">
                      <h1 className="display-3 text-white">
                        Estética Vanessa Baranano
                        <span> Especializada em redução de medidas </span>
                      </h1>
                      <p className="lead text-white">
                        Massoterapeuta - Massagem Terapêutica, Relaxante,
                        Modeladora, Lipomodelagem e Drenagem Linfática.
                      </p>
                    </Col>
                    <Col lg="6">
                      <div className="container-fluid">
                        <img
                          width="100%"
                          alt="..."
                          src={require("assets/img/brand/logo_vanessa.png")}
                        />
                      </div>
                    </Col>
                  </Row>
                </div>
              </Container>
              {/* SVG separator */}
              <div className="separator separator-bottom separator-skew">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                  version="1.1"
                  viewBox="0 0 2560 100"
                  x="0"
                  y="0"
                >
                  <polygon
                    className="fill-white"
                    points="2560 0 2560 100 0 100"
                  />
                </svg>
              </div>
            </section>
            {/* 1st Hero Variation */}
          </div>
          <section className="section section-lg pt-lg-0 mt--200">
            <Container>
              <Row className="justify-content-center">
                <Col lg="12">
                  <Row className="row-grid">
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-check-bold" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Massagem 1
                          </h6>
                          <p className="description mt-3">
                            Detalhes da Massagem
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              beneficio 1
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              beneficio 2
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              beneficio 3
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-success rounded-circle mb-4">
                            <i className="ni ni-istanbul" />
                          </div>
                          <h6 className="text-success text-uppercase">
                            Massagem 2
                          </h6>
                          <p className="description mt-3">
                            Detalhes da massagem
                          </p>
                          <div>
                            <Badge color="success" pill className="mr-1">
                              beneficio 1
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              beneficio 2
                            </Badge>
                            <Badge color="success" pill className="mr-1">
                              beneficio 3
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col lg="4">
                      <Card className="card-lift--hover shadow border-0">
                        <CardBody className="py-5">
                          <div className="icon icon-shape icon-shape-primary rounded-circle mb-4">
                            <i className="ni ni-planet" />
                          </div>
                          <h6 className="text-primary text-uppercase">
                            Massagem 3
                          </h6>
                          <p className="description mt-3">
                            Detalhes da massagem
                          </p>
                          <div>
                            <Badge color="primary" pill className="mr-1">
                              beneficio 1
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Beneficio 2
                            </Badge>
                            <Badge color="primary" pill className="mr-1">
                              Beneficio 3
                            </Badge>
                          </div>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section bg-secondary">
            <Container>
              <Row className="row-grid align-items-center">
                <Col md="6">
                  <Card className="bg-default shadow border-0">
                    <CardImg
                      width="50%"
                      height="50%"
                      alt="..."
                      src={require("assets/img/brand/foto_vanessa.jpg")}
                      top
                    />
                    <blockquote className="card-blockquote">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="svg-bg"
                        preserveAspectRatio="none"
                        viewBox="0 0 583 95"
                      >
                        <polygon
                          className="fill-default"
                          points="0,52 583,95 0,95"
                        />
                        <polygon
                          className="fill-default"
                          opacity=".2"
                          points="0,42 583,95 683,0 0,95"
                        />
                      </svg>
                      <h4 className="display-3 font-weight-bold text-white">
                        Vanessa Baranano
                      </h4>
                      <p className="lead text-italic text-white">
                        Estética Corpo
                      </p>
                    </blockquote>
                  </Card>
                </Col>
                <Col md="6">
                  <div className="pl-md-5">
                    <div className="icon icon-lg icon-shape icon-shape-default shadow rounded-circle mb-5">
                      <i className="ni ni-check-bold" />
                    </div>
                    <h3>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.Iusto, quam.
                    </h3>
                    <p className="lead">
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit.Placeat numquam deleniti sapiente veniam cum,
                      reiciendis laudantium alias, vel doloremque sed
                      reprehenderit distinctio nobis ad.Iure vero obcaecati
                      corrupti sequi ipsa, illo veritatis alias accusamus,
                      maxime dolorem provident aut minima fuga.
                    </p>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
          <section className="section pb-1 bg-gradient-default align-content-center">
            <Container>
              <Row className="row-grid align-items-center">
                <Col className="order-lg-4 ml-lg-auto" md="6">
                  <div className="pl-md-5">
                    <img
                      alt="..."
                      className="img-center img-fluid"
                      src={require("assets/img/ill/ill-2.svg")}
                    />
                  </div>
                </Col>
                <Col className="order-lg-1" lg="6">
                  <div className="d-flex px-3">
                    <div>
                      <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary">
                        <i className="fa fa-phone-square text-primary" />
                      </div>
                    </div>
                    <div className="pl-4">
                      <h4 className="display-3 text-white">
                        Marque seu Horario!
                      </h4>
                      <h3 className="display-5 text-white">
                        (53) 999145 - 9214
                      </h3>
                    </div>
                  </div>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-success rounded-circle text-white">
                            <i className="ni ni-square-pin" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-success">
                            Endereço Comercial
                          </h5>
                          <p>
                            Av.Presidente Vargas, 50 <br />
                            Sala 401
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                  <Card className="shadow shadow-lg--hover mt-5">
                    <CardBody>
                      <div className="d-flex px-3">
                        <div>
                          <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                            <i className="ni ni-square-pin" />
                          </div>
                        </div>
                        <div className="pl-4">
                          <h5 className="title text-primary">
                            Endereço Domiciliar
                          </h5>
                          <p>
                            Rua 11, Nº 225 <br />
                            São Martins
                          </p>
                        </div>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
            {/* SVG separator */}
            <div className="separator separator-bottom separator-skew zindex-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="fill-white"
                  points="2560 0 2560 100 0 100"
                />
              </svg>
            </div>
          </section>
        </main>
        <SimpleFooter />
      </>
    );
  }
}

export default Index;

import React from 'react'
import { Container, Row, Col, Nav, Tab }from "react-bootstrap"
import colorSharp from "../assets/color-sharp.png"
import design from "../assets/design.jpg"
import design2 from "../assets/design2.jpg"
import figma from "../assets/figma.jpg"
import react from "../assets/react.jpg"
import "animate.css"
import TrackVisibility from 'react-on-screen'

const projects = () => {
   const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: figma,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: design,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: design2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: react,
    }
  ];
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <Col size={12} sm={6} md={4}>
                                <div className="proj-imgbx">
                                  <img src={project.imgUrl}alt="" />
                                  <div className="proj-txtx">
                                    <h4>{project.title}</h4>
                                    <span>{project.description}</span>
                                  </div>
                                </div>
                              </Col>
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp} alt=""/>
    </section>
  )
}

export default projects
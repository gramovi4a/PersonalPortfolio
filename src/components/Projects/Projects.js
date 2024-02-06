import { Col, Container, Row, TabContent } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/project-img1.png";
import projImg2 from "../../assets/img/project-img2.png";
import projImg3 from "../../assets/img/project-img3.png";

import './Projects.css';

export const Projects = () => {
  const projects = [
    {
      title: "My portfolio",
      description:
        "My first portfolio. Since React.js is my current learning objective, I decided to showcase my newly acquired skills and practice to create my portfolio. ",
      imgUrl: projImg1,
    },
    {
      title: "Forum application",
      description:
        "Inspired by Reddit.com, I developed a forum application using Blazor, C#, and an SQLite database, aiming to strengthen my knowledge in .NET framework. ",
      imgUrl: projImg2,
    },
    {
      title: "Forum application",
      description:
        "Inspired by Reddit.com, I developed a forum application using Blazor, C#, and an SQLite database, aiming to strengthen my knowledge in .NET framework. ",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              These are all my projects. Check them out!
            </p>
            {/* react-bootstrap-tabs */}
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills"className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Group</Nav.Link>
                </Nav.Item>
              </Nav>

              <TabContent>
                <Tab.Pane eventKey="first">
                    <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index}
                                    
                                    {...project} 
                                    // to pass all properties of the project object as individual props to 
                                    // the ProjectCard component. 
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                <Row>
                        {
                            projects.map((project, index) => {
                                return (
                                    <ProjectCard key={index}
                                    
                                    {...project} 
                                    // to pass all properties of the project object as individual props to 
                                    // the ProjectCard component. 
                                    />
                                )
                            })
                        }
                    </Row>
                </Tab.Pane>
              </TabContent>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};

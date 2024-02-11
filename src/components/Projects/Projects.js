import { Col, Container, Row, TabContent } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import projImg1 from "../../assets/img/Portfolio.png";
import projImg2 from "../../assets/img/ForumApp.png";
import projImg3 from "../../assets/img/Valhalla.png";
import projImg4 from "../../assets/img/CenterSprog.png";

import './Projects.css';

export const Projects = () => {
  const personalProjects = [
    {
      title: "Portfolio Website",
      description:
        "To apply my newly acquired knowledge and skills in ReactJS, I decided to create my portfolio website to showcase what I've learnt and gain more practice.",
      imgUrl: projImg1,
    },
    {
      title: "Forum application",
      description:
        "Inspired by Reddit.com, I developed a forum application using Blazor, C#, and an SQLite database, aiming to strengthen my knowledge in .NET framework. ",
      imgUrl: projImg2,
    },
  ];

  const groupProjects = [
    {
      title: "Fitness App System",
      description:" A client/server system for Valhalla Fitness Gym. Made for trainees to be more organised in terms of planning their workout routines and meetings with personal trainers. Done with Java and SQL(PostgreSQL)",
      imgUrl: projImg3,
    },
    {
      title: "Language School System",
      description:"A distributed heterogeneous system for a language school. Made for teachers for efficient classroom management, and for students to have enjoyable learning experience. Done with Blazor, C#, Java, PostgreSQL and H2. Incorporated gRPC and REST.",
      imgUrl: projImg4,
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
                    <Row className="justify-content-center">
                        {
                            personalProjects.map((project, index) => {
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
                <Row className="justify-content-center">
                        {
                            groupProjects.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt="Imageright"></img>
    </section>
  );
};

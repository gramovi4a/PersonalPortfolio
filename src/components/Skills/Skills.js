// basic set up for react carousel
import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import reactjs from "../../assets/img/reactjs.png";
import java from "../../assets/img/java.png";
import javascript from "../../assets/img/javascript.png";
import csharp from "../../assets/img/csharpIcon.png";
import net from "../../assets/img/.net.png";
import html from "../../assets/img/html.png";
import css from "../../assets/img/css.png";
import sql from "../../assets/img/sql.png";
import blazor from "../../assets/img/blazor.svg";
import springboot from "../../assets/img/springboot.png";
import colorSharp from "../../assets/img/color-sharp.png";
import './Skills.css';

export const Skills = () => {
  // taken from https://www.npmjs.com/package/react-multi-carousel
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>These are languages and tools I am familiar with</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={java} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={csharp} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={javascript} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={reactjs} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={net} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={blazor} alt="Image"></img>
                </div>            
                <div className="item">
                  <img src={springboot} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={sql} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={html} alt="Image"></img>
                </div>
                <div className="item">
                  <img src={css} alt="Image"></img>
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Imageleft"></img>


    </section>
  );
};

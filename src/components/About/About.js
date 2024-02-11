import { Col, Container, Row } from "react-bootstrap";
import myPicture from "../../assets/img/my-picture.png";
import "./About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <Row className="align-items-center text-center-left">
          <Col size={12} md={6} className="firstcol">
            <img
              className="profile-picture"
              src={myPicture}
              alt="MyPicture"
            ></img>
          </Col>
          <Col size={12} md={6} className="text-center-left">
            <h2 className="text-center mb-4">About me</h2>
            <p>
              I am a Software Engineering student at VIA University College. My{" "}
              <span className="highlight">const</span> curiosity, enthusiasm and
              passion for innovation and problem-solving are what driving me to
              pursue this path. I aspire to master both the frontend and backend
              aspects of Software Development, aiming to become a proficient
              Full-Stack Developer. But I believe, I've got a sweet spot for
              frontend work. I always want to bring my creative ideas to the
              table, so the creativity frontend involves and the way it directly
              impacts users really lights me up! I am a continuous, but quick
              learner, a person that does not stop till the work is done, and
              done properly. I am a collaborator, and I believe, that working
              with other people and their diverse experiences and perspectives
              is what makes you grow. But I can take initiative make important
              decisions.{" "}
            </p>
            <p>
              Be open-minded and don't be afraid of anything - that's my motto.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg"

import './Banner.css';

export const Banner = () => {
  
  const [activeLink, setActiveLink] = useState("home");

    const [loopNum, setLoopNum] = useState(0);
    // is the word typing out or deleting, fasle => meaning typing
    const [isDeleting, setIsDeleting] = useState(false);
        // what text is showing right now, needs for component, portion of the word is being displayed
        const [text, setText] = useState('');
            // HOW FAST ONE LeTTER COMES AFTER ANOTHER
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    // which text to display
    const toRotate = [ "Software Developer", "Software Engineer", "Web Developer"];
    // how much time passes between typing one letter
    const period = 200;


    // function that takes care of typing or deleting
    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        } else if(isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }else {
            setIndex(prevIndex => prevIndex + 1);
    }
}

const onUpdateActiveLink = (value) => {
  setActiveLink(value);
};

  return (
    <section className="banner" id="home">
      {/* bootstrap container  */}
      <Container>
        <Row className="align-items-center" >
          <Col xs={12} md={6} xl={7}>
            {/* <span className="tagline">Welcome to my portfolio!</span> */}
            <div className="rotating-text-container">
              <h1>
                {'Hi! I am Julija'} </h1>
                <h1><span className="wrap">{text}</span>
              </h1>
            </div>
            <div className="main-banner-text">
            <p>
              I am a third semester student who is currently looking for an internship and student worker job!
            </p>
            </div>
            <a href="/CV.pdf" target="_blank" rel="noopener noreferrer">
              <button>See my CV <ArrowRightCircle size={25} /></button>
            </a>
            {/* <button onClick={() => onUpdateActiveLink("connect")}>See my CV <ArrowRightCircle size={25}/></button> */}
          </Col>
          <Col xs={12} md={6} xl={5}>
          <img src={headerImg} alt = 'Header Img'/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

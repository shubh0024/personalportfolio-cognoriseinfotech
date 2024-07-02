import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Texteditor from "../../Assets/Projects/texteditor.png";
import Todolist from "../../Assets/Projects/Todolist.png";
import newsmania from "../../Assets/Projects/newsmania.png";
import Ecommerce from "../../Assets/Projects/Ecommerce.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center",imageOrientation:"cover", paddingBottom: "1px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Texteditor}
              isBlog={false}
              title="Texteditor"
              description="A text editor is a software application used for creating and editing plain text files. These files can include anything from simple notes and documents to more complex programming code. Text editors differ from word processors in that they generally do not include formatting features like font styles, sizes, or page layout options.."
              ghLink="https://github.com/shubh0024/text-editor1"
              demoLink="https://shubh0024.github.io/text-editor1/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Todolist}
              isBlog={false}
              title="Tod list"
              description="A web appp which is created by html css javascript which is used by the users to  keep track of there task done or undone during the journey of achievements ."
              ghLink="https://github.com/shubh0024/To-dolist-cognorise"
              demoLink="https://shubh0024.github.io/To-dolist-cognorise/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newsmania}
              isBlog={false}
              title="NewsMania"
              description="NewsMania is a powerful and user-friendly news application that brings the latest headlines and stories directly to users' fingertips. With its robust features, responsive design, and seamless integration with the News API, NewsNow ensures that users stay informed and engaged with the news that matters most to them. Whether it's breaking news or in-depth articles, NewsNow provides a comprehensive and enjoyable news browsing experience."
              ghLink="https://github.com/shubh0024/Newsmania"
              demoLink="https://newsmania-cd0dbezra-shubh0024s-projects.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Ecommerce}
              isBlog={false}
              title="E commerce shop"
              description="E-Commerce Shop is a modern and user-friendly online shopping application built with React.js. This app provides users with a seamless shopping experience, allowing them to browse, search, and purchase products effortlessly."
              ghLink="https://github.com/shubh0024/E-commerce-Website"
              demoLink="https://shopnow-hazel.vercel.app//"
            />
          </Col>


        

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

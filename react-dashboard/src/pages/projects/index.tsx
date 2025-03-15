import { Row, Col, Card } from "react-bootstrap";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {
      title: "Finances",
      description: "A project to manage personal finance and budgeting.",
      path: "/project/finances",
    },
    {
      title: "Achievements",
      description: "A project to track and manage personal achievements.",
      path: "/project/achievements",
    },
    {
      title: "Works",
      description: "A project to manage work tasks and freelance projects.",
      path: "/project/works",
    },
  ];

  const navigate = useNavigate();

  return (
    <>
      <h1 className="my-3">Projects</h1>
      <Row className="mb-4">
        {projects.map((project, index) => (
          <Col key={index}>
            <Card>
              <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.description}</Card.Text>
                <Button color="primary" onClick={() => navigate(project.path)}>
                  View Project
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default Projects;

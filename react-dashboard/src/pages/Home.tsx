import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>Home Page</h1>
      <Button 
        color="primary" 
        onClick={() => navigate('/projects')}
      >
        Projects
      </Button>
    </>
  );
};

export default Home;
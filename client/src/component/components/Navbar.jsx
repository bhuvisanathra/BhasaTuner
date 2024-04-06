import Nav from "react-bootstrap/Nav";
import { database } from "../../firebase/Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";

function AlignmentExample() {
  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(database).then((val) => {
      localStorage.removeItem("authToken");
      navigate("/login");
    });
  };
  return (
    <>
      <Nav className="justify-content-end root1" activeKey="/home">
        <Nav.Item>
          <Nav.Link href="/homepage">Home</Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => navigate("/about-us")}>
            About Us
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={() => navigate("/contact-us")}>
            Contact Us
          </Nav.Link>
        </Nav.Item>

        <Nav.Item>
          <Nav.Link eventKey="link-2" onClick={handleSignOut}>
            Logout
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}

export default AlignmentExample;

import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import { useSelector } from "react-redux";
import "../assets/styles/Header.css";

function Header() {
  const auth = useSelector((state) => state.auth);
  const isValid = auth && new Date(auth.expiresAt) > new Date();
  const token = isValid ? auth.token : null;

  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link as={NavLink} to="/">Accueil</Nav.Link>
          <Nav.Link as={NavLink} to="/offres/publiques">Offres Publiques</Nav.Link>

          {token && (
            <Nav.Link as={NavLink} to="/offres/professionnelles">Offres Professionnelles</Nav.Link>
          )}

          {!token && (
            <>
              <Nav.Link as={NavLink} to="/inscription">Inscription</Nav.Link>
              <Nav.Link as={NavLink} to="/connexion">Connexion</Nav.Link>
            </>
          )}

          {token && (
            <Nav.Link as={NavLink} to="/deconnexion">Déconnexion</Nav.Link>
          )}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Header;

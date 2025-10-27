import { Container } from 'react-bootstrap';

function AppFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-4 bg-dark text-white text-center">
      <Container>
        <p className="mb-0">
          Copyright &copy; {currentYear} KEPGROUP. All Right Reserved.
        </p> 
      </Container>
    </footer>
  );
}

export default AppFooter;
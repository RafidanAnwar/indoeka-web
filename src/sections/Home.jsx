import { Container, Button } from 'react-bootstrap';

function Home() {
  return (
    <section id="home" className="hero-section p-0">
      {/* <div className="hero-overlay"></div> <-- INI DIHAPUS */}
      <Container className="hero-content">
        <h1 className="display-3">Kekuatan Alam, Energi Masa Depan</h1> {/* Gunakan display-3 untuk font lebih besar */}
        <p className="lead">
          Penyedia energi listrik terkemuka yang ramah lingkungan dan berkelanjutan di Kalimantan Timur.
        </p>
        <Button href="#about" variant="light" size="lg" className="rounded-pill px-4 py-2">Pelajari Lebih Lanjut</Button> {/* Tambah rounded-pill */}
      </Container>
    </section>
  );
}

export default Home;
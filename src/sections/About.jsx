import { Container, Row, Col } from 'react-bootstrap';
import imgPerusahaan from '../assets/gambar-perusahaan.jpg';
// 1. Impor komponen animasi
import FadeInSection from '../components/FadeInSection';

function About() {
  return (
    <section id="about" className="bg-light">
      {/* 2. Bungkus Container dengan FadeInSection */}
      <FadeInSection>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2>Tentang Kami: PT. Indonesia Energi Dinamika</h2>
              <p className="lead">
                PT. Indonesia Energi Dinamika (INDOEKA) adalah perusahaan penyedia energi listrik terkemuka yang berdedikasi untuk memberikan sumber daya listrik yang ramah lingkungan dan berkelanjutan bagi masyarakat.
              </p>
              <p>
                Berdiri sejak 18 Agustus 2015, kami berkomitmen menjadi perusahaan pembangkit listrik yang handal dan efisien. Kami berupaya terus berinovasi untuk memenuhi kebutuhan listrik di Indonesia, khususnya di Kalimantan Timur.
              </p>
            </Col>
            <Col md={6}>
              <img 
                src={imgPerusahaan} 
                alt="Fasilitas PT. Indonesia Energi Dinamika" 
                className="img-fluid rounded shadow"
              />
            </Col>
          </Row>
        </Container>
      </FadeInSection>
    </section>
  );
}

export default About;
import { Container, Row, Col, Card } from 'react-bootstrap';
import FadeInSection from '../components/FadeInSection';

// 1. Impor semua gambar proyek Anda
import imgPerusahaan from '../assets/gambar-perusahaan.jpg';
import imgProyek1 from '../assets/proyek-infrastruktur.jpg';
import imgProyek2 from '../assets/proyek-infrastruktur1.jpg';

function Galeri() {
  // 2. Masukkan gambar-gambar tersebut ke dalam array data galeri
  const galeriItems = [
    {
      img: imgPerusahaan,
      title: 'Fasilitas Utama',
      text: 'Pemandangan fasilitas pembangkit kami di Kalimantan Timur.',
    },
    {
      img: imgProyek1, // Menggunakan gambar Anda
      title: 'Proyek Infrastruktur 1',
      text: 'Pembangunan dan pemeliharaan infrastruktur energi.',
    },
    {
      img: imgProyek2, // Menggunakan gambar Anda
      title: 'Proyek Infrastruktur 2',
      text: 'Detail pekerjaan infrastruktur di lapangan.',
    },
  ];

  return (
    <section id="galeri">
      <FadeInSection>
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Galeri Proyek Kami</h2>
              <p className="lead">Melihat lebih dekat fasilitas dan operasi kami.</p>
            </Col>
          </Row>
          
          <Row>
            {galeriItems.map((item, index) => (
              <Col md={4} key={index} className="mb-4">
                <Card className="h-100 shadow-sm">
                  <Card.Img 
                    variant="top" 
                    src={item.img} 
                    alt={item.title} 
                    style={{ height: '250px', objectFit: 'cover' }} // Atur tinggi agar seragam
                  />
                  <Card.Body>
                    <Card.Title as="h5">{item.title}</Card.Title>
                    <Card.Text>{item.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </FadeInSection>
    </section>
  );
}

export default Galeri;
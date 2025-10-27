import { Container, Row, Col, Card } from 'react-bootstrap';
// 1. Impor komponen animasi
import FadeInSection from '../components/FadeInSection';
// 2. Impor ikon
import { Bullseye, CheckCircle } from 'react-bootstrap-icons';

function VisiMisi() {
  return (
    <section id="visimisi">
      {/* 3. Bungkus Container dengan FadeInSection */}
      <FadeInSection>
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Visi & Misi Kami</h2>
              <p className="lead">Landasan kami dalam bekerja.</p>
            </Col>
          </Row>
          <Row>
            <Col md={6} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4 text-center">
                  {/* 4. Tambahkan Ikon Visi */}
                  <Bullseye className="text-primary" size={40} />
                  <Card.Title as="h3" className="text-primary mt-3">VISI</Card.Title>
                  <Card.Text>
                    “Menjadi Perusahaan Pembangkit Listrik yang Handal dan Efisien dengan Tenaga Kerja yang Terampil dan Berkualitas.”
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6} className="mb-3">
              <Card className="h-100 shadow-sm">
                <Card.Body className="p-4">
                  {/* 5. Tambahkan Ikon Misi */}
                  <div className="text-center">
                    <CheckCircle className="text-primary" size={40} />
                    <Card.Title as="h3" className="text-primary mt-3">MISI</Card.Title>
                  </div>
                  <Card.Text as="div">
                    <ul className="list-unstyled">
                      <li>Bekerjasama dengan mitra penyedia Energi Primer yang kredibel dan kompetitif.</li>
                      <li>Menyelaraskan dan meningkatkan pengendalian atas waktu, biaya, kualitas dan kuantitas.</li>
                      <li>Meningkatkan motivasi, kompetensi dan keahlian karyawan.</li>
                      <li>Membangun teknologi informasi untuk mencapai sasaran Perusahaan.</li>
                    </ul>
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </FadeInSection>
    </section>
  );
}

export default VisiMisi;
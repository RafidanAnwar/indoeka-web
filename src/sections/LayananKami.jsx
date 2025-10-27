import { Container, Row, Col, Card } from 'react-bootstrap';
// 1. Impor ikon yang relevan dengan energi
import { LightningChargeFill, Diagram3Fill, TreeFill } from 'react-bootstrap-icons';
// 2. Impor komponen animasi
import FadeInSection from '../components/FadeInSection';

function LayananKami() {
  return (
    // 3. Gunakan ID 'layanan' untuk navigasi dan 'bg-light' untuk selang-seling
    <section id="layanan" className="bg-light">
      <FadeInSection>
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Layanan Kami</h2>
              <p className="lead">Solusi energi handal untuk masa depan yang lebih baik.</p>
            </Col>
          </Row>
          
          <Row>
            {/* Layanan 1: Pembangkit Listrik */}
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body className="p-4">
                  <LightningChargeFill className="text-primary" size={40} />
                  <Card.Title as="h4" className="mt-3">Pembangkit Listrik</Card.Title>
                  <Card.Text>
                    Fokus pada operasi pembangkit listrik yang efisien dan handal untuk memenuhi kebutuhan energi regional.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Layanan 2: Distribusi Energi */}
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body className="p-4">
                  <Diagram3Fill className="text-primary" size={40} />
                  <Card.Title as="h4" className="mt-3">Distribusi & Jaringan</Card.Title>
                  <Card.Text>
                    Menjamin penyaluran energi yang stabil dan aman melalui infrastruktur jaringan yang terkelola dengan baik.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Layanan 3: Energi Berkelanjutan */}
            <Col md={4} className="mb-3">
              <Card className="h-100 shadow-sm text-center">
                <Card.Body className="p-4">
                  <TreeFill className="text-primary" size={40} />
                  <Card.Title as="h4" className="mt-3">Energi Berkelanjutan</Card.Title>
                  <Card.Text>
                    Berkomitmen pada solusi energi yang ramah lingkungan dan berkelanjutan untuk generasi mendatang.
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

export default LayananKami;
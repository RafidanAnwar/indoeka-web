import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import FadeInSection from '../components/FadeInSection';
import { GeoAltFill, TelephoneFill } from 'react-bootstrap-icons';

function Contact() {
  
  // 1. GANTI PLACEHOLDER DI BAWAH INI
  const locations = [
    {
      name: "PT. Indonesia Energi Dinamika (INDOEKA)",
      address: "Desa Tanjung Batu, Kec. Tenggarong Seberang, Kab. Kutai Kartanegara, Kalimantan Timur 75511",
      phone: "(+62) 541 2923833", 
      
      // Ganti dengan URL dari "Embed a map" (src="..." dari iframe)
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255343.18655610978!2d117.0650261635548!3d-0.36516219342756373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df67126549a3cf3%3A0x997250a8c2e7f75a!2sPT.%20Indonesia%20Energi%20Dinamika%20(INDOEKA)!5e0!3m2!1sid!2sid!4v1761544341416!5m2!1sid!2sid", 
      
      // Ganti dengan URL dari "Send a link"
      mapLink: "https://maps.app.goo.gl/zjSRTBu6VwT6aifx7" 
    },
    {
      name: "PT. Kaltim Electrik Power (KEP GROUP)",
      address: "Jl. Walikota Mustajab No.76, Ketabang, Kec. Genteng, Surabaya, Jawa Timur 60272",
      phone: "(031) 5466611",
      
      // Ganti dengan URL dari "Embed a map" (src="..." dari iframe)
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.8222135020055!2d112.74457787438685!3d-7.261064592745736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7f9006e5cfe55%3A0x57c49ec37486cacd!2sPT.%20Kaltim%20Electrik%20Power!5e0!3m2!1sid!2sid!4v1761544804434!5m2!1sid!2sid", 
      
      // Ganti dengan URL dari "Send a link"
      mapLink: "https://maps.app.goo.gl/vdQj6a119JJdUx3PA" 
    }
  ];

  return (
    <section id="contact" className="p-0">
      
      {/* Bagian 1: Hero Gelap */}
      <div className="bg-dark text-white text-center py-5">
        <FadeInSection>
          <Container>
            <h2 className="display-5 fw-bold">Get in touch with us for more information</h2>
            <p className="lead">Menghidupkan Komunikasi, Menguatkan Energi</p>
          </Container>
        </FadeInSection>
      </div>

      {/* Bagian 2: Kartu Lokasi & Peta */}
      <div className="py-5">
        <FadeInSection>
          <Container>
            <Row>
              {locations.map((loc, index) => (
                <Col md={6} key={index} className="mb-4">
                  <Card className="shadow-sm h-100">
                    <div className="map-responsive">
                      {/* 2. Di sini URL mapUrl Anda akan digunakan */}
                      <iframe
                        src={loc.mapUrl} 
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                      ></iframe>
                    </div>
                    <Card.Body className="p-4">
                      <Card.Title as="h4">{loc.name}</Card.Title>
                      <div className="d-flex align-items-start mb-2">
                        <GeoAltFill className="text-primary flex-shrink-0 mt-1" size={20} style={{ marginRight: '15px' }} />
                        <p className="mb-0">{loc.address}</p>
                      </div>
                      <div className="d-flex align-items-start">
                        <TelephoneFill className="text-primary flex-shrink-0 mt-1" size={20} style={{ marginRight: '15px' }} />
                        <p className="mb-0">{loc.phone}</p>
                      </div>
                    </Card.Body>
                    <Card.Footer className="bg-white border-0 p-4 pt-0">
                      {/* 3. Di sini URL mapLink Anda akan digunakan */}
                      <Button 
                        variant="primary" 
                        href={loc.mapLink}
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View Location
                      </Button>
                    </Card.Footer>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </FadeInSection>
      </div>

      {/* Bagian 3: Formulir Kontak */}
      <div className="py-5 bg-light">
        <FadeInSection>
          <Container>
            <Row>
              <Col md={{ span: 8, offset: 2 }}>
                <h3 className="text-center mb-4">Kirim Pesan</h3>
                
                {/* 4. JANGAN LUPA GANTI URL FORMSPREE ANDA JUGA! */}
                <Form action={import.meta.env.VITE_FORMSPREE_URL} method="POST">
                  
                  <Form.Group className="mb-3" controlId="formNama">
                    <Form.Label>Nama Lengkap</Form.Label>
                    <Form.Control type="text" name="Nama" placeholder="Nama Anda" required />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" placeholder="email@anda.com" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formSubjek">
                    <Form.Label>Subjek</Form.Label>
                    <Form.Control type="text" name="Subjek" placeholder="Perihal pesan Anda" required />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPesan">
                    <Form.Label>Pesan</Form.Label>
                    <Form.Control as="textarea" name="Pesan" rows={5} placeholder="Tuliskan pesan Anda di sini..." required />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Kirim Pesan
                  </Button>
                </Form>
              </Col>
            </Row>
          </Container>
        </FadeInSection>
      </div>
    </section>
  );
}

export default Contact;
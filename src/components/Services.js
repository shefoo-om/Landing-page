import React from 'react';
import "../all.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// the images
import frontendImage from "../imgs/service/frontend.webp";
import backendImage from "../imgs/service/backend.webp";
import uxuiImage from "../imgs/service/uxui.webp";
import fullstackImage from "../imgs/service/fullstack.webp";
import mobileImage from "../imgs/service/mobile-app.webp";
import flutterImage from "../imgs/service/flutter.webp";
import CSImage from "../imgs/service/CS50.webp";
import AIImage from "../imgs/service/AI.webp";

function Services() {
    const service = [
        { id: 1, name: "Front-End", img: frontendImage },
        { id: 2, name: "Back-End", img: backendImage },
        { id: 3, name: "UI/UX", img: uxuiImage },
        { id: 4, name: "Full-Stack", img: fullstackImage },
        { id: 5, name: "Mobile-App", img: mobileImage },
        { id: 6, name: "Flutter", img: flutterImage },
        { id: 7, name: "CS50", img: CSImage },
        { id: 8, name: "AI", img: AIImage },
    ]
    return (
        <div className="services pt-5 pb-5" id='services'>
            <div className="container text-center">
                <div className="The-title mb-3">
                    <h2> our services</h2>
                </div>
                <div className="row mt-5">
                    {service.map((service) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6  mb-3 d-flex justify-content-center align-items-center " key={service.id}>
                            <Card className="service-cards" style={{ width: '18rem' }} >
                                <Card.Img alt='image of service' className="service-img" variant="top" src={service.img} fetchpriority="high" loading="eager" />
                                <Card.Body>
                                    <Card.Title className=" mt-3 service-title">{service.name}</Card.Title>
                                    <Card.Text className=" pb-3">
                                        Some quick example text to build on the card title and make up the
                                        bulk of the card's content.
                                    </Card.Text>
                                    <Button className="mb-3 fw-bold" variant="primary">More Info</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Services;
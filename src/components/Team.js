import React from 'react'
import { Card } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation, A11y } from 'swiper/modules';


import img1 from '../imgs/team/0__T0FygatigPMHqMg.jpg'
import img2 from '../imgs/team/export-advice.png'
import img3 from '../imgs/team/images.jpeg'
import img4 from '../imgs/team/main-qimg-e91db72441235b5a2cd3ffb5b1c2b241-pjlq.jpeg'
import img5 from '../imgs/team/tes_dta_blog_image_7-4-800x412.jpg'
import img6 from '../imgs/team/web_developer.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';


function Team() {
    const team = [
        { id: 1, name: "John Doe", jobTitle: "Front-End Developer", description: "Experienced web developer with a for front-end development.", img: img1 },
        { id: 2, name: "Jane Smith", jobTitle: "UI/UX Designer", description: "Creative designer specializing in user interface and experience desig.", img: img2 },
        { id: 3, name: "Alex Johnson", jobTitle: "Back-End Developer", description: "Skilled backend  proficient in server-side technologie.", img: img3 },
        { id: 4, name: "Michael Brown", jobTitle: "Mobile-App Developer", description: "Expert marketer with a focus on digital marketing strategies.", img: img4 },
        { id: 5, name: "Emily Lee", jobTitle: "Flutter Developer", description: "Data scientist with expertise in machine learning and.", img: img5 },
        { id: 6, name: "Samer Garcia", jobTitle: "Full-Stack Designer", description: "Talented graphic designer with a keen eye for detail and as.", img: img6 }
    ]
    const teamfont = [
        { id: 1, fontt: faInstagram },
        { id: 2, fontt: faGithub },
        { id: 3, fontt: faLinkedin }
    ]
    return (
        <div className="team pt-5 pb-5" id="team">
            <div className="container">
                <div className="The-title mb-3">
                    <h2> Our Team </h2>
                </div>
                <div className="row mt-5 justify-content-center">
                    <Swiper
                        spaceBetween={30}
                        centeredSlides={true}
                        autoplay={{
                            delay: 5000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        loop={true}
                        navigation={true}
                        modules={[Autoplay, Pagination, Navigation, A11y]}
                        className="mySwiper swiper-cards-box"
                        breakpoints={{
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        }}
                    >
                        {team.map((teamMember) => (
                            <SwiperSlide key={teamMember.id} >
                                <div className="col-lg-12 col-sm-12 p-3 mt-3 mb-3 d-flex justify-content-center align-items-center ">
                                    <Card className="team-cards" style={{ width: '22rem' }}>
                                        <Card.Img className="team-img" variant="top" src={teamMember.img} />
                                        <Card.Body>
                                            <Card.Title className="fw-bold text-center mt-3 mb-3">{teamMember.name}</Card.Title>
                                            <Card.Subtitle className="mb-2 text-muted">{teamMember.jobTitle}</Card.Subtitle>
                                            <Card.Text className="pt-2">{teamMember.description}</Card.Text>
                                        </Card.Body>
                                        <div className="row text-center m-3">
                                            {teamfont.map((font, index) => (
                                                <div className="col-4 social-team fs-4" key={index}>
                                                    <FontAwesomeIcon icon={font.fontt} className="social-team-icon" />
                                                </div>
                                            ))}
                                        </div>
                                    </Card>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                </div>
            </div>
        </div >

    )
}
export default Team;

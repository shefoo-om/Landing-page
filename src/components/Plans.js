import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { faCheck, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

function Plans() {
    const plans = [
        { id: 1, type: "Free", price: "Free", ADs: true, allcourses: false, SupportTeam: false, Instructor: false, offline: false },
        { id: 2, type: "Basic", price: "15$", ADs: true, allcourses: false, SupportTeam: false, Instructor: true, offline: false },
        { id: 3, type: "Advanced", price: "25$", ADs: true, allcourses: true, SupportTeam: false, Instructor: true, offline: false },
        { id: 4, type: "Premium", price: "40$", ADs: true, allcourses: true, SupportTeam: true, Instructor: true, offline: true }
    ]
    return (
        <div className="plans pt-5 pb-5" id="plans">
            <div className="container">
                <div className="The-title mb-3">
                    <h2> Plans </h2>
                </div>
                <div className="row mt-5 text-center justify-content-center">
                    {plans.map((plans) => (
                        <div className="col-md-6 d-flex justify-content-center align-items-center mt-3 mb-3" key={plans.id}>
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.25, ease: "easeOut" }}
                                whileHover={{ scale: 1.1, y: -10 }}
                            >

                                <Card className="plans-cards" style={{ width: '350px' }} >
                                    <Card.Body>
                                        <Card.Title className="main-info-plan">{plans.type}</Card.Title>
                                        <Card.Title className="main-info-plan-price"> {plans.price} / Month </Card.Title>
                                        <div className="info-plan mt-5 ">
                                            <Card.Text className='text-info-plan'>Advertisement-free ads{plans.ADs === false ? <FontAwesomeIcon className="false-feature" icon={faTimes} /> : <FontAwesomeIcon className="true-feature" icon={faCheck} />}</Card.Text>
                                            <Card.Text className='text-info-plan'>Choose Your Instructor{plans.Instructor === false ? <FontAwesomeIcon className="false-feature" icon={faTimes} /> : <FontAwesomeIcon className="true-feature" icon={faCheck} />}</Card.Text>
                                            <Card.Text className='text-info-plan'>ACCess-To-All Courses{plans.allcourses === false ? <FontAwesomeIcon className="false-feature" icon={faTimes} /> : <FontAwesomeIcon className="true-feature" icon={faCheck} />}</Card.Text>
                                            <Card.Text className='text-info-plan'>Daily Support Teaming{plans.SupportTeam === false ? <FontAwesomeIcon className="false-feature" icon={faTimes} /> : <FontAwesomeIcon className="true-feature" icon={faCheck} />}</Card.Text>
                                            <Card.Text className='text-info-plan'>Offline Course Viewing{plans.offline === false ? <FontAwesomeIcon className="false-feature" icon={faTimes} /> : <FontAwesomeIcon className="true-feature" icon={faCheck} />}</Card.Text>
                                        </div>

                                        <Button variant="primary" className="mb-3 fw-bold mt-3">Subscribe</Button>
                                    </Card.Body>
                                </Card>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Plans
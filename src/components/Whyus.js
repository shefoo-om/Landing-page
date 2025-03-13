import React from 'react'
import { Card } from 'react-bootstrap';
import { motion } from 'framer-motion';

import img1 from "../imgs/whus/360_F_608825085_MuQopoWCJQJ8BUa4u2z1DECXtkuoVLmj.webp"
import img2 from "../imgs/whus/depositphotos_52756155-stock-photo-experience.webp"
import img3 from "../imgs/whus/istockphoto-1366428092-612x612.webp"
import img4 from "../imgs/whus/store-of-value.webp"
function Whyus() {
    const whyus = [
        { id: 1, title: "Quality", img: img1 },
        { id: 2, title: "Experience", img: img2 },
        { id: 3, title: "Training", img: img3 },
        { id: 4, title: "Value ", img: img4 }
    ]
    return (
        <div className="whyus pt-5 pb-5" id='whyus'>
            <div className="container text-center">
                <div className="The-title mb-3">
                    <h2> Why Us</h2>
                </div>
                <div className="row mt-5">
                    {whyus.map((whyus) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 mt-5 mb-5  d-flex justify-content-center align-items-center" key={whyus.id}>
                            <motion.div
                                style={{ width: '22rem' }}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 1.25, ease: "easeOut" }}
                                whileHover={{ scale: 1.1, y: -10 }}
                            >
                                <Card className="whyus-cards"  >
                                    <div className="box-img">
                                        <Card.Img className="whyus-img" variant="top" src={whyus.img} alt={whyus.title} fetchpriority="high" loading="eager" />
                                    </div>
                                    <Card.Body>
                                        <Card.Title className=" p-3 name-whyus fs-3">{whyus.title}</Card.Title>
                                        <Card.Text className=" pb-3 whyus-info text-start ">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis, mauris vel volutpat vestibulum, velit ipsum ullamcorper libero, ac aliquam tortor purus ac lorem.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sagittis, mauris vel volutpat vestibulum, velit ipsum ullamcorper libero, ac aliquam tortor purus ac lorem.
                                        </Card.Text>
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

export default Whyus;
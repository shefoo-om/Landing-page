import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Card } from 'react-bootstrap'
import { faEarthAmericas, faChalkboardUser, faServer, faPerson } from '@fortawesome/free-solid-svg-icons';
function Stats() {
    const stats = [
        { id: 1, number: "+30", title: "Instructor", font: faChalkboardUser },
        { id: 2, number: "+800", title: "Student", font: faPerson },
        { id: 3, number: "+400", title: "Videos", font: faServer },
        { id: 4, number: "+6", title: "Countries", font: faEarthAmericas }
    ]
    return (
        <div className="stats pt-5 pb-5" id='stats'>
            <div className="container text-center">
                <div className="The-title mb-3">
                    <h2> our Awesome Stats</h2>
                </div>
                <div className="row mt-5">
                    {stats.map((stats) => (
                        <div className="col-xl-3 col-lg-4 col-sm-6 mt-5 mb-5 d-flex justify-content-center align-items-center" key={stats.id}>
                            <Card className="stats-cards" style={{ width: '18rem' }} >
                                <Card.Body>
                                    <Card.Title className=" pt-3 ">
                                        {<FontAwesomeIcon icon={stats.font} className="icon-stats" />}
                                    </Card.Title>
                                    <Card.Title className=" p-3 number-stats">{stats.number}</Card.Title>
                                    <Card.Title className=" pb-3 title-stats">{stats.title}</Card.Title>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Stats
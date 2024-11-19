import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import config from './config.json';
import './Recommendations.css';

function CardPage() {
    let cardArr = config;

    return (        <div className='recommendations-section'>
            
            <h2 className='recommendations-header'><strong>RECOMMENDATIONS</strong></h2>

            <div className='row' style={{ marginTop: '3%', marginLeft: '2%' }}>
                {cardArr.map((eachCard, index) => (
                    <div className='col-12 col-sm-6 col-md-4 col-lg-3' style={{ marginBottom: '4%' }} key={index}> 
                        <Card style={{ width: '100%', height: 'auto' }}> 
                            <a href={eachCard.link} target="_blank" rel="noopener noreferrer">
                                <Card.Img 
                                    className="card-img-top" 
                                    variant="top" 
                                    src={eachCard.img} 
                                />
                            </a>
                            <Card.Body>
                                <Card.Title>{eachCard.title}</Card.Title>
                                <Card.Text style={{ height: 'auto' }}> 
                                    {eachCard.text}
                                </Card.Text>
                                <Button variant="primary" className="card-button mb-6" href={eachCard.link} target="_blank" rel="noopener noreferrer">Info</Button>

                            </Card.Body>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CardPage;



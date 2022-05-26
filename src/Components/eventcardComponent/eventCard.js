import React from 'react'
import { Link } from 'react-router-dom'
// import image2 from '../../assets/events/event2.jpg';
import './eventCard.css'

export default function EventCard(props) {
    const { image, title, date, sponsor,id } = props

    return (
        <div class='item eventCard'>
            <Link to={`/events/events-description/${id}`}>
                <div className='row'>

                    <div className='col-lg-5 col-md-5 col-sm-5 col-6'>
                        <div className='Carousel-img'>
                            <img
                                className="d-block w-100"
                                src={image}
                                alt="First slide"
                            />
                        </div>
                    </div>
                    <div className='col-lg-7 col-md-7 col-sm-7 col-6'>
                        <div className='Carousel-detail'>
                            <div className='title'>
                                <h5 style={{color:"orangered"}}>{title}</h5>
                            </div>
                            <div className='footer'>
                                <span><i className='fas fa-globe px-2' />{sponsor}</span>
                                <span><i className='fas fa-calendar-week px-2' />{date}</span>
                            </div>


                        </div>
                    </div>
                </div>

            </Link>
        </div>

    )
}

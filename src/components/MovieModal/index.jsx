import React from 'react'
import { imageBasePath } from '../constant'
import './MovieModal.css'
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles


// import required modules
import { Pagination } from 'swiper/modules';

const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name,
    release_date,
    first_air_date,
    vote_average,
    setModalOpen
}) => {
    return (
        <div className='presentation' role='presentation'>

            <div className='wrapper-modal'>

                <div className='modal'>

                    <Swiper
                        direction={'vertical'}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[Pagination]}
                        className="mySwiper"
                    >

                        <span
                            onClick={() => setModalOpen(false)}
                            className='modal-close'
                        >
                            X
                        </span>
                        <SwiperSlide>
                            <img
                                className='modal_poster-img'
                                src={`${imageBasePath}${backdrop_path}`}
                                alt='modal_poster-img'
                            />
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className='modal_content'>

                                <p className='modal_details'>

                                    <span>
                                        100% for you
                                    </span>{" "}
                                    {release_date ? release_date : first_air_date}

                                </p>
                                <h2 className='modal_title'>
                                    {title ? title : name}
                                </h2>
                                <p className='modal_overview'>평점: {vote_average}</p>
                                <p className='modal_overview'>{overview}</p>

                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>

            </div>

        </div>
    )
}

export default MovieModal
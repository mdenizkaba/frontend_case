'use client';

import { useEffect,useState,useRef,memo } from "react";
import Container from "../components/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
import clsx from "clsx";
register();

const breakpoints= {
	320: {
		slidesPerView: 1.3,
	},
	640: {
		slidesPerView: 1.5,
	},
	768: {
		slidesPerView: 2.5,
	},
	1024: {
		slidesPerView: 3.8,
	},
}

const Card = ({logo,text,image,name,tag}) => {
	return(
		<div className="bg-white shadow-lg w-full rounded-3xl sm:p-8 p-5 mb-5 flex flex-col gap-4">
			<img src={logo} alt="loveus" className="w-[133px] h-8 sm:my-4 my-2 object-contain"/>
			<span className="sm:text-2xl text-base	font-normal leading-relaxed sm:h-[195px] sm:max-h-auto max-h-[100px] overflow-hidden" >{text}</span>
			<div className="flex items-center gap-4 mt-4">

				<div className="sm:w-16 sm:h-16 w-10 h-10 bg-black rounded-full overflow-hidden  ">
					<img src={image} alt="loveus" className="w-full h-full object-cover"/>
				</div>
				<div className="flex flex-col flex-start text-left">
					<span className="sm:text-lg text-base font-normal text-black">{name}</span>
					<span className="sm:text-base text-sm font-normal text-slate-600">{tag}</span>
				</div>
			</div>
		</div>
	)
}

const LoveUs = ({data}) => {
	const swiperRef = useRef(null);

  const onNext = ()=>{
		swiperRef.current.swiper.slideNext();
	}
	const onPrev= ()=>{
		swiperRef.current.swiper.slidePrev();
	}
	
	return(
		<div className="sm:py-20 pt-20 pb-0">
			<Container>
				<div className="flex items-center justify-between ">
					<div className="sm:text-[56px] text-[32px] sm:text-left text-center w-full font-extrabold pb-1 ">{data.title}</div>
					<div className="sm:flex hidden gap-6 ">
						<div className="h-12 w-12 border-2 rounded-full border-amber-900 flex justify-center items-center" onClick={onPrev}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18Z" fill="#78350F"/>
								<path d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
						<div className="h-12 w-12 border-2 rounded-full border-amber-900 flex justify-center items-center" onClick={onNext}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18Z" fill="#78350F"/>
								<path d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z" stroke="#78350F" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
							</svg>
						</div>
					</div>
				</div>
			</Container>

			<div className="relative w-full sm:h-[420px] h-[350px] mt-10" >

			<div className="container mx-auto absolute top-0 left-0 right-0  h-full">
				<div className="absolute top-0 -left-4 -right-4 bottom-10 bg-amber-200 sm:h-[420px] h-[350px]"/>
			</div>
				
				<div className="sm:pt-10 pt-5 love-swiper">
					<Swiper
						ref={swiperRef}
						centeredSlides={true}
						spaceBetween={24}
						loop={true}
						breakpoints={breakpoints}
					>
						{
							[...data.data,...data.data].map((item, index) => (
								<SwiperSlide key={index} >
										<Card logo={item.logo} text={item.text} image={item.image} name={item.name} tag={item.tag}/>
								</SwiperSlide>
							))
						}
				
					</Swiper>
				</div>
			</div>
		</div>
	)
}

export default memo(LoveUs);
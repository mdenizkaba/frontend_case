'use client';

import { use, useEffect,useState,useRef,memo } from "react";
import Container from "../components/Container";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { register } from 'swiper/element/bundle';
register();

const getContainer = () => {
	let width = 0;
	if (window.innerWidth <= 640) width = 320;
	else if (window.innerWidth <= 768) width = 640;
	else if (window.innerWidth <= 1024) width = 768;
	else if (window.innerWidth <= 1280) width = 1024;
	else if (window.innerWidth <= 1536) width = 1280;
	else width = 1536;
	return (window.innerWidth-width)/4;
};

const breakpoints= {
	640: {
		slidesPerView: 1,
	},
	768: {
		slidesPerView: 1,
	},
	1024: {
		slidesPerView: 3.8,
	},
}

const Card = ({logo,text,image,name,tag}) => {
	return(
		<div className="bg-white shadow-lg w-full rounded-3xl p-8 mb-5 flex flex-col gap-4">
			<img src={logo} alt="loveus" className="w-[133px] h-8 my-4 object-contain"/>
			<span className="text-2xl	font-normal leading-relaxed h-[195px] overflow-hidden" >{text}</span>
			<div className="flex items-center gap-4 mt-4">

				<div className="w-16 h-16 bg-black rounded-full overflow-hidden  ">
					<img src={image} alt="loveus" className="w-full h-full object-cover"/>
				</div>
				<div className="flex flex-col flex-start text-left">
					<span className="text-lg font-normal text-black">{name}</span>
					<span className="text-base font-normal text-slate-600">{tag}</span>
				</div>
			</div>
		</div>
	)
}

const LoveUs = ({data}) => {
	const swiperRef = useRef(null);
	const [size, setSize] = useState(getContainer());

  useEffect(() => {
    window.addEventListener('resize', () => {
      setSize(getContainer());
		});
  }, []);

  const onNext = ()=>{
		swiperRef.current.swiper.slideNext();
	}
	const onPrev= ()=>{
		swiperRef.current.swiper.slidePrev();
	}
	
	return(
		<div className="py-20">
			<Container>
				<div className="flex items-center justify-between ">
					<div className="text-slate-900 text-[56px] font-extrabold">{data.title}</div>
					<div className="flex gap-6">
						<div className="h-12 w-12 border-2 rounded-full border-amber-900 flex justify-center items-center" onClick={onPrev}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M18.5 12H6H18.5ZM6 12L12 6L6 12ZM6 12L12 18Z" fill="#78350F"/>
								<path d="M6 12L12 18M18.5 12H6H18.5ZM6 12L12 6L6 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
						<div className="h-12 w-12 border-2 rounded-full border-amber-900 flex justify-center items-center" onClick={onNext}>
							<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12ZM18.5 12L12.5 18Z" fill="#78350F"/>
								<path d="M18.5 12L12.5 18M6 12H18.5H6ZM18.5 12L12.5 6L18.5 12Z" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</svg>
						</div>
					</div>
				</div>
			</Container>

			<div className="relative w-full h-[420px] mt-10" >
				<div className="absolute top-0 bottom-0 bg-amber-200 " style={{left: size,right:size}} />
				<div className="pt-10 love-swiper">
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
import Container from "../components/Container";

const HeroTop = ({title,description,image}) => {
	return (  
		<Container>
			<div className="sm:h-[583px] h-auto ">
				<div className="flex sm:flex-row flex-col gap-[48px] items-center sm:py-20 pt-8 pb-0">
					<div className="flex lg:flex-1 flex-col lg:gap-8 md:gap-4 sm:gap-4  gap-2text-slate-900">
						<h1 className="xl:text-7xl lg:text-6xl md:text-4xl sm:text-3xl text-[56px] sm:text-left text-center font-bold sm:leading-normal leading-[60px]" >{title}</h1>
						<div className="lg:text-lg lg:text-md  font-normal xl:max-w-[714px] lg:w-[600px] md:w-[400px] sm:text-left text-center sm:p-0 p-2">{description}</div>
						<div className="flex items-center sm:justify-start justify-center ">
							<button className="text-amber-900 text-xl font-medium sm:py-4 sm:px-8 px-5 py-2 rounded-lg border-2 border-amber-900">Sign up now</button>
							<button className="flex flex-row justify-center items-center text-amber-900 sm:py-4 py-2 sm:px-6 px-3">
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22ZM12 20C14.1217 20 16.1566 19.1571 17.6569 17.6569C19.1571 16.1566 20 14.1217 20 12C20 9.87827 19.1571 7.84344 17.6569 6.34315C16.1566 4.84285 14.1217 4 12 4C9.87827 4 7.84344 4.84285 6.34315 6.34315C4.84285 7.84344 4 9.87827 4 12C4 14.1217 4.84285 16.1566 6.34315 17.6569C7.84344 19.1571 9.87827 20 12 20ZM16.126 13.746L12.071 16.644C11.166 17.29 9.941 17.033 9.334 16.068C9.11494 15.7171 8.99918 15.3116 9 14.898V9.102C9 7.942 9.883 7 10.972 7C11.363 7 11.746 7.124 12.071 7.356L16.126 10.254C17.031 10.901 17.272 12.206 16.666 13.171C16.5251 13.3959 16.3417 13.5913 16.126 13.746ZM10.972 9.102V14.898L15.027 12L10.972 9.102Z" fill="#78350F"/>
								</svg>
								<span className="text-base font-medium ml-2" >Watch Demo</span>
								</button>
						</div>
					</div>
					<div className=" sm:h-[423px] h-[300px] xl:w-[486px] lg:w-96 md:w-[345px] w-80  flex  justify-center items-center relative">
						<img className="absolute xl:h-[390px] lg:h-96 w-full object-contain animate-hero" src={image} alt="Logo" />
						<div className="xl:w-[370px] lg:w-80 md:w-64 xl:h-[370px] lg:h-80 md:h-64	w-[272px] h-[272px] bg-amber-400 rounded-[50px]"/>
					</div>
				</div>

			</div>
		</Container>
	);
}

const HeroCard = ({icon,title,description}) => {
	return(
		<div className="basis-1/3 flex flex-col gap-3 md:justify-left md:items-start items-center md:text-left text-center">
			<div className="md:ml-0 ml-12">{icon}</div>
			{title&&<div className="text-xl font-medium text-slate-900">{title}</div>}
			{description&&<div className="text-lg font-normal text-slate-900">{description}</div>}
		</div>
	)
}

const HeroBottom = ({data}) => {
	return (  
		<div className="relative md:bg-transparent bg-amber-100">
			<Container>
				<div class="flex md:flex-row flex-col xl:gap-20 lg:gap-16 gap-8 py-20 sm:px-0 px-6 ">
					{
						data.map((card, index) => (
							<HeroCard key={index} icon={card.icon} title={card.title} description={card.description}/>
						))
					}
					
				</div>
			</Container>
			<svg className="absolute md:bottom-0 bottom-auto md:top-auto top-0 -z-10 sm:translate-y-0 -translate-y-full" viewBox="0 0 1428 806" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M1428 265.472V0L0 806H1428V265.472Z" fill="#FEF3C7"/>
			</svg>
		</div>
	);
}

const Hero = ({data}) => {
	return (  
		<section className="relative w-full overflow-x-hidden">
			<HeroTop title={data.title} description={data.description} image={data.image}/>
			<HeroBottom data={data.cols}/>
			
			
		</section>
	);
}

export default Hero;
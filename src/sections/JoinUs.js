import Container  from "../components/Container";

const Window = ({image}) => {
	return(
		<div className="bg-white rounded-2xl overflow-hidden shadow-[0_5px_60px_-15px_rgba(0,0,0,0.5)] relative z-10">
			<div className="px-4 py-3">
				<svg width="488" height="11" viewBox="0 0 488 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 9.69369C2.69875 9.69369 0.833328 7.82827 0.833328 5.52702C0.833328 3.22577 2.69875 1.36035 5 1.36035C7.30125 1.36035 9.16666 3.22577 9.16666 5.52702C9.16666 7.82827 7.30125 9.69369 5 9.69369Z" fill="#E11D48"/>
					<path d="M20 9.69369C17.6987 9.69369 15.8333 7.82827 15.8333 5.52702C15.8333 3.22577 17.6987 1.36035 20 1.36035C22.3012 1.36035 24.1667 3.22577 24.1667 5.52702C24.1667 7.82827 22.3012 9.69369 20 9.69369Z" fill="#FBBF24"/>
					<path d="M35 9.69369C32.6987 9.69369 30.8333 7.82827 30.8333 5.52702C30.8333 3.22577 32.6987 1.36035 35 1.36035C37.3012 1.36035 39.1667 3.22577 39.1667 5.52702C39.1667 7.82827 37.3012 9.69369 35 9.69369Z" fill="#22C55E"/>
				</svg>
			</div>
			<div className="sm:h-[309px] h-[200px] overflow-hidden border-4 border-t-0 border-white rounded-bl-2xl rounded-br-2xl relative">
				<img className="w-full h-full object-cover " src={image} alt="hero"/>
				<svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="144" height="145" viewBox="0 0 144 145" fill="none" xmlns="http://www.w3.org/2000/svg">
					<rect y="0.5" width="144" height="144" rx="72" fill="#121619" fillOpacity="0.75"/>
					<path d="M99.28 74.592C99.5608 74.1512 99.7502 73.6585 99.837 73.1432C99.9238 72.6278 99.9062 72.1003 99.7854 71.5918C99.6645 71.0834 99.4428 70.6044 99.1334 70.1832C98.8239 69.7621 98.4331 69.4073 97.984 69.14L58.296 45.012C57.6506 44.6213 56.9104 44.4152 56.156 44.416C53.916 44.416 52.104 46.188 52.104 48.376V96.62C52.104 97.36 52.316 98.084 52.716 98.712C53.9 100.568 56.396 101.136 58.296 99.98L97.984 75.856C98.508 75.536 98.956 75.1 99.284 74.588L99.28 74.592ZM102.264 82.58L62.58 106.704C56.88 110.172 49.38 108.464 45.836 102.9C44.6378 101.025 44.0008 98.8456 44 96.62V48.38C44 41.816 49.44 36.5 56.16 36.5C58.428 36.5 60.652 37.12 62.58 38.292L102.264 62.42C107.964 65.884 109.712 73.204 106.164 78.772C105.18 80.316 103.844 81.62 102.264 82.58V82.58Z" fill="white"/>
				</svg>
			</div>
		</div>
	)
}

const Shapes = () => {
	return(
		<div className="absolute -top-20 -bottom-20 -left-20 -right-20 -z-0">
			<svg className="absolute sm:-top-10 -top-20 sm:left-4 -left-10 sm:scale-[1] scale-[.7]" width="626" height="627" viewBox="0 0 626 627" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect y="471.948" width="666.284" height="217.934" transform="rotate(-45 0 471.948)" fill="#FDE68A"/>
			</svg>

			<svg className="absolute top-32 left-16 animate-hero animation-delay-1000" width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.75" width="90" height="90" rx="30" fill="#B45309"/>
			</svg>

			<svg className="absolute sm:-top-3 top-0 right-28 animate-horizontal animation-delay-1000" width="59" height="60" viewBox="0 0 59 60" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.75" width="59" height="60" rx="29.5" fill="#0369A1"/>
			</svg>

			<svg className="absolute bottom-3 right-36 animate-horizontal" width="74" height="74" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.75" width="74" height="74" rx="30" fill="#A21CAF"/>
			</svg>

			<svg className="absolute -bottom-10 -right-10" width="218" height="218" viewBox="0 0 218 218" fill="none" xmlns="http://www.w3.org/2000/svg">
				<rect opacity="0.75" width="218" height="218" rx="50" fill="#BE185D"/>
			</svg>
		</div>
	)
}

const JoinUs = ({data}) => {
	return (
		<div className="pb-40 sm:pt-40 pt-4 ">
			<Container>
				<div className="grid sm:grid-cols-2 grid-cols-1 sm:grid-rows-1 grid-row-2 sm:p-20 p-4 gap-20 bg-white rounded-3xl shadow-2xl flex items-center">
					<div className="flex flex-col gap-6">
						<div className="sm:text-[56px] text-[32px] sm:text-left text-center font-extrabold pb-1 pt-2 sm:pt-0">{data.title}</div>
						<div className="flex flex-col gap-1">
							{
								data.list.map((item,index)=>(
									<div className="flex items-center gap-2" key={index}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.486 16.7299C10.3547 16.7302 10.2247 16.7045 10.1034 16.6544C9.98204 16.6043 9.87181 16.5307 9.77899 16.4379L5.53699 12.1949C5.44141 12.1027 5.36516 11.9924 5.31266 11.8705C5.26017 11.7485 5.23249 11.6173 5.23125 11.4845C5.23 11.3517 5.25521 11.22 5.3054 11.0971C5.3556 10.9742 5.42977 10.8625 5.52359 10.7685C5.61742 10.6746 5.72902 10.6002 5.85188 10.5499C5.97474 10.4995 6.1064 10.4741 6.23918 10.4752C6.37196 10.4762 6.50319 10.5037 6.62523 10.556C6.74727 10.6083 6.85767 10.6845 6.94999 10.7799L10.485 14.3149L16.85 7.95189C17.0375 7.76425 17.2919 7.65879 17.5571 7.65869C17.8224 7.6586 18.0768 7.76389 18.2645 7.95139C18.4521 8.1389 18.5576 8.39327 18.5577 8.65854C18.5578 8.92381 18.4525 9.17825 18.265 9.36589L11.193 16.4379C11.1002 16.5307 10.9899 16.6043 10.8686 16.6544C10.7473 16.7045 10.6173 16.7302 10.486 16.7299Z" fill="#15803D"/>
										</svg>
										<span className="font-normal text-xl">{item}</span>
									</div>
								))
							}
						</div>
						<div className="sm:block flex justify-center sm:justify-start">
							<button className="text-amber-900 text-xl font-medium py-4 px-8 rounded-lg border-2  border-amber-900">Sign up now</button>
						</div>
					</div>
					<div className="relative">
					<svg className="absolute -bottom-16 left-16 z-20 animate-hero" width="85" height="86" viewBox="0 0 85 86" fill="none" xmlns="http://www.w3.org/2000/svg">
						<rect opacity="0.75" width="85" height="86" rx="42.5" fill="#15803D"/>
					</svg>

						<Window image={data.image}/>
						<Shapes/>
					</div>
				</div>
			</Container>
		</div>
	)
}

export default JoinUs;
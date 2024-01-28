import Container from "../components/Container";

const Card = ({item}) => {
	return(
		<div className="rounded-lg overflow-hidden shadow-2xl-white bg-slate-900">
			<div className="h-[220px] overflow-hidden mx-[-2px]" >
				<img src={item.image} alt={item.title} className="w-full h-full "/>
			</div>
			<div className="p-8">
				<div className="text-white text-2xl font-bold ">{item.title}</div>
				<div className="text-white text-lg pt-4">{item.description}</div>
				<button className="flex flex-row justify-center items-center w-full text-white py-4 px-6 mt-8 border-2 border-white rounded-lg">
					<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M10.3333 20C9.80287 20 9.29417 19.7893 8.91909 19.4142C8.54402 19.0391 8.33331 18.5304 8.33331 18C8.33331 17.4696 8.54402 16.9609 8.91909 16.5858C9.29417 16.2107 9.80287 16 10.3333 16C10.8637 16 11.3724 16.2107 11.7475 16.5858C12.1226 16.9609 12.3333 17.4696 12.3333 18C12.3333 18.5304 12.1226 19.0391 11.7475 19.4142C11.3724 19.7893 10.8637 20 10.3333 20ZM17.3333 20C16.8029 20 16.2942 19.7893 15.9191 19.4142C15.544 19.0391 15.3333 18.5304 15.3333 18C15.3333 17.4696 15.544 16.9609 15.9191 16.5858C16.2942 16.2107 16.8029 16 17.3333 16C17.8637 16 18.3724 16.2107 18.7475 16.5858C19.1226 16.9609 19.3333 17.4696 19.3333 18C19.3333 18.5304 19.1226 19.0391 18.7475 19.4142C18.3724 19.7893 17.8637 20 17.3333 20ZM4.29531 5.923C4.04567 5.91495 3.80895 5.81012 3.6352 5.63068C3.46146 5.45125 3.36432 5.21127 3.36432 4.9615C3.36432 4.71173 3.46146 4.47175 3.6352 4.29232C3.80895 4.11288 4.04567 4.00805 4.29531 4H5.44631C6.34831 4 7.12831 4.626 7.32431 5.506L8.57731 11.148C8.77331 12.028 9.55331 12.654 10.4553 12.654H17.9673L19.4093 6.884H10.0643C9.81702 6.87272 9.5836 6.76654 9.41259 6.58755C9.24159 6.40857 9.14616 6.17055 9.14616 5.923C9.14616 5.67545 9.24159 5.43743 9.41259 5.25845C9.5836 5.07946 9.81702 4.97328 10.0643 4.962H19.4093C19.7016 4.96191 19.9901 5.02848 20.2529 5.15663C20.5156 5.28479 20.7457 5.47116 20.9256 5.70158C21.1055 5.93201 21.2305 6.20041 21.2911 6.4864C21.3517 6.77238 21.3463 7.06842 21.2753 7.352L19.8333 13.12C19.7294 13.5362 19.4892 13.9057 19.1511 14.1697C18.813 14.4337 18.3963 14.5771 17.9673 14.577H10.4553C9.5801 14.5771 8.73103 14.2787 8.04832 13.7311C7.36561 13.1835 6.89009 12.4194 6.70031 11.565L5.44631 5.923H4.29531Z" fill="white"/>
					</svg>
					<span className="text-xl font-medium mx-4" >Buy Now</span>
				</button>
			</div>
		</div>
	)
}

const AnimatedArea = ({children}) => {
	return(
		<div className="absolute -top-8 -left-8 -right-8 -bottom-8 -z-0 ">
			<div className="w-[271px] h-[271px] bg-pink-700 absolute bottom-16 rounded-[50px] animate-hero animation-delay-300" />
			<div className="w-[161px] h-[161px] bg-sky-700 absolute top-0 left-1/3 rounded-[50px] animate-horizontal " />
			<div className="w-[130px] h-[130px] bg-amber-700 absolute bottom-20 right-1/3 mr-4 rounded-[30px] animate-hero animation-delay-1000" />
			<div className="w-[202px] h-[202px] bg-fuchsia-700 absolute bottom-0 right-20 mr-4 rounded-[30px] animate-horizontal" />
			<div className="w-[232px] h-[232px] bg-green-700 absolute top-16 right-0 rounded-[50px] animate-hero animation-delay-2000" />
		</div>
	)
}

const BestOfBest = ({data}) => {
	return(
		<div className="bg-slate-900 py-20">
			<Container>
				<div className="flex items-center justify-between pb-20">
					<div className="text-white text-[56px] font-extrabold">{data.title}</div>
					<button className="text-white text-2xl font-bold px-11 py-5 rounded-md border-2 border-white">Sign up now</button>
				</div>
			</Container>
			<Container>
				<div className="grid grid-cols-3 gap-12 z-10 relative">
					{data.items.map((item, index) => (
						<Card item={item} key={index}/>
					))}
				</div>

				<AnimatedArea/>
			</Container>
		</div>
	)
}

export default BestOfBest;
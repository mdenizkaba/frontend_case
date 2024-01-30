import Container from "../components/Container";

function Header({links}) {
	return ( 
		<header className="py-6">
			<Container>
				<div className="flex justify-between items-center">
					<div className="text-[32px] text-amber-900 font-bold">Collers</div>
					<div className="md:flex hidden items-center gap-8 ">
						{
							links.map((link, index) => (
								<a key={index} className=" text-base font-medium text-amber-900 tracking-[0.5px]" href={link.url}>{link.name}</a>
							))
						}
						<button className="text-amber-900 text-base font-medium px-6 py-2 rounded-md border-2 border-amber-900">Sign up now</button>
					</div>
					<div className="flex md:hidden">
						<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M21 5.5H13" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 12.5H8" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						<path d="M21 19.5H3" stroke="#78350F" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
						</svg>

					</div>
				</div>

			</Container>
		</header> 
		);
}

export default Header;
import Container from "../components/Container";

function Header({links}) {
	return ( 
		<header className="py-6">
			<Container>
				<div className="flex justify-between items-center">
					<div className="text-[32px] text-amber-900 font-bold">Collers</div>
					<div className="flex items-center gap-8">
						{
							links.map((link, index) => (
								<a key={index} className=" text-base font-medium text-amber-900 tracking-[0.5px]" href={link.url}>{link.name}</a>
							))
						}
						<button className="text-amber-900 text-base font-medium px-6 py-2 rounded-md border-2 border-amber-900">Sign up now</button>
					</div>
				</div>
			</Container>
		</header> 
		);
}

export default Header;
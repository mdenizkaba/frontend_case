'use client';
import Container from "../components/Container";
import { Tab } from '@headlessui/react'
import clsx from "clsx";
import { Fragment } from 'react'

const Window = ({image,style}) => {
	return(
		<div className={clsx("bg-white rounded-2xl overflow-hidden shadow-[0_5px_60px_-15px_rgba(0,0,0,0.2)] z-10 col-span-10 transition",style)}>
			<div className="px-4 py-3">
				<svg width="488" height="11" viewBox="0 0 488 11" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M5 9.69369C2.69875 9.69369 0.833328 7.82827 0.833328 5.52702C0.833328 3.22577 2.69875 1.36035 5 1.36035C7.30125 1.36035 9.16666 3.22577 9.16666 5.52702C9.16666 7.82827 7.30125 9.69369 5 9.69369Z" fill="#E11D48"/>
					<path d="M20 9.69369C17.6987 9.69369 15.8333 7.82827 15.8333 5.52702C15.8333 3.22577 17.6987 1.36035 20 1.36035C22.3012 1.36035 24.1667 3.22577 24.1667 5.52702C24.1667 7.82827 22.3012 9.69369 20 9.69369Z" fill="#FBBF24"/>
					<path d="M35 9.69369C32.6987 9.69369 30.8333 7.82827 30.8333 5.52702C30.8333 3.22577 32.6987 1.36035 35 1.36035C37.3012 1.36035 39.1667 3.22577 39.1667 5.52702C39.1667 7.82827 37.3012 9.69369 35 9.69369Z" fill="#22C55E"/>
				</svg>
			</div>
			<div className="h-[410px] overflow-hidden border-4 border-t-0 border-white rounded-bl-2xl rounded-br-2xl relative">
				<img className="w-full h-full object-cover " src={image} alt="hero"/>
			</div>
		</div>
	)
}

const Collecton = ({data}) => {
  return (
    <section className="pt-20 pb-40">
      <Container>
          <div className="text-slate-900 text-[56px] font-extrabold">{data.title}</div>
          <div className="text-slate-600 text-lg font-normal mt-9 tracking-wide">{data.desc}</div>
        <Tab.Group className={'pt-20'}>
          <div className="flex-1 flex-row grid grid-cols-12 gap-20">
            <Tab.List className={"flex col-span-3 flex-col flex-start gap-4"}>
              {
                data.items.map((item,index) => (
                  <Tab className={"outline-none "} key={index}>
                    {({ selected }) => (
                      <div className={clsx('flex text-xl font-medium w-full p-4 rounded-xl transition', selected && 'shadow-lg bg-white')}>
                        <div className="flex flex-1 items-center gap-4 color-slate-900 tracking-wide">
                            {item.icon}
                            {item.name}
                          </div>
                          {selected && (<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.586 10.6569L11.636 6.70692C11.4538 6.51832 11.353 6.26571 11.3553 6.00352C11.3576 5.74132 11.4628 5.49051 11.6482 5.3051C11.8336 5.11969 12.0844 5.01452 12.3466 5.01224C12.6088 5.00997 12.8614 5.11076 13.05 5.29292L18.707 10.9499C18.8002 11.0426 18.8741 11.1527 18.9246 11.2741C18.9751 11.3954 19.001 11.5255 19.001 11.6569C19.001 11.7883 18.9751 11.9184 18.9246 12.0398C18.8741 12.1611 18.8002 12.2713 18.707 12.3639L13.05 18.0209C12.9578 18.1164 12.8474 18.1926 12.7254 18.245C12.6034 18.2974 12.4722 18.325 12.3394 18.3262C12.2066 18.3273 12.0749 18.302 11.952 18.2517C11.8291 18.2015 11.7175 18.1272 11.6236 18.0333C11.5297 17.9394 11.4555 17.8278 11.4052 17.7049C11.3549 17.582 11.3296 17.4503 11.3307 17.3175C11.3319 17.1847 11.3595 17.0535 11.4119 16.9315C11.4643 16.8095 11.5405 16.6992 11.636 16.6069L15.586 12.6569H6C5.73478 12.6569 5.48043 12.5516 5.29289 12.364C5.10536 12.1765 5 11.9221 5 11.6569C5 11.3917 5.10536 11.1373 5.29289 10.9498C5.48043 10.7623 5.73478 10.6569 6 10.6569H15.586Z" fill="#0F172A"/>
                          </svg>)}
                      </div>
                    )}
                  </Tab>
                ))
              }
            </Tab.List>
            <Tab.Panels className={"col-span-9"} >
            {
                data.items.map((item,index) => (
                  <Tab.Panel key={index}>
                    <div className="grid grid-cols-12 relative">
                      <Window image={item.images[0]}/>
                      <Window image={item.images[1]} style={'!absolute left-28 top-24'}/>
                      <div className={clsx(
                        "h-72 w-64 overflow-hidden border-4 border-white rounded-2xl z-10",
                        "absolute -bottom-8 right-0"
                      )}>
                        <img className="w-full h-full object-cover " src={item.images[2]} alt="hero"/>
                      </div>
                    </div>
                  </Tab.Panel>
                ))
              }
            </Tab.Panels>
            </div>
          </Tab.Group>
      </Container>
     </section>
  );
}

export default Collecton;
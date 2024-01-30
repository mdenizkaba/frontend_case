import { Appstore, Earth, GPlay } from "@/icons/HeroIconList";
import Container from "../components/Container";

const Footer = ({data}) => {
  return (
    <footer className="bg-slate-900">
      <div className="py-12">
        <Container>
          <div className="grid sm:grid-cols-4 sm:grid-rows-1 grid-rows-4 gap-12">
            <div>
              <h4 className="text-white text-base	font-medium	py-3 sm:text-left text-center">{data.product.title}</h4>
              <ul className="text-white text-base font-normal sm:text-left text-center">
                {
                  data.product.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3 sm:text-left text-center">{data.solutions.title}</h4>
              <ul className="text-white text-base font-normal sm:text-left text-center">
                {
                  data.solutions.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3 sm:text-left text-center">{data.support.title}</h4>
              <ul className="text-white text-base font-normal sm:text-left text-center">
                {
                  data.support.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3 sm:text-left text-center">Get the App</h4>
              <div className=" gap-3 py-3 flex flex-col sm:items-start items-center">
                <Appstore/>
                <GPlay/>
              </div>
              <div className="pt-12 text-white text-base font-normal sm:text-left text-center">
                Follow Us
              </div>
              <div className="flex gap-3 pt-3 flex flex-row sm:justify-start justify-center">
              {
                  data.followUs.map((item,i)=>item.icon)
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-9 sm:gap-9 gap-6 container mx-auto border-t border-slate-700 flex flext-wrap sm:justify-between justify-center sm:flex-row flex-col items-center">
        <div className="text-white sm:text-base text-sm  font-normal whitespace-nowrap">Collers @ 2023. All rights reserved.</div>
        <div className="flex gap-8">
          <a href="#" className="text-white sm:text-base text-sm font-normal">Terms</a>
          <a href="#" className="text-white sm:text-base text-sm font-normal">Privacy</a>
          <a href="#" className="text-white sm:text-base text-sm font-normal">Contact</a>
          <div className="flex gap-2 items-center">
            <Earth/> <div className="text-white sm:text-base text-sm font-normal">EN</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
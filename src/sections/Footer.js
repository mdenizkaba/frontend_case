import { Appstore, Earth, GPlay } from "@/icons/HeroIconList";
import Container from "../components/Container";

const Footer = ({data}) => {
  return (
    <footer className="bg-slate-900">
      <div className="py-12">
        <Container>
          <div className="grid grid-cols-4 gap-4">
            <div>
              <h4 className="text-white text-base	font-medium	py-3">{data.product.title}</h4>
              <ul className="text-white text-base font-normal">
                {
                  data.product.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3">{data.solutions.title}</h4>
              <ul className="text-white text-base font-normal">
                {
                  data.solutions.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3">{data.support.title}</h4>
              <ul className="text-white text-base font-normal">
                {
                  data.support.links.map((item,i)=>(
                    <li key={i} className="py-3"><a href={item.url}>{item.name}</a></li>
                  ))
                }
              </ul>
            </div>
            <div>
              <h4 className="text-white text-base	font-medium	py-3">Get the App</h4>
              <div className="grid gap-3 py-3">
                <Appstore/>
                <GPlay/>
              </div>
              <div className="pt-12 text-white text-base font-normal">
                Follow Us
              </div>
              <div className="flex gap-3 pt-3">
              {
                  data.followUs.map((item,i)=>item.icon)
                }
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-9 container mx-auto border-t border-slate-700 flex justify-between">
      
      <div className="text-white text-base font-normal">Collers @ 2023. All rights reserved.</div>
      <div>
        <div className="flex gap-8">
          <a href="#" className="text-white text-base font-normal">Terms</a>
          <a href="#" className="text-white text-base font-normal">Privacy</a>
          <a href="#" className="text-white text-base font-normal">Contact</a>
          <div className="flex gap-2">
            <Earth/> <div className="text-white text-base font-normal">EN</div>
          </div>
        </div>
      </div>
      </div>
      
    </footer>
  );
}

export default Footer;
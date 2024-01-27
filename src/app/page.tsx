import Header from "../sections/Header";
import Hero from "../sections/Hero";
import BestOfBest from "../sections/BestOfBest";
import { Icon1,Icon2,Icon3 } from "../icons/HeroIconList";

const links = [
	{
		name: 'Products',
		url: '/products'
	},
	{
		name: 'Solutions',
		url: '/solutions'
	},
	{
		name: 'Pricing',
		url: '/pricing'
	},
	{
		name: 'Resources',
		url: '/resources'
	},
	{
		name: 'Log In',
		url: '/login'
	}
]
const heroData = {
  title:"Collectible Sneakers",
  description:"Sit elit feugiat turpis sed integer integer accumsan turpis. Sed suspendisse nec lorem mauris. Pharetra, eu imperdiet ipsum ultrices amet.",
  image:"./images/hero.png",
  cols:[
    {
      icon: <Icon1/>,
      title: "Nibh viverra",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
    },
    {
      icon: <Icon2/>,
      title: "Cursus amet",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
    },
    {
      icon: <Icon3/>,
      title: "Ipsum fermentum",
      description: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa. "
    }
  ]
}

const bestOfBestData = {
  title:"The best of the best",
  items:[
    {
      image:"./images/best/1.jpg",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
    },
    {
      image:"./images/best/2.jpg",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
    },
    {
      image:"./images/best/3.jpg",
      title: "Title",
      description: "Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse."
    },
  ]
}
export default function Home() {
  return (
    <main className="text-lg">
      <Header links={links}/>
      <Hero data={heroData}/>
      <BestOfBest data={bestOfBestData}/>
      

      <div className="h-[500px]"></div>
    </main>
  );
}
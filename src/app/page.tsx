import Header from "../sections/Header";
import Hero from "../sections/Hero";
import BestOfBest from "../sections/BestOfBest";
import JoinUs from "../sections/JoinUs";
import LoveUs from "../sections/LoveUs";
import Collection from "../sections/Collection";
import { Icon1,Icon2,Icon3,Icon4,Icon5,Icon6,Icon7,Icon8,Icon9 } from "../icons/HeroIconList";

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

const joinUsData = {
  title:"Why join us",
  image:"./images/joinus.jpg",
  list:[
    "Est et in pharetra magna adipiscing ornare aliquam.",
    "Tellus arcu sed consequat ac velit ut eu blandit.",
    "Ullamcorper ornare in et egestas dolor orci."
  ]
}

const LoveData = {
  title:'Because they love us',
  data:[
    {
      logo:'/images/love/1.png',
      text:'Non risus viverra enim, quis. Eget vitae arcu vivamus sit tellus, viverra turpis lorem. Varius a turpis urna id porttitor.',
      image:'/images/love/1_1.png',
      name:'Hellen Jummy',
      tag:'Team Lead'
    },
    {
      logo:'/images/love/2.png',
      text:'Aliquet ridiculus mi porta habitant vulputate rhoncus, mattis amet enim. Sit purus venenatis velit semper lectus sed ornare quam nulla.',
      image:'/images/love/2_1.png',
      name:'Hellena John',
      tag:'Co-founder'
    },
    {
      logo:'/images/love/3.png',
      text:'A eget sed posuere dui risus habitasse mauris. Venenatis aliquet id ultrices a lacus. Pretium vehicula pretium posuere justo sed.',
      image:'/images/love/3_1.png',
      name:'David Oshodi',
      tag:'Manager'
    },
    {
      logo:'/images/love/4.png',
      text:'Magna egestas aliquet ut integer non. Sed diam enim nibh sit. Aliquam laoreet aenean metus nibh eu scelerisque.',
      image:'/images/love/4_1.png',
      name:'Charolette Hanlin',
      tag:'CEO'
    },
    {
      logo:'/images/love/5.png',
      text:'Amet morbi enim sodales quis dui, in habitant pharetra. Risus id fringilla sed adipiscing volutpat sit varius turpis. Sed pretium se.',
      image:'/images/love/5_1.png',
      name:'Ralph Edwards',
      tag:'Product Designer'
    },
  ]
}

const collectionData = {
  title:'Grow your collection',
  desc:'Enim neque massa porta adipiscing elit. Sem libero id faucibus nibh amet dictum pellentesque sed. Eu non turpis risus odio sapien, fames sit rhoncus. Nec magna sed interdum sit purus tellus. Et volutpat proin neque placerat at bibendum quam tellus.',
  items:[
    {
      icon:<Icon4/>,
      name:'Bibendum tellus',
      images:['./images/collection1.png','./images/collection2.png','./images/collection3.png'],
    },
    {
      icon:<Icon5/>,
      name:'Cras eget',
      images:['./images/collection2.png','./images/collection1.png','./images/collection3.png'],
    },
    {
      icon:<Icon6/>,
      name:'Dolor pharetra',
      images:['./images/collection3.png','./images/collection1.png','./images/collection2.png'],
    },
    {
      icon:<Icon7/>,
      name:'Amet, fringilla',
      images:['./images/collection1.png','./images/collection2.png','./images/collection3.png'],
    },
    {
      icon:<Icon8/>,
      name:'Amet nibh',
      images:['./images/collection1.png','./images/collection2.png','./images/collection3.png'],
    },
    {
      icon:<Icon9/>,
      name:'Sed velit',
      images:['./images/collection1.png','./images/collection2.png','./images/collection3.png'],
    },
    
  ]
}

export default function Home() {
  return (
    <main className="text-lg">
      <Header links={links}/>
      <Hero data={heroData}/>
      <BestOfBest data={bestOfBestData}/>
      <JoinUs data={joinUsData}/>
      <LoveUs data={LoveData}/>
      <Collection data={collectionData}/>

      <div className="h-[500px]"></div>
    </main>
  );
}
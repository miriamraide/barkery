import HeaderTop from "@/components/HeaderTop";
import HeaderMain from "@/components/HeaderMain";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Hero from "@/components/Slider";


export default function Home() {
  return (
    <main className='background-image'>
    <HeaderTop/>
    <HeaderMain/>
    <NavBar/> 
    <Hero/>
    <Footer/>
    </main>
     )
}

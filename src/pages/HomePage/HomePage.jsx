import Hero from "../../components/Hero/Hero"
import HeroImage from '../../assets/images/hero-1.jpg'
import './HomePage.scss'
import NavBar from "../../components/NavBar/NavBar"
import Benifit from "../../components/Benifit/Benifit"
import Services from "../../components/Services/Services"
import HowItWorks from "../../components/HowItWork/HowItWork"


const HomePage = () =>{
    return(
       <section className="home-page">
        <div className="hero-section">
            <img className='hero-image' src={HeroImage} alt="background image" />
        </div>
        <div className="hero-wrapper">
            <NavBar/>
            <Hero/>
        </div>

        <div className="benifit">
            <Benifit/>
            
        </div>
        <Services/>
        <HowItWorks/>


        

       </section>
    )

}
export default HomePage
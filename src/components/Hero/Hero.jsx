import './Hero.scss'
import Thumbtrack from '../../assets/images/thumbtrac.png'
import Yelp from '../../assets/images/yelp.png'
import Google from '../../assets/images/google.png'
import Facebook from '../../assets/images/facebook.png'
import DashIcon from '../../assets/icons/dash-icon.png'
import AddIcon from '../../assets/icons/add-icon.png'

const Hero = () =>{
    return(
        <div className="quote-section">
            <div className='hero-text'>
                <h1 className='main-text'>Experience Best Domestic Help</h1>
                <p className='lead-para'>Unleash the best domestic help for an exceptional home experience.</p>
                <p className='lead-para'>Discover the Best in Quality, Realiability, and Satisfaction</p>
            </div>
            
            <div className="left-pannel">
                <div className='container'>
                    <p className='inner-text'>Book Tuesday, Wednesday, or Thursday and save $15 on your first booking! Use code <span className='voucer-code'>WEEKDAYS</span></p>
                    <input className='text' type="text" placeholder='Your name*' />
                    <div className='inner-container'>
                        <input className='text' type="text" placeholder='Phone number*'/>
                        <input className='text' type="text" placeholder='E-mail*'/>
                        <div className="input-container">
                            <img src={DashIcon} className='left-icon' alt="" />
                            <input className='text text-bedroom' type="text" placeholder='1 Bedroom'/>
                            <img src={AddIcon} className='right-icon' alt="" />
                        </div>
                        <div className="input-container">
                            <img src={DashIcon} className='left-icon' alt="" />
                            <input className='text text-bathroom' type="text" placeholder='1 Bathroom'/>
                            <img src={AddIcon} className='right-icon' alt="" />
                        </div>
                        <input className='text' type="text" placeholder='Pick date'/>
                        <input className='text' type="text" placeholder='Have a voucer code?'/>
                    </div>
                    <button className='btn-submit'>Submit</button>
                    <div className='review-pannel'>
                        <p>Review by</p>
                        <div className='review-image-pannel'>
                            <img className='review-image' src={Thumbtrack} alt="" />
                            <img className='review-image' src={Yelp} alt="" />
                            <img className='review-image' src={Google} alt="" />
                            <img className='review-image' src={Facebook} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero;
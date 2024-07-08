import './HowItWork.scss'
import Step1 from '../../assets/images/step-1.jpg';
import Step2 from '../../assets/images/step-2.jpg';
import Step3 from '../../assets/images/step-3.jpg';
import BookIcon from '../../assets/icons/book-icon.png';
import Clean from '../../assets/icons/clean-icon.png'
import Relax from '../../assets/icons/relax-icon.png'

const HowItWorks = () =>{
    return(
        <section className="how-it-works">
            <h2 className='section-title'>HOW IT WORKS ?</h2>
            <div>
            <div className="how-it-work-container">
                <div className="how-it-work-card">
                    <img className='step-image' src={Step1} alt="" />
                    <img className='step-icon' src={BookIcon} alt="" />
                </div>
                <div className="how-it-work-card">
                    <img className='step-image' src={Step2} alt="" />
                    <img className='step-icon' src={Clean} alt="" />
                </div>
                <div className="how-it-work-card">
                    <img className='step-image' src={Step3} alt="" />
                    <img className='step-icon' src={Relax} alt="" />
                </div>
            </div>
            </div>
            <div>
                    <button className='cta-btn btn'>Submit</button>
                </div>
            
            


        </section>
    )
}
export default HowItWorks;
import './Services.scss'
import ServicesBackdrop from '../../assets/images/services.jpg'
import Service1 from '../../assets/images/service-1.jpg'
import Service2 from '../../assets/images/service-2.jpg'
import Service3 from '../../assets/images/service-3.jpg'
import Service4 from '../../assets/images/service-4.jpg'
import Service5 from '../../assets/images/service-5.jpg'

const Services = () =>{
    return(
    
    <section className='services'>
         <h2 className='section-title title'>OUR SERVICES</h2>
  <div className="pannel top-pannel">
   
  </div>
  <div className="pannel bottom-pannel">
    <img className='bg-service' src={ServicesBackdrop} alt="" />
  </div>

  <div className="s-container">
    <div className="s-card">
      <div>
        <img className='s-card-img' src={Service1} alt="" />
      </div>
      <div className="s-card-detail">
        <h4>Standard Cleaning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing </p>
        <button className='cta-btn'>View More</button>
      </div>
    </div>
    <div className="s-card">
      <div>
        <img className='s-card-img' src={Service2} alt="" />
      </div>
      <div className="s-card-detail">
        <h4>Deep Cleaning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing </p>
        <button className='cta-btn'>View More</button>
      </div>
    </div>
    <div className="s-card">
      <div>
        <img className='s-card-img' src={Service3} alt="" />
      </div>
      <div className="s-card-detail">
        <h4>Move In/Out Cleaning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing </p>
        <button className='cta-btn'>View More</button>
      </div>
    </div>
    <div className="s-card">
      <div>
        <img className='s-card-img' src={Service4} alt="" />
      </div>
      <div className="s-card-detail">
        <h4>AirBnB Cleaning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing </p>
        <button className='cta-btn'>View More</button>
      </div>
    </div>
    <div className="s-card">
      <div>
        <img className='s-card-img' src={Service5} alt="" />
      </div>
      <div className="s-card-detail">
        <h4>Office Cleaning</h4>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae adipiscing </p>
        <button className='cta-btn'>View More</button>
        
      </div>
    </div>
  </div>
</section>

    )
}
export default Services
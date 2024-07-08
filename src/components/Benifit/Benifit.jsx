import './Benifit.scss'
import QuickIcon from '../../assets/icons/speed-icon.png'
import QualifiedIcon from '../../assets/icons/qualified-icon.png'
import QuoteIcon from '../../assets/icons/quote-icon.png'

const Benifit = () =>{
    return(
        <section className="why-choose-us">
            <h2 className='section-title'>WHY CHOOSE US?</h2>
            <div className='benifit-container'>
                <div className="benifit-card">
                    <div className='icon'>
                        <img src={QuickIcon} alt="" />
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Quick</h3>
                        <p className='card-description'>To make booking your home cleaning as fast and convenient as possible, we put in extra effort to make our secure booking form stress-free and easy as
                        1-2-3</p>
                    </div>
                </div>
                <div className="benifit-card">
                    <div className='icon'>
                        <img src={QualifiedIcon} alt="" />
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Qualified</h3>
                        <p className='card-description'>We know inviting someone into your home is a big deal. All MaidMagic cleaners are carefully vetted by us so we choose the right person to care for your home</p>
                    </div>
                </div>
                <div className="benifit-card">
                    <div className='icon'>
                        <img src={QuoteIcon} alt="" />
                    </div>
                    <div className="card-text">
                        <h3 className='card-title'>Quote-free</h3>
                        <p className='card-description'>Our top of the line cleaning professionals go above and beyond to deliver best-in-class service. We review and critique every cleaning to ensure your satisfaction and make sure that we deliver on our promises</p>
                    </div>
                </div>

            </div>

        </section>
    )
}
export default Benifit
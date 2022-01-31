import Nav from './Nav'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowCircleDown, faCoffee } from '@fortawesome/free-solid-svg-icons'


function HeroImage() {
    return (
        <div className="hero-image-container">
            <div className='hero-background-window'></div>
            <div className='hero-image-content-top'>
                <Nav />
            </div>
            <div className='hero-image-content-bottom'>
                <div className="hero-image-content-left">
                    <div className='title'>
                        <h3 className='title-top'>What do <span>you<div className='wings'></div></span></h3>
                        <h3 className='title-bottom'>want out of life?</h3>
                    </div>
                    <div className='title-tagline'>
                        <p>Whatever they may be, a Sage Retirement Planner can help turn your dreams into reality.</p>
                    </div>
                    <button>Start your journey</button>
                </div>
                <div className='hero-image-content-right'>
                    <div className='hero-image-cards'>
                        <div className='hero-card-large large-one'>
                            <p>The Lap of Honour</p>
                        </div>
                        <div className='hero-card-medium medium-one'>
                            <p>Spend time with family</p>
                        </div>
                        <div className='hero-card-medium medium-two'>
                            <p>Play more golf</p>
                        </div>
                        <div className='hero-card-small small-one'>
                            <p>Write a book</p>
                        </div>
                        <div className='hero-card-small small-two'>
                            <p>Learn a language</p>
                        </div>
                        <div className='hero-card-large large-two'>
                            <p>Join a club</p>
                        </div>
                        <div className='hero-card-large large-three'>
                            <p>See the world</p>
                        </div>
                    </div>
                    <FontAwesomeIcon id='hero-card-scroll' icon={faArrowCircleDown} size='lg'/>
                </div>

            </div>
        </div>
    );
}

export default HeroImage;
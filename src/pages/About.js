// Contains background info on Sage as a business and the staff
import Nav from './components/Nav';
import petertucker from './assets/ptucker.jpg';
import craigtodd from './assets/ctodd.jpg';
import johnelders from './assets/jelders.jpg';
import trentdoust from './assets/tdoust.jpg';
import jaredbaker from './assets/jbaker.jpg';
import benphoon from './assets/bphoon.jpg';
import jamiewoolley from './assets/jwoolley.jpg';
// import nickhatch from './assets/petertucker.jpg';
// import aaronwalters from './assets/petertucker.jpg';


const teamInfo = [
    {
        name: 'Peter Tucker',
        qualifications: 'CFP',
        contact: 'ptucker@sagefg.com',
        photo: petertucker,
        position: 'Managing Director',
        details: 'Loves golf'
    },
    {
        name: 'Craig Todd',
        qualifications: 'CFP',
        contact: 'ctodd@sagefg.com',
        photo: craigtodd,
        position: 'Director',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'John Elders',
        qualifications: 'CFP',
        contact: 'jelders@sagefg.com',
        photo: johnelders,
        position: 'Director',
        details: 'Loves freo'
    },
    {
        name: 'Trent Doust',
        qualifications: 'CFP',
        contact: 'tdoust@sagefg.com',
        photo: trentdoust,
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'Jared Baker',
        qualifications: 'CFP',
        contact: 'jbaker@sagefg.com',
        photo: jaredbaker,
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'Ben Phoon',
        qualifications: 'CFP',
        contact: 'bphoon@sagefg.com',
        photo: benphoon,
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'Jamie Woolley',
        qualifications: 'CFP',
        contact: 'jwoolley@sagefg.com',
        photo: jamiewoolley,
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'Nick Hatch',
        qualifications: 'CFP',
        contact: 'nhatch@sagefg.com',
        photo: '',
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
    {
        name: 'Aaron Walters',
        qualifications: 'CFP',
        contact: 'awalters@sagefg.com',
        photo: '',
        position: 'Adviser',
        details: 'Loves sport and SMSFs'
    },
]

function About() {
    return (
        <div className="about-page-container">
            <Nav />
            <h2>Meet your team</h2>
            <div className="team-container">
                {teamInfo.map(member => (
                    <div className="team-member-card">
                        <img className="team-member-photo" src={member.photo} alt={member.name} />
                        <div className='card-overlay'>
                            <div className='card-header'>
                                <div className='card-arc'></div>
                                <div className='card-header-text'>
                                    <h4 className="team-member-name">{member.name} <span className='team-member-qualifications'>{member.qualifications}</span></h4>
                                    <p className="team-member-position">{member.position}</p>
                                </div>
                            </div>
                            <p className="team-member-contact">{member.contact}</p>
                            <p className="team-member-details">{member.details}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About;

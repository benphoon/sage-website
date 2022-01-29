// Full screen contact page
import Nav from './components/Nav';


function ContactPage() {
    return (
        <div>
            <Nav />
            <h1>Have some questions?</h1>
            <div className="contact-content-left">
                <img />
            </div>
            <div className="contact-content-right">
                <form>
                    <input type='text' id="name" placeholder="Full Name" />
                    <input type='email' id="email" placeholder="Email" />
                    <input type='number' id="phone" placeholder="Phone Number" />
                    <input type='text' id="message" placeholder="Message" />
                </form>
            </div>
        </div>
    );
}

export default ContactPage;


function ContactMini() {
    return (
        <div className="contact-mini-container">
            <h1>We'd Love To Hear From You</h1>
            <p>Whether you are thinking about retirement or just getting started, we're here to help.</p>
            <form>
                <input type='text' id="name" placeholder="Full Name"/>
                <input type='email' id="email" placeholder="Email"/>
                <input type='number' id="phone" placeholder="Phone Number"/>
                <input type='text' id="message" placeholder="Message"/>
            </form>
        </div>
    );
}

export default ContactMini;
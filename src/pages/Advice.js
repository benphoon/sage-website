
// This page will break down the advice process, areas of advice Sage provides
// Also provide links direct to Accumulator, PreRetiree and ContactPage
import Nav from './components/Nav';
import ClientType from "./components/ClientType";

function Advice() {
    return (
        <div className="advice-page-container">
            <Nav />
            <div>
                <h1>What we do</h1>
                <ul className="advice-areas">
                    <li>Superannuation & SMSF</li>
                    <li>Insurance</li>
                    <li>Investment</li>
                    <li>Retirement Planning</li>
                    <li>Estate Planning</li>
                </ul>
            </div>
            <div className="advice-process-container">
                <h1>How we do it</h1>
                <p>They say the journey of a thousand miles begins with a single step and the actions you take today set the foundation for your future.</p>
                <p>We know talking about your finances can be scary.</p>
                <p>That's why we offer a flexible, 6 step approach to financial advice.</p>
                <p>Our friendly advisers will check in throughout this process to make sure you are comfortable.</p>
                <p>Hover over the timeline to find out more.</p>
            </div>
            <div className="advice-process-timeline-container">
                <p>Getting to know you</p>
                <p>Understanding your options</p>
                <p>Developing your strategy</p>
                <p>Preparing your Statement of Advice</p>
                <p>Presentation of advice</p>
                <p>Making it happen</p>
            </div>
            <ClientType />
        </div>
    );
}

export default Advice;
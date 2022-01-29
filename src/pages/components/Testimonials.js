const testimonialData = [
    {
        client: 'Ian and Peta',
        text: 'The regular information updates on relevant matters are very informative and much appreciated. In summary, we are very satisfied with Sage Financial Group, in particular Craig Todd,  and would recommend the firm and their services.'
    },
    {
        client: 'Patricia',
        text: 'I have introduced several friends already and some family members recently as well. I would not have managed my retirement without the advice received from Sage.'
    },
    {
        client: 'Margaret',
        text: 'I have been a client of Sage Financial Group for approximately 5 years. I have been very satisfied with the advice given and actions taken on my behalf, especially appropriate recommendations for organisation of an Allocated Pension Fund, minimizing Capital Gains Tax on a rental property after retirement and assistance and relevant advice on the estate of my partner who passed away without a will. '
    },
    {
        client: 'Peter',
        text: 'We are writing to bring your attention to the excellent service we have received, from financial planner John Elders. Mr Elders expressed a keen interest in us and our financial situation. He was honest in his appraisal, took the time to get to know us and presented to us a practical way forward. He continued his excellent customer service by way of follow-up calls and meetings.  We realised the dedication and integrity of John as he “walked” us through our financial situation.  He made us feel as though we were important and he had a genuine interest in our financial well being.'
    },
    {
        client: 'Paul',
        text: 'Speaking as a client, John Elders and the team have looked after my investments, Superannuation and financial planning for over seven years. The Sage team are honest, ethical and they respect my views and continue to provide advice and services to help me reach my financial goals.'
    },
    {
        client: 'Dene & Beryl',
        text: 'Thank you John Elders. Beryl and I are really appreciative of the advice and the willingness just to help us out especially in the difficult times over 2020 with so much happening in our lives. As you know we had reservations about financial advice after many attempts, your approach in making our experience not only the great advice but it was about us and our targets in a purely relaxing environment.'
    },
]


function Testimonials() {
    return (
        <div className="testimonials-container">
            <p>Sage advisers have helped hundreds of clients build the foundation of their financial lives. Here is what they had to say:</p>
            <div className="testimonial-cards-container">
                {testimonialData.map(entry => (
                    <div className="testimonial-card">
                        <p>{entry.text}</p>
                        <h4 className="testimonial-client">{entry.client}</h4>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Testimonials;

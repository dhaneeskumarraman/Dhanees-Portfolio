function Contact() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("Casting your spell...");

        // PASTE YOUR GOOGLE SCRIPT URL HERE
        const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxKIFiNVYVdsLtTllbn1rv_7pfW48tpsDZt7c8WsZIuR704gZW7itmsY4rrPKW61m0d9A/exec";

        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            message: e.target.message.value
        };

        try {
            const response = await fetch(SCRIPT_URL, {
                method: 'POST',
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus("Message Sent Successfully! ✨");
                e.target.reset();
            } else {
                throw new Error();
            }
        } catch (error) {
            setStatus("Magic failed... Please try again later.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section id="contact">
            <h2 data-aos="fade-up">Get In Touch</h2>
            <div className="contact-form" data-aos="fade-up">
                <form onSubmit={handleSubmit} className="contact-form" style={{padding: 0}}>
                    <input type="text" name="name" placeholder="Name" required />
                    <input type="email" name="email" placeholder="Email" required />
                    <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
                    
                    <button type="submit" disabled={loading}>
                        {loading ? "Sending..." : "Send Magic Message"}
                    </button>
                </form>

                {status && (
                    <div style={{
                        marginTop: '20px', 
                        textAlign: 'center', 
                        color: status.includes('Sent') ? 'var(--primary)' : '#ef4444'
                    }}>
                        {status}
                    </div>
                )}

                <div style={{marginTop: '20px', color: 'var(--grey)', textAlign: 'center'}}>
                    <p>Email: dhaneeskumar888@gmail.com</p>
                    <p>
                        <a href="https://linkedin.com/in/dhaneeskumar" target="_blank" style={{color: 'var(--primary)', textDecoration: 'none'}}>
                            <i className="fab fa-linkedin"></i> LinkedIn Profile
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
}
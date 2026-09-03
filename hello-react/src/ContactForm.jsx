export const ContactForm = () => {
    return(
        <form className="contact-form">
            <label htmlFor="username">Username:</label>
            <input id="username" className="form-input" type="text" placeholder="Username" />
            <br />
            <label htmlFor="email">Email:</label>
            <input id="email" className="form-input" type="email" placeholder="Email" />
            <br />
            <button>Submit</button>
        </form>
    );
}
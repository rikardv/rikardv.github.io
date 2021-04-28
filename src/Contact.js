import { useForm, ValidationError } from "@formspree/react";
import "./Contact.css";
import { Link } from "react-router-dom";

function Contact() {
  const [state, handleSubmit] = useForm("xrgrzozy");
  if (state.succeeded) {
    return (
      <div className="MessageHolder">
        <p>Your message was sent successfully!</p>
        <Link to="/" className="Return">
          Gå tillbaka
        </Link>
      </div>
    );
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">*Email</label>

      <div className="Errors">
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </div>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="email@doman.se"
      />

      <div className="Msg">Meddelande</div>
      <div className="Errors">
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
      </div>
      <textarea
        id="message"
        name="message"
        placeholder="Hej, mitt namn är..."
      />

      <button type="submit" disabled={state.submitting}>
        Skicka
      </button>
    </form>
  );
}

export default Contact;

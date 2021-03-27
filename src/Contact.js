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
    <div className="CContainer">
      <div className="HeadInfo">
        <Link to="/" className="CContact">
          Gå tillbaka
        </Link>
      </div>

      <div className="Form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">*Email Address</label>
          <div className="Errors">
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
          </div>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="minemail@doman.se"
          />

          <div className="Msg">Meddelande</div>
          <div className="Errors">
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
          </div>
          <textarea id="message" name="message" />

          <button type="submit" disabled={state.submitting}>
            Skicka
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;

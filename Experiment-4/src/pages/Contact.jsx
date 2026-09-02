import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate("/");
  };

  return (
    <div>
      <h1>Contact Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
        />

        <br />
        <br />

        <input
          type="email"
          placeholder="Enter your email"
        />

        <br />
        <br />

        <textarea
          placeholder="Enter your message"
        ></textarea>

        <br />
        <br />

        <button type="submit">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
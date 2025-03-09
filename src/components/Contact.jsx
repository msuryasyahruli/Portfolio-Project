import React, { useState } from "react";

const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (name, value) => {
    setPayload({ ...payload, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // await emailjs.send(
      //   "YOUR_SERVICE_ID", // Ganti dengan SERVICE_ID dari EmailJS
      //   "YOUR_TEMPLATE_ID", // Ganti dengan TEMPLATE_ID dari EmailJS
      //   {
      //     name: payload.name,
      //     email: payload.email,
      //     message: payload.message,
      //   },
      //   "YOUR_PUBLIC_KEY" // Ganti dengan PUBLIC_KEY dari EmailJS
      // );
      console.log(payload);

      setPayload({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="px-4 flex items-center justify-center h-screen"
    >
      <div className="w-[32rem] text-center">
        <p className="text-4xl font-semibold mb-8">Contact me</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            className="bg-[#1d1d1d] p-4 rounded-lg outline-[#00abf0]"
            placeholder="name"
            value={payload.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <input
            type="email"
            className="bg-[#1d1d1d] p-4 rounded-lg outline-[#00abf0]"
            placeholder="email"
            value={payload.email}
            onChange={(e) => handleChange("email", e.target.value)}
            required
          />
          <textarea
            className="bg-[#1d1d1d] h-48 p-4 rounded-lg outline-[#00abf0]"
            placeholder="message"
            value={payload.message}
            onChange={(e) => handleChange("message", e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[#00abf0] p-3 sm:p-2 font-semibold text-lg text-[#081b29] rounded-lg hover:bg-[#00c4f0] active:scale-95 transition-transform disabled:bg-gray-600"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

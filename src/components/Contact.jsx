import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [payload, setPayload] = useState({
    name: "",
    title: "",
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
      await emailjs.send(
        "service_71mptoc", // Ganti dengan SERVICE_ID dari EmailJS
        "template_70y8ifg", // Ganti dengan TEMPLATE_ID dari EmailJS
        {
          title: payload.title,
          name: payload.name,
          message: payload.message,
        },
        "StH1dH8iVRQp2VslJ" // Ganti dengan PUBLIC_KEY dari EmailJS
      );
    } catch (err) {
      console.error("Failed to send message. Please try again.");
    } finally {
      setPayload({ name: "", title: "", message: "" });
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
            placeholder="Title"
            value={payload.title}
            onChange={(e) => handleChange("title", e.target.value)}
            required
          />
          <input
            type="text"
            className="bg-[#1d1d1d] p-4 rounded-lg outline-[#00abf0]"
            placeholder="Name"
            value={payload.name}
            onChange={(e) => handleChange("name", e.target.value)}
            required
          />
          <textarea
            className="bg-[#1d1d1d] h-48 p-4 rounded-lg outline-[#00abf0]"
            placeholder="Message"
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

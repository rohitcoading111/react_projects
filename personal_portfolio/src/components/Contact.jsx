import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Portfolio Contact from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:rp538220@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className=" scroll-mt-24 relative overflow-hidden px-6 py-32 lg:px-8 lg:py-40"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/40">
            05 / Contact
          </p>

          <h2 className="max-w-4xl text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-8xl">
            Have an idea?
            <br />
            <span className="text-white/35">
              Let's build it.
            </span>
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">

          <div>
            <p className="max-w-md text-base leading-7 text-white/45">
              Whether you want to discuss a project, collaboration,
              internship or just say hello, feel free to reach out.
            </p>

            <div className="mt-10 space-y-4">

              <a
                href="mailto:YOUR_EMAIL@gmail.com"
                className="block text-lg text-white/70 transition hover:text-white"
              >
               rp538220@gmail.com
              </a>

              <a
                href="https://github.com/rohitcoading111"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-white/40 transition hover:text-white"
              >
                LinkedIn ↗
              </a>

            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8"
          >

            <div>
              <label
                htmlFor="name"
                className="text-xs uppercase tracking-[0.2em] text-white/30"
              >
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-white/20 focus:border-white/40"
              />
            </div>
            <div className="mt-8">
              <label
                htmlFor="email"
                className="text-xs uppercase tracking-[0.2em] text-white/30"
              >
                Email
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="mt-3 w-full border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-white/20 focus:border-white/40"
              />
            </div>

            <div className="mt-8">
              <label
                htmlFor="message"
                className="text-xs uppercase tracking-[0.2em] text-white/30"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows="5"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your idea..."
                className="mt-3 w-full resize-none border-b border-white/10 bg-transparent py-3 text-white outline-none placeholder:text-white/20 focus:border-white/40"
              />
            </div>

            <button
              type="submit"
              className="mt-8 rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition duration-300 hover:scale-105"
            >
              Send Message ↗
            </button>

            {submitted && (
              <p className="mt-4 text-sm text-green-400/70">
                Opening your email client...
              </p>
            )}

          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
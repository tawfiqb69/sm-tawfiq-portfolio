"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function ContactForm({ email }) {
  const [values, setValues] = useState({ name: "", senderEmail: "", message: "" });
  const [errors, setErrors] = useState({});
  const [notice, setNotice] = useState("");
  const [opening, setOpening] = useState(false);

  function validate(nextValues) {
    const nextErrors = {};
    if (!nextValues.name.trim()) nextErrors.name = "Please enter your name.";
    if (!nextValues.senderEmail.trim()) nextErrors.senderEmail = "Please enter your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(nextValues.senderEmail)) nextErrors.senderEmail = "Please enter a valid email address.";
    if (!nextValues.message.trim()) nextErrors.message = "Please enter a message.";
    return nextErrors;
  }

  function update(field, value) {
    const nextValues = { ...values, [field]: value };
    setValues(nextValues);
    setErrors(validate(nextValues));
    setNotice("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setNotice("Please check the highlighted fields.");
      return;
    }
    if (!email || email === "your.email@example.com") {
      setNotice("Please configure your real contact email before publishing.");
      return;
    }
    const subject = encodeURIComponent(`Portfolio message from ${values.name}`);
    const body = encodeURIComponent(`Name: ${values.name}\nReply email: ${values.senderEmail}\n\n${values.message}`);
    setOpening(true);
    setNotice("Your email app is opening…");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
    window.setTimeout(() => setOpening(false), 1200);
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-field">
        <label htmlFor="contact-name">Your Name</label>
        <input id="contact-name" name="name" autoComplete="name" placeholder="Enter your name" value={values.name} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? "contact-name-error" : undefined} onChange={(e) => update("name", e.target.value)} />
        {errors.name && <p className="field-error" id="contact-name-error">{errors.name}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-email">Your Email</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" value={values.senderEmail} aria-invalid={Boolean(errors.senderEmail)} aria-describedby={errors.senderEmail ? "contact-email-error" : undefined} onChange={(e) => update("senderEmail", e.target.value)} />
        {errors.senderEmail && <p className="field-error" id="contact-email-error">{errors.senderEmail}</p>}
      </div>
      <div className="form-field">
        <label htmlFor="contact-message">Your Message</label>
        <textarea id="contact-message" name="message" rows={5} placeholder="Tell me a little about your idea..." value={values.message} aria-invalid={Boolean(errors.message)} aria-describedby={errors.message ? "contact-message-error" : undefined} onChange={(e) => update("message", e.target.value)} />
        {errors.message && <p className="field-error" id="contact-message-error">{errors.message}</p>}
      </div>
      <button className="button button-primary submit-button" type="submit" disabled={opening}><MessageCircle size={17} /> {opening ? "Opening Email…" : "Send Message"}</button>
      <p className={`form-notice ${notice ? "form-notice-visible" : ""}`} role="status" aria-live="polite">{notice}</p>
      <p className="form-footnote">This opens your email app with the message ready to send.</p>
    </form>
  );
}

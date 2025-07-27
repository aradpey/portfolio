"use client";

import type React from "react";

import { useState, useRef, type FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const validateForm = () => {
    let valid = true;
    const newErrors = {
      name: "",
      email: "",
      subject: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
      valid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Use environment variables for EmailJS configuration
      // These are public keys that are safe to expose in client-side code
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

      // Validate that environment variables are set
      if (!serviceId || !templateId || !publicKey) {
        throw new Error(
          "EmailJS configuration is missing. Please check your environment variables."
        );
      }

      await emailjs.sendForm(
        serviceId,
        templateId,
        formRef.current!,
        publicKey
      );

      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4">
      <div
        className="rounded-xl overflow-hidden"
        style={{
          background:
            "linear-gradient(to right, #4B9EF4, #9B6BF7, #E85EE3, #F7936F)",
          padding: "2px",
        }}
      >
        <div className="bg-[#0A0C12] rounded-[10px]">
          <div className="grid md:grid-cols-2">
            {/* Contact Information */}
            <div className="p-8 md:p-12 bg-[#08090D] rounded-tl-[9px] rounded-bl-[9px]">
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F] bg-clip-text text-transparent">
                Contact Me
              </h2>
              <p className="text-gray-300 mb-8">
                Have questions or opportunities you&apos;d like to discuss with
                me? Use the form or you can reach me at{" "}
                <a
                  href="mailto:ahouraradpey@gmail.com"
                  className="text-[#9B6BF7] hover:text-[#E85EE3] transition-colors"
                >
                  ahouraradpey@gmail.com
                </a>
              </p>

              <div className="mt-auto pt-8">
                <h3 className="text-lg font-semibold mb-4 text-gray-200">
                  Connect with me
                </h3>
                <div className="flex gap-4">
                  <Link
                    href="https://github.com/aradpey"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Github className="w-6 h-6 text-gray-300" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/ahoura-radpey/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Linkedin className="w-6 h-6 text-gray-300" />
                  </Link>
                  <Link
                    href="mailto:ahouraradpey@gmail.com"
                    className="p-2 rounded-full hover:bg-white/10 transition-colors"
                  >
                    <Mail className="w-6 h-6 text-gray-300" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-8 md:p-12 rounded-tr-[9px] rounded-br-[9px]">
              <h2 className="text-2xl font-bold mb-8 text-gray-200">
                Send me a message
              </h2>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-[#151820] border ${
                        errors.name ? "border-red-500" : "border-gray-700"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B6BF7] text-white`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-2 bg-[#151820] border ${
                        errors.email ? "border-red-500" : "border-gray-700"
                      } rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B6BF7] text-white`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Subject <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className={`w-full px-4 py-2 bg-[#151820] border ${
                      errors.subject ? "border-red-500" : "border-gray-700"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B6BF7] text-white`}
                    placeholder="What is this regarding?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.subject}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-1"
                  >
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className={`w-full px-4 py-2 bg-[#151820] border ${
                      errors.message ? "border-red-500" : "border-gray-700"
                    } rounded-md focus:outline-none focus:ring-2 focus:ring-[#9B6BF7] text-white`}
                    placeholder="Your message"
                  ></textarea>
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative overflow-hidden rounded-md px-6 py-3 font-medium transition-all disabled:opacity-70"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-[#4B9EF4] via-[#9B6BF7] via-[#E85EE3] to-[#F7936F]"></span>
                    <span className="relative z-10 text-white">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </span>
                  </button>
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-500/20 border border-green-500 rounded-md text-green-400 text-center">
                    Your message has been sent successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-500/20 border border-red-500 rounded-md text-red-400 text-center">
                    There was an error sending your message. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

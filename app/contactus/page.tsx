"use client";
import { useState } from "react";
import Header from "@/component/header";
import { useRouter } from "next/navigation";
import Footer from "@/component/footer";

export default function Contactus() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async () => {

    try {
      setError("");
      setSuccess("");
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data && data.success) {
        setSuccess("Message sent!");
        setForm({ name: "", email: "", message: "" });
      } else {
        setError(data?.error || "Failed to submit message");
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : String(err));
    }
  };

  return (
    <div>

      <Header />
      <button
        onClick={() => router.push("/")}
        className=" lg:px-15 md:px-7 px-3 lg:py-5 md:py-10 py-5  text-black "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinejoin="round"
            strokeLinecap="round"
            d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
          />
        </svg>
      </button>
      <div className="py-20 ">
        <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="max-w-3xl mx-auto bg-gray-100 shadow-xl rounded-xl p-8 flex flex-col gap-5"
      >
        <h2 className="text-2xl font-semibold text-center mb-4">Contact Us</h2>

        <input
          type="text"
          placeholder="Your Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 text-gray-800"
        />

        <input
          type="email"
          placeholder="Your Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 text-gray-800"
        />

        <textarea
          placeholder="Message"
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          rows={4}
          className="w-full border border-gray-300 bg-white focus:border-black focus:ring-1 focus:ring-black rounded-lg px-4 py-3 text-gray-800 resize-none"
        />

        <button
          type="submit"
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-900 transition font-medium"
        >
          Send Message
        </button>

        {success && <p className="text-green-600 text-center">{success}</p>}
        {error && <p className="text-red-600 text-center">{error}</p>}
      </form>


      </div>

      

      {success && <p className="text-green-600">{success}</p>}
      {error && <p className="text-red-600">{error}</p>}
      <Footer />
    </div>
  );
}

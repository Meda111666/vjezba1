import React, { useState } from "react";
import { Mail, User, MessageSquare } from "lucide-react";

const App = () => {
  // Stanje za pohranu unosa korisnika
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Stanje za rukovanje greškama validacije
  const [errors, setErrors] = useState({});

  // Stanje za indikaciju slanja (loading) i status poruke
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState({ type: "", text: "" });

  // Rukovanje promjenama u poljima
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Ukloni grešku kada korisnik počne ponovno unositi
    if (errors[name]) {
      setErrors((prevErrors) => {
        const newErrors = { ...prevErrors };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  // Funkcija za validaciju forme
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = "Ime je obavezno.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email je obavezan.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Unesite valjanu email adresu.";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Poruka je obavezna.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Rukovanje slanjem forme
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitting(true);
      setStatusMessage({ type: "", text: "" });

      // Simulacija slanja podataka na server
      setTimeout(() => {
        console.log("Slanje podataka:", formData);
        setIsSubmitting(false);
        setStatusMessage({
          type: "success",
          text: "Vaša poruka je uspješno poslana!",
        });
        setFormData({ name: "", email: "", message: "" }); // Resetiraj formu
      }, 2000); // Čeka 2 sekunde
    } else {
      setStatusMessage({
        type: "error",
        text: "Molimo ispravite pogreške u formi.",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4 sm:p-6">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-2xl p-6 sm:p-10 border-t-8 border-indigo-500">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-2">
          Kontakt Forma
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Molimo ispunite obrazac kako bismo vas kontaktirali.
        </p>

        {/* Prikaz statusnih poruka */}
        {statusMessage.text && (
          <div
            className={`p-4 mb-4 rounded-lg font-medium text-sm text-center ${
              statusMessage.type === "success"
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {statusMessage.text}
          </div>
        )}

        <form onSubmit={handleSubmit} noValidate>
          {/* Polje za Ime */}
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              <User size={16} className="inline mr-2 text-indigo-500" />
              Ime i prezime
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Unesite svoje ime"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                errors.name
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              } focus:outline-none focus:ring-2 transition-colors`}
              disabled={isSubmitting}
            />
            {errors.name && (
              <p className="text-red-500 text-xs mt-1">{errors.name}</p>
            )}
          </div>

          {/* Polje za Email */}
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              <Mail size={16} className="inline mr-2 text-indigo-500" />
              Email adresa
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="vas.email@primjer.com"
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                errors.email
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              } focus:outline-none focus:ring-2 transition-colors`}
              disabled={isSubmitting}
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Polje za Poruku */}
          <div className="mb-8">
            <label
              htmlFor="message"
              className="block text-gray-700 text-sm font-semibold mb-2"
            >
              <MessageSquare
                size={16}
                className="inline mr-2 text-indigo-500"
              />
              Vaša poruka
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Ovdje unesite svoju poruku..."
              className={`w-full px-4 py-3 rounded-lg bg-gray-50 border ${
                errors.message
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300 focus:ring-indigo-500"
              } focus:outline-none focus:ring-2 transition-colors resize-none`}
              disabled={isSubmitting}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Gumb za slanje */}
          <button
            type="submit"
            className={`w-full py-3 rounded-lg font-bold text-white transition-all duration-300 ease-in-out
              ${
                isSubmitting
                  ? "bg-indigo-400 cursor-not-allowed"
                  : "bg-indigo-500 hover:bg-indigo-600 shadow-md hover:shadow-lg"
              }
              focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Šaljem..." : "Pošalji poruku"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";

const ContactForm = () => {
  // Stanje za pohranu vrijednosti unesenih u formu
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Stanje za prikaz poruka o greškama
  const [errors, setErrors] = useState({});

  // Stanje za poruku o uspješnom slanju
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Funkcija za ažuriranje stanja kada se promijeni vrijednost polja
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Ukloni grešku za polje čija se vrijednost mijenja
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
    let newErrors = {};
    if (!formData.name) {
      newErrors.name = "Medin";
    }
    if (!formData.email) {
      newErrors.email = "Ime je obavezno.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email adresa nije validna.";
    }
    if (!formData.message) {
      newErrors.message = "Poruka je obavezna.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Vraća true ako nema grešaka
  };

  // Funkcija koja se poziva pri slanju forme
  const handleSubmit = (e) => {
    e.preventDefault(); // Spriječi zadano ponašanje forme (osvježavanje stranice)

    if (validate()) {
      // Ovdje bi inače slali podatke na server (npr. putem API poziva)
      console.log("Podaci forme su:", formData);
      setSubmitSuccess(true); // Postavi poruku o uspješnom slanju
      setFormData({ name: "", email: "", message: "" }); // Resetiraj formu
      setErrors({}); // Očisti eventualne greške
    } else {
      setSubmitSuccess(false); // Osiguraj da poruka o uspjehu nije prikazana ako ima grešaka
    }
  };

  return (
    <div
      style={{
        maxWidth: "500px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
      }}
    >
      <h2>Kontaktirajte nas</h2>
      {submitSuccess && (
        <p style={{ color: "green", fontWeight: "bold" }}>
          Vaša poruka je uspješno poslana!
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="name"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Ime:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.name && (
            <p style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}>
              {errors.name}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
            }}
          />
          {errors.email && (
            <p style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}>
              {errors.email}
            </p>
          )}
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label
            htmlFor="message"
            style={{
              display: "block",
              marginBottom: "5px",
              fontWeight: "bold",
            }}
          >
            Poruka:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows="5"
            style={{
              width: "100%",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px",
              boxSizing: "border-box",
              resize: "vertical",
            }}
          ></textarea>
          {errors.message && (
            <p style={{ color: "red", fontSize: "0.9em", marginTop: "5px" }}>
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "white",
            padding: "12px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "1em",
            width: "100%",
          }}
        >
          Pošalji poruku
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

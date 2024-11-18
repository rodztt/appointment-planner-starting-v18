import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  errorMessage
}) => {
  
  const handlePhoneChange = (e) => {
    const phone = e.target.value;
    // A more flexible regex for phone numbers:
    const phoneRegex =/^[+]?[0-9]{1,15}$/;
  
    if (phoneRegex.test(phone)) {
      setPhone(phone);
    } else {
      // Handle invalid input, e.g., show an error message
      console.error("Invalid phone number format");
    }
  };
  return (
    <>
<form onSubmit={handleSubmit}>
  <label>
    Name:
    <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
  </label>
  <label>
    Phone:
    <input type="tel" name="phone" value={phone} onChange={handlePhoneChange} />
  </label>
  <label>
    Email:
    <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
  </label>
  <button type="submit">Add Contact</button>
</form>
    </>
  );
};


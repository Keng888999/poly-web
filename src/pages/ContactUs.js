import React from "react";

const ContactUs = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Us</h2>
      <div className="max-w-md mx-auto text-center">
        <p>Email: <a href="mailto:contact@lannapolytechnic.ac.th" className="text-blue-300 hover:underline">contact@lannapolytechnic.ac.th</a></p>
        <p>Phone: 053-123-456</p>
        <p>Address: 123 Lanna Rd, Chiang Mai, Thailand</p>
      </div>
    </div>
  );
};


export default ContactUs;
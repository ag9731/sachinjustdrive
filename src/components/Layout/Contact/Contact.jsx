import React from "react";
import Section7 from "../HomePage/Layout/Section7/Section7";

const Contact = () => {
  return (
    <>
      <div className="mt-8">
        <Section7 />
      </div>

      {/* Map */}

      <div className="flex flex-col gap-10 justify-center md:justify-end flex-1 mt-10">
        <section className="">
          <h1 className="text-4xl text-center">Location</h1>
        </section>
        <section>
          <iframe
            title="Google Maps Location of Sachin Just Drive"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.0460700046715!2d77.5810778!3d12.904759199999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156b89e6b3d1%3A0xf89397861723c66a!2s30th%20B%20Main%20Rd%2C%20KR%20Layout%2C%20JP%20Nagar%20Phase%206%2C%20J.%20P.%20Nagar%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1722763520438!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </>
  );
};

export default Contact;

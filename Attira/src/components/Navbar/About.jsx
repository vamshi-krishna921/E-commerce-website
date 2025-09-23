import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-orange-400 text-white py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="max-w-2xl mx-auto text-lg">
          We are passionate about delivering high-quality products and creating
          amazing experiences for our customers.
        </p>
      </section>

      <section className="py-16 px-6 md:px-20 grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Mission</h2>
          <p className="text-gray-600 leading-relaxed">
            Our mission is to empower people by offering products that bring
            comfort, innovation, and style to everyday life. We believe in
            combining creativity with technology to serve our customers better.
          </p>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-orange-400">Our Vision</h2>
          <p className="text-gray-600 leading-relaxed">
            We envision a future where shopping is seamless, enjoyable, and
            accessible to everyone. Our goal is to build trust and long-lasting
            relationships with our customers worldwide.
          </p>
        </div>
      </section>

      <section className="py-16 px-6 md:px-20 bg-white">
        <h2 className="text-3xl font-bold text-center text-orange-400 mb-12">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://via.placeholder.com/150"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Vamshi Krishna</h3>
            <p className="text-gray-500">Founder & CEO</p>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1689977927774-401b12d137d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDV8fHByb2ZpbGUlMjBwaWN0dXJlfGVufDB8fDB8fHww"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Unknown</h3>
            <p className="text-gray-500">Head of Design</p>
          </div>

          <div className="text-center bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <img
              src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Team Member"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover"
            />
            <h3 className="text-lg font-semibold">Unknown</h3>
            <p className="text-gray-500">Lead Developer</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;

import React from "react";
import { Link, Routes, Route } from "react-router-dom";
function About() {
  return (
    <div className="container">
      <h2>about page</h2>
      <div>
        <Link to="">Biz haqqimmizda</Link>
        <Link to="team">Team</Link>
        <Link to="company">Company</Link>
        <Link to="service">Service</Link>
      </div>
      <Routes>
        <Route path="" element={<h3>Biz haqqimizda</h3>} />
        <Route path="team" element={<h3>Jamoamiz haqida</h3>} />
        <Route path="company" element={<h3>Bizning xizmatlar</h3>} />
        <Route path="service" element={<h3>Jamoamiz haqida</h3>} />
      </Routes>
    </div>
  );
}
export default About;

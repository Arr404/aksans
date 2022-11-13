import Nav from "../Components/navigasi/Nav";
import "./Home.css";
import Hero from "./Hero";
import Tengah from "../Components/tengah_landing/tengah"
import Footer from "../Components/footer/index"

const Home = () => {
  return (
    <>
      <div
        className="container-header"
        style={{ position: "fixed"}}
      >
        <Nav />
        {/* <div className="hero">
          <div className="hero-section">
          <div className="judul">
          <h1>PARTAI AMANAT NASIONAL</h1>
          <p>Dewan Pimpinan Daerah Jombang</p>
          </div>
          <div className="info">
          <blockquote>
          Partai ini pada dasarnya adalah partai terbuka, meski sebagian
          orang menganggapnya partai orang Muhammadiyah karena sosok Amien
          Rais pada saat itu adalah Ketua umum Muhammadiyah
          </blockquote>
          </div>
          </div>
          <div className="avatar">
          <img src="./pan.png" alt="ketua PAN" />
          </div>
        </div> */}
      </div>
      <Hero />
      <Tengah/>
      <Footer/>
    </>
  );
};
export default Home;

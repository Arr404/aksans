import Logins from "../../login"
import "./style.css";

const tengah = () =>{
  return (
    <>
      <div className="tengah-container">
       <div className="kata">
            <h1>AKSANTARA</h1>
            <p>GCS Antharwa adalah GCS yang dikembangkan berbasis web application dengan menerapkan skema autentikasi agar dapat diakses oleh banyak pengguna di berbagai device apapun. Terdapat tiga fungsi utama dari GCS Antharwa yaitu menerima dan menampilkan flight data dari UAV, merencanakan dan mengirimkan misi terbang ke UAV, dan melakukan pengaturan serta penerimaan parameter UAV.</p>
       </div>
       <div className="login">
            <Logins/>
       </div>
      </div>
    </>
  );
}

export default tengah;

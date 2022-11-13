import "./style.css";
import { useEffect, useState } from "react";
import Auth from "../../api/auth";
import { getAccessToken, setAccessToken } from "../../utils/auth";
import Swal from "sweetalert2";
import {Link, useNavigate} from "react-router-dom";
import GoogleLogin from 'react-google-login';
import Logo from "../../Assets/img.png"
import {AiFillGoogleCircle} from "react-icons/ai"


export default function Login() {
  let navigate = useNavigate();
  const [googleButton, setGoogleButton] = useState(<> Waiting servers...</>);
  const [loginProb,setLogin] = useState(true)
  var hidden = {display: !loginProb ? 'block' : 'none' }
  var btnLoginColor = {backgroundColor : !loginProb ? "#FDFDFD":"#7866AD",color : !loginProb ? "#7866AD":"#FDFDFD"}
  var btnSignColor = {backgroundColor : !loginProb ? "#7866AD":"#FDFDFD",color : !loginProb ? "#FDFDFD":"#7866AD"}

  useEffect(() => {
    if (getAccessToken()) {
      // navigate('/dashboard'); // redirect ke halaman dashboard apabila sudah login
    }

    Auth.getLogin().then((result) => {
      setGoogleButton(loginGoogleButton(result.data.google_client_id));
    }).catch((err) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops..',
        text: 'Tidak dapat terhubung ke server'
      });
    })
  }, []);

  const handleLogin = () => {
  if(loginProb){

//     var nama = document.getElementById("nama").value;
//     var email = document.getElementById("email").value;
//     var repassword = document.getElementById("rePassword").value;
//     var password = document.getElementById("password").value;
//     if (!email || !password) {
//       Swal.fire({
//         title: 'Oops...',
//         text: 'Email atau password belum diisi',
//         icon: 'error',
//         timer: 2000
//       });
//       return;
//     }
//     Auth.loginWithEmail(email, password)
//       .then((result) => {
//         setAccessToken(result.data.access_token);
//         navigate("/dashboard");
//       })
//       .catch((error) => {
//         console.error(error);
//         Swal.fire({
//           title: "Oops...",
//           text: "Email atau password salah",
//           icon: "error",
//         });
//       });
  }else{
    setLogin(true)
  }};

  const handleSign = () => {
  if(!loginProb){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    if (!email || !password) {
      Swal.fire({
        title: 'Oops...',
        text: 'Email atau password belum diisi',
        icon: 'error',
        timer: 2000
      });
      return;
    }
    Auth.loginWithEmail(email, password)
      .then((result) => {
        setAccessToken(result.data.access_token);
        navigate("/dashboard");
      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          title: "Oops...",
          text: "Email atau password salah",
          icon: "error",
        });
      });
  }else{
    setLogin(false)
  }};

  const responseGoogleSuccess = (response) => {
    Auth.loginWithGoogle(response.tokenId).then(() => {
      Swal.fire({
        title: 'Success',
        text: 'Login berhasil',
        icon: 'success',
        timer: 1000
      }).then(() => {
        navigate("/dashboard");
      })
    }).catch((err) => {
      console.log(err.status_code);
      Swal.fire({
        icon: 'error',
        text: 'Maaf akun anda tidak terdaftar',
        title: 'Oops...'
      });
    });
  };

  const responseGoogleError = (reponse) => {

  }

  const loginGoogleButton = (client_id) => {
    return (

        <button id="button">

          <GoogleLogin
            clientId={`${client_id}`}
            render={renderProps => (
              <div onClick={renderProps.onClick} className="go" disabled={renderProps.disabled}><AiFillGoogleCircle/> Google</div>
            )}
            buttonText="Login"
            onSuccess={responseGoogleSuccess}
            onFailure={responseGoogleError}
            cookiePolicy={'single_host_origin'}
          />
        </button>
    )
  }

  return (
    <>
      <div className="main">
        <div className="background">
          <div className="shape" />
          <div className="shape" />
        </div>
        <form>
          <h3 style={{fontWeight: 'bold'}}>LOGIN</h3>
          <br/>
          <br/>
          <div style={hidden}>
            <label htmlFor="nama">Nama Lengkap</label>
            <input type="text" placeholder="nama" id="nama" />
          </div>
          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Email" id="email" />

          <label htmlFor="password">Password</label>
          <input type="password" placeholder="Password" id="password" />

          <div style={hidden}>
            <label htmlFor="rePassword">Confirm Password</label>
            <input type="password" placeholder="Confirm Password" id="rePassword" />
          </div>
          <div id="login">
          <Link to="/map">
            <button style={btnLoginColor} className="loginButton" onClick={handleLogin} type="button">
              Log In
            </button>
            </Link>
            <button style={btnSignColor} className="signInButton" onClick={handleSign} type="button">
              Sign In
             </button>
          </div>

        </form>
      </div>
    </>
  );
}

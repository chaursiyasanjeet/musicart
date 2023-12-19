import style from "./Signup.module.css";
import musicIcon from "../../assets/musicIcon.svg";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
const Login = () => {
  const [user, setUser] = useState({ email: "", password: "" });

  const validateForm = (email, password) => {
    let error;

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter valid email");
      error = true;
    }
    if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(
        password
      )
    ) {
      toast.error(
        "Password should contain at least one uppercase, one lowercase, one number, and one special character"
      );
      error = true;
    }

    if (error) {
      return false;
    }
    return true;
  };

  const handleSumbit = (e) => {
    e.preventDefault();
    const validate = validateForm(user.email, user.password);
    if (validate) {
      toast.success("Successfully Signed In");
    }
  };
  return (
    <>
      <div className={style.container}>
        <div className={style.titleDesktop}>
          <img src={musicIcon} alt="musicIcon" />
          <span>Musicart</span>
        </div>
        <div className={style.titleMobile}>
          <Header />
        </div>
        <span>Welcome</span>
        <div className={style.form}>
          <h1>Sign in</h1>
          <div>
            <span>Enter your email or mobile number</span>
            <input
              type="text"
              value={user.email}
              onChange={(e) => {
                setUser({ ...user, email: e.target.value });
              }}
            />
          </div>
          <div>
            <span>Password</span>
            <input
              type="text"
              value={user.password}
              onChange={(e) => {
                setUser({ ...user, password: e.target.value });
              }}
            />
          </div>
          <button onClick={handleSumbit}>Continue</button>
          <span>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </span>
        </div>
        <div className={style.newToMusic}>
          <div></div>
          <span>New to Musicart?</span>
          <div></div>
        </div>
        <button className={style.button}>Create your Musicart account</button>
      </div>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
};

export default Login;

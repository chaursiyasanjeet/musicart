import style from "./Signup.module.css";
import musicIcon from "../../assets/musicIcon.svg";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
const Signup = () => {
  const [user, setUser] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
  });

  const validateForm = (name, mobile, email, password) => {
    let error;
    if (!/^[a-zA-Z]+(?: [a-zA-Z]+)*$/.test(name) || name === "") {
      toast.error("Inavalid Name");
      error = true;
    }
    if (!/^(?!0)[0-9]{10}$/.test(mobile) || mobile === "") {
      toast.error("Enter Valid mobile number");
      error = true;
    }
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
    const validate = validateForm(
      user.name,
      user.mobile,
      user.email,
      user.password
    );
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
          <h1>Create Account</h1>
          <div>
            <span>Your name</span>
            <input
              type="text"
              value={user.name}
              onChange={(e) => {
                setUser({ ...user, name: e.target.value });
              }}
            />
          </div>
          <div>
            <span>Mobile number</span>
            <input
              type="text"
              value={user.mobile}
              onChange={(e) => {
                setUser({ ...user, mobile: e.target.value });
              }}
            />
          </div>
          <div>
            <span>Email id</span>
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
          <span>
            By enrolling your mobile phone number, you consent to receive
            automated security notifications via text message from Musicart.
            Message and data rates may apply.
          </span>
          <button onClick={handleSumbit}>Continue</button>
          <span>
            By continuing, you agree to Musicart privacy notice and conditions
            of use.
          </span>
        </div>
        <aside className={style.bottomPart}>
          <span>Already have an account?</span>
          <a href="/signin">Sign In</a>
        </aside>
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

export default Signup;

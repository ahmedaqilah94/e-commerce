import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { Button } from "../ui/button";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { saveToDB } from "@/data";
import ModalMessage from "../card/ModalMessage";

function SignUpSide() {
  const { t } = useTranslation();
  const { setLoggedUser } = useOutletContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    phoneOrEmail: "",
    password: "",
    isLogin: true,
  });
  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const inputVal = formData.phoneOrEmail.trim();

    const isEmail = inputVal.includes("@");

    const newUser = {
      userName: formData.name,
      password: formData.password,
      firstName: "",
      lastName: "",
      address: "",
      isLogin: true,
      email: isEmail ? inputVal : "",
      phone: !isEmail ? inputVal : "",
    };

    const isEmailOrPhoneUsed = users.some(
      (user) => user.email === inputVal || user.phone === inputVal,
    );

    const isNameUsed = users.some(
      (user) => user.userName === formData.userName,
    );
    if (isEmailOrPhoneUsed) {
      setModalData({
        isOpen: true,
        message: t("This email or phone number is already registered!"),
      });
      return;
    }

    if (isNameUsed) {
      setModalData({
        isOpen: true,
        message: t("This name is already taken!"),
      });
      return;
    }

    saveToDB("users", [...users, newUser]);
    setLoggedUser(
      JSON.parse(localStorage.getItem("users"))?.find((user) => user.isLogin),
    );
    navigate("/");

    setModalData({
      isOpen: true,
      message: t("You Have Logged In"),
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col">
      <h3 className="text-[36px] tracking-[5%] leading-[30px] mb-[24px]">
        {t("Cresate an account")}
      </h3>
      <p>{t("Enter your details below")}</p>
      <input
        onChange={onChangeHandler}
        type="text"
        name="name"
        required
        placeholder={t("Name")}
        className="mt-[48px] border-b py-[8px]"
      />
      <input
        onChange={onChangeHandler}
        required
        type="text"
        name="phoneOrEmail"
        pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}|[0-9]{11})$"
        placeholder={t("Email or Phone Number")}
        className="my-[40px] border-b py-[8px]"
      />
      <input
        onChange={onChangeHandler}
        required
        type="password"
        name="password"
        placeholder={t("Password")}
        className="border-b py-[8px]"
      />
      <Button type="submit" className="mt-[40px]">
        {t("Create Acount")}
      </Button>
      <Button variant="secondary" className="flex gap-[16px] mt-[16px]">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_27313_2873)">
            <path
              d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z"
              fill="#4285F4"
            />
            <path
              d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3276 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008V24.0008Z"
              fill="#34A853"
            />
            <path
              d="M5.50253 14.3003C4.99987 12.8099 4.99987 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003V14.3003Z"
              fill="#FBBC04"
            />
            <path
              d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966V4.74966Z"
              fill="#EA4335"
            />
          </g>
          <defs>
            <clipPath id="clip0_27313_2873">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
        {t("Sign up with Google")}
      </Button>
      <p className="self-center text-[#000000]/70 mt-[32px]">
        {t("Already have account?")} <Link to="/login">{t("log in")}</Link>
      </p>
      <ModalMessage
        isOpen={modalData.isOpen}
        message={modalData.message}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />
    </form>
  );
}

export default SignUpSide;

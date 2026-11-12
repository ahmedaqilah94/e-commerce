import { useTranslation } from "react-i18next";
import { Button } from "../ui/button";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { useState } from "react";
import { saveToDB } from "@/data";
import ModalMessage from "../card/ModalMessage";

function LogInSide() {
  const { t } = useTranslation();
  const { setLoggedUser } = useOutletContext();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    phoneOrEmail: "",
    password: "",
  });
  const inputVal = formData.phoneOrEmail.trim();

  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some(
      (user) =>
        (user.email === inputVal || user.phone === inputVal) &&
        user.password === formData.password,
    );
    if (userExists === false) {
      setModalData({
        isOpen: true,
        message: t("Please inter the correct data"),
      });
      return;
    }

    const newData = users.find((user) =>
      userExists ? { ...user, isLogin: true } : user,
    );
    saveToDB("users", newData);
    setLoggedUser(
      JSON.parse(localStorage.getItem("users"))?.find((user) => user.isLogin),
    );
    navigate("/");

    setModalData({
      isOpen: true,
      message: t("you are Logged In"),
    });
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex flex-col">
      <h3 className="text-[36px] tracking-[5%] leading-[30px] mb-[24px]">
        {t("Log in to Exclusive")}
      </h3>
      <p>{t("Enter your details below")}</p>
      <input
        onChange={onChangeHandler}
        type="text"
        required
        placeholder={t("Email or Phone Number")}
        name="phoneOrEmail"
        pattern="^([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}|[0-9]{11})$"
        className="my-[40px] border-b py-[8px]"
      />
      <input
        onChange={onChangeHandler}
        type="password"
        name="password"
        required
        placeholder={t("Password")}
        className="border-b py-[8px]"
      />
      <div className="flex justify-between mt-[40px] items-center gap-[15px]">
        <Button type="submit">{"Log In"}</Button>
        <Link className="text-primary">{t("Forget Password?")}</Link>
      </div>
      <ModalMessage
        isOpen={modalData.isOpen}
        message={modalData.message}
        onClose={() => setModalData({ ...modalData, isOpen: false })}
      />
    </form>
  );
}

export default LogInSide;

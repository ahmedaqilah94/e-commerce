import { useState } from "react";
import { Button } from "../ui/button";
import { useOutletContext } from "react-router-dom";
import { saveToDB } from "@/data";
import ModalMessage from "../card/ModalMessage";
import { useTranslation } from "react-i18next";

function EditProfileForm() {
  const { t } = useTranslation();
  const { loggedUser, setLoggedUser } = useOutletContext();
  const [modalData, setModalData] = useState({
    isOpen: false,
    message: "",
  });
  const [formData, setFormData] = useState({
    firstName: loggedUser.firstName,
    lastName: loggedUser.lastName,
    address: loggedUser.address,
    email: loggedUser.email,
    currentPassword: "",
    newPassword: "",
    confirmNewPassword: "",
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

    let password;
    if (
      formData.currentPassword === loggedUser.password &&
      formData.newPassword &&
      formData.confirmNewPassword === formData.newPassword
    ) {
      password = formData.confirmNewPassword;
    } else if (
      formData.newPassword &&
      formData.confirmNewPassword !== formData.newPassword
    ) {
      setModalData({
        isOpen: true,
        message: t("Error in confirming new password  ⚠️"),
      });
      return;
    } else {
      password = loggedUser.password;
    }

    const newData = users.map((user) =>
      user.userName === loggedUser.userName
        ? {
            ...user,
            firstName: formData.firstName,
            lastName: formData.lastName,
            address: formData.address,
            email: formData.email,
            password: password,
          }
        : user,
    );
    if (
      formData.firstName !== loggedUser.firstName ||
      formData.lastName !== loggedUser.lastName ||
      formData.email !== loggedUser.email ||
      formData.address !== loggedUser.address ||
      password !== loggedUser.password
    ) {
      saveToDB("users", newData);
      setLoggedUser(
        JSON.parse(localStorage.getItem("users"))?.find((user) => user.isLogin),
      );
      setModalData({
        isOpen: true,
        message: t("Data updated succesfully ✅"),
      });
    }
  };
  const onCancelHandler = () => {
    setFormData({
      firstName: loggedUser.firstName,
      lastName: loggedUser.lastName,
      address: loggedUser.address,
      email: loggedUser.email,
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    });
  };
  return (
    <section className="py-[40px] px-[80px] w-[100%] md:w-[870px] md:h-[630px] shadow-[0_1px_13px_rgba(0,0,0,0.05)]">
      <form onSubmit={onSubmitHandler} className="flex flex-col">
        <h2 className="text-primary text-[20px] font-medium">
          Edit Your Profile
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px] mt-[16px]">
          <div className="flex flex-col">
            <label htmlFor="FName">First Name</label>
            <input
              onChange={onChangeHandler}
              value={formData.firstName}
              type="text"
              name="firstName"
              id="FName"
              className="bg-[#F5F5F5] ps-[16px] py-[13px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="LName">Last Name</label>
            <input
              onChange={onChangeHandler}
              value={formData.lastName}
              type="text"
              name="lastName"
              id="LName"
              className="bg-[#F5F5F5] ps-[16px] py-[13px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="Email">Email</label>
            <input
              onChange={onChangeHandler}
              value={formData.email}
              type="text"
              name="email"
              id="Email"
              className="bg-[#F5F5F5] ps-[16px] py-[13px]"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="address">{t("Address")}</label>
            <input
              onChange={onChangeHandler}
              value={formData.address}
              type="text"
              name="address"
              id="address"
              className="bg-[#F5F5F5] ps-[16px] py-[13px]"
            />
          </div>
          <div className="md:col-span-2 flex flex-col">
            <label htmlFor="currentPassword">{t("Password Changes")}</label>
            <input
              onChange={onChangeHandler}
              type="text"
              name="currentPassword"
              id="currentPassword"
              placeholder="Current Passwod"
              className="bg-[#F5F5F5] ps-[16px] py-[13px] mt-[8px]"
            />
            <input
              onChange={onChangeHandler}
              type="text"
              name="newPassword"
              placeholder="New Passwod"
              className="bg-[#F5F5F5] ps-[16px] py-[13px] my-[16px]"
            />
            <input
              onChange={onChangeHandler}
              type="text"
              name="confirmNewPassword"
              placeholder="Confirm New Passwod"
              className="bg-[#F5F5F5] ps-[16px] py-[13px]"
            />
          </div>
        </div>
        <div className="self-end mt-[24px]">
          <Button
            onClick={onCancelHandler}
            className="bg-background text-foreground cursor-pointer"
          >
            {t("Cancel")}
          </Button>
          <Button onClick={onSubmitHandler} className="cursor-pointer">
            {t("Save Cahanges")}
          </Button>
        </div>
        <ModalMessage
          isOpen={modalData.isOpen}
          message={modalData.message}
          onClose={() => setModalData({ ...modalData, isOpen: false })}
        />
      </form>
    </section>
  );
}

export default EditProfileForm;

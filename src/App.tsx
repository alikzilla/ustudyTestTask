import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Header from "./components/header/Header";
import UserList from "./components/userList/UserList";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import { addUser, IAddress, IUser } from "./index";

const App = () => {
  const dispatch = useDispatch();
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [suite, setSuite] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const nameHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const streetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const suiteHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuite(event.target.value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const addUserHandler = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    if (
      name.trim() !== "" &&
      street.trim() !== "" &&
      suite.trim() !== "" &&
      email.trim() !== "" &&
      phone.trim() !== ""
    ) {
      const newAddress: IAddress = {
        street: street,
        suite: suite,
      };

      const newUser: IUser = {
        id: Date.now(),
        image: null,
        name: name,
        address: newAddress,
        email: email,
        phone: phone,
      };

      console.log("Name:", name);
      console.log("Address Street:", street);
      console.log("Address Suite:", suite);
      console.log("Email:", email);
      console.log("Phone:", phone);

      dispatch(addUser(newUser));
      setIsPopupVisible(false);

      setName("");
      setStreet("");
      setSuite("");
      setEmail("");
      setPhone("");
    } else {
      alert("Fill all inputs");
    }
  };

  return (
    <div>
      <Header onClick={addUserHandler} />
      <UserList />
      <Footer />
      <Popup
        isVisible={isPopupVisible}
        onClick={closePopup}
        onChangeName={nameHandler}
        onChangeStreet={streetHandler}
        onChangeSuite={suiteHandler}
        onChangeEmail={emailHandler}
        onChangePhone={phoneHandler}
      />
    </div>
  );
};

export default App;

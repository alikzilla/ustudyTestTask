import React, { useState } from "react";
import Header from "./components/header/Header";
import UserList from "./components/userList/UserList";
import Footer from "./components/footer/Footer";
import Popup from "./components/popup/Popup";
import { useDispatch } from "react-redux";

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

  const addressStreetHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStreet(event.target.value);
  };

  const addressSuiteHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSuite(event.target.value);
  };

  const emailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const phoneHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.target.value);
  };

  const addUser = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    console.log("Name:", name);
    console.log("Address Street:", street);
    console.log("Address Suite:", suite);
    console.log("Email:", email);
    console.log("Phone:", phone);
    setIsPopupVisible(false);
  };

  return (
    <div>
      <Header onClick={addUser} />
      <UserList />
      <Footer />
      <Popup
        isVisible={isPopupVisible}
        onClick={closePopup}
        onChangeName={nameHandler}
        onChangeAddressStreet={addressStreetHandler}
        onChangeAddressSuite={addressSuiteHandler}
        onChangeEmail={emailHandler}
        onChangePhone={phoneHandler}
      />
    </div>
  );
};

export default App;

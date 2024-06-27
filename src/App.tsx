import { useState } from 'react';
import Header from './components/header/Header';
import UserList from './components/userList/UserList';
import Footer from './components/footer/Footer';
import Popup from './components/popup/Popup';

const App = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  const addUser = () => {
    setIsPopupVisible(true);
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <div>
      <Header onClick={addUser} />
      <UserList />
      <Footer />
      <Popup isVisible={isPopupVisible} onClick={closePopup} />
    </div>
  );
}

export default App;
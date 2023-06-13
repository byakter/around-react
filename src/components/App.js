import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import { useEffect, useState } from "react";
import { api } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ConfirmDelete from "./ConfirmDelete";

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [deleteCard, setDeleteCard] = useState(null);
  const [currentUser, setCurrrentUser] = useState("");
  const [cards, setCards] = useState([]);

  const handleEditAvatarClick = () => {
    setEditAvatarPopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setAddPlacePopupOpen(true);
  };

  const handleEditProfileClick = () => {
    setEditProfilePopupOpen(true);
  };

  const handleConfirmDeleteClick = () => {
    setConfirmDeletePopupOpen(true);
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const closeAllPopups = () => {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setConfirmDeletePopupOpen(false);
    setSelectedCard(null);
  };

  const handelClose = (e) => {
    if (e && e.target !== e.currentTarget) {
      return;
    }

    closeAllPopups();
  };

  const handelEscape = (e) => {
    if (e.key === "Escape") {
      handelClose();
    }
  };

  useEffect(() => {
    api
      .getInitialCards()
      .then((items) => {
        setCards(items);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });

    api
      .getUserInfo()
      .then((userInfo) => {
        setCurrrentUser(userInfo);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }, []);

  const handleUpdateUser = (user) => {
    api.setUserInfo(user).then((updateUser) => {
      setCurrrentUser(updateUser);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = (avatarData) => {
    api
      .changeProfileImage(avatarData)
      .then((updatedUser) => {
        setCurrrentUser(updatedUser);
        closeAllPopups();
      })
      .catch((error) => {
        console.log("Error updating avatar:", error);
      });
  };
  function handleCardLike(card) {
    const isLiked = card.likes.some((user) => user._id === currentUser._id);
    if (!isLiked)
      api.addLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      });
    else
      api.deleteLike(card._id).then((newCard) => {
        setCards((state) =>
          state.map((currentCard) =>
            currentCard._id === card._id ? newCard : currentCard
          )
        );
      });
  }

  function handleConfirm(card) {
    setDeleteCard(card);
    handleConfirmDeleteClick();
  }

  function handleCardDelete() {
    api.deleteCard(deleteCard._id).then(() => {
      setCards((state) =>
        state.filter((currentCard) => currentCard._id !== deleteCard._id)
      );
      setDeleteCard(null);
    });
  }

  function handleAddPlaceSubmit(newCard) {
    api.createCard(newCard).then((savedCard) => {
      setCards([savedCard, ...cards]);
      closeAllPopups();
    });
  }

  return (
    <CurrentUserContext.Provider value={{ user: currentUser }}>
      <div className="App" onKeyDown={handelEscape}>
        <div className="page">
          <div className="page__content">
            <Header />
            <Main
              onEditProfileClick={handleEditProfileClick}
              onAddPlaceClick={handleAddPlaceClick}
              onEditAvatarClick={handleEditAvatarClick}
              onConfirmDeleteClick={handleConfirmDeleteClick}
              onCardClick={handleCardClick}
              onClose={handelClose}
              setCurrrentUser={setCurrrentUser}
              onCardDelete={handleConfirm}
              onCardLike={handleCardLike}
              cards={cards}
            />
            <ImagePopup
              selectedCard={selectedCard}
              onClose={handelClose}
              handelEscape={handelEscape}
            />

            <EditAvatarPopup
              isOpen={isEditAvatarPopupOpen}
              onClose={handelClose}
              onUpdateAvatar={handleUpdateAvatar}
            />
            <AddPlacePopup
              isOpen={isAddPlacePopupOpen}
              onClose={handelClose}
              onAddPlaceSubmit={handleAddPlaceSubmit}
            />

            <EditProfilePopup
              isOpen={isEditProfilePopupOpen}
              onClose={handelClose}
              onUpdateUser={handleUpdateUser}
            />

            <ConfirmDelete
              isOpen={isConfirmDeletePopupOpen}
              onClose={handelClose}
              onConfirm={handleCardDelete}
            />

            <Footer />
            <ImagePopup />
          </div>
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;

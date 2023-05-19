import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { api } from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isConfirmDeletePopupOpen, setConfirmDeletePopupOpen] = useState(false);
  // const [isPreviewCardProfilePopupOpen, setPreviewCardProfilePopupOpen] =
  //   useState(false);
  
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

  // const handlePreviewCardProfileClick = () => {
  //   setPreviewCardProfilePopupOpen(true);
  // };

  

  const handelClose = (e) => {
    if (e && e.target !== e.currentTarget){
      return 
    }
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
  };

  const handelEscape = (e) => {
    if (e.key === 'Escape') {
      handelClose();
    }
  };
 
  return (
    <div className='App' onKeyDown={handelEscape}>
      <div className='page'>
        <div className='page__content'>
          <Header />
          <Main
            onEditProfileClick={handleEditProfileClick}
            onAddPlaceClick={handleAddPlaceClick}
            onEditAvatarClick={handleEditAvatarClick}
            onConfirmDeleteClick={handleConfirmDeleteClick}
            onClose={handelClose}
          />
          <PopupWithForm
            name='avatar'
            title='Change profile picture'
            openPopup={isEditAvatarPopupOpen ? 'popup_opened' : ''}
            onClose={handelClose}
          >
            <input
              className='popup__input popup__input_type_link'
              type='url'
              id='image-link-avatar'
              placeholder='Image-link'
              name='avatar'
              required
            />
            <span id='image-link-avatar-error' className='popup__span'></span>
          </PopupWithForm>

          <PopupWithForm
            name='place-name'
            title='New place'
            openPopup={isAddPlacePopupOpen ? 'popup_opened' : ''}
            onClose={handelClose}
          >
            <input
              className='popup__input popup__input_type_title'
              id='place-name'
              type='text'
              placeholder='Title'
              name='place-name'
              required
              minLength='1'
              maxLength='30'
            />
            <span id='place-name-error' className='popup__span'></span>
            <input
              className='popup__input popup__input_type_link'
              type='url'
              id='image-link'
              placeholder='Image-link'
              name='link'
              required
            />
            <span id='image-link-error' className='popup__span'></span>
          </PopupWithForm>
          <PopupWithForm
            name='profile'
            title='Edit Profile'
            openPopup={isEditProfilePopupOpen ? 'popup_opened' : ''}
            onClose={handelClose}
            handelSubmit={api.setUserInfo.bind(api)}
          >
            <input
              id='name-input'
              className='popup__input popup__input_type_name'
              type='text'
              placeholder='Name'
              name='name'
              required
              minLength='2'
              maxLength='40'
            />
            <span id='name-input-error' className='popup__span'></span>

            <input
              id='about-input'
              className='popup__input popup__input_type_profession'
              type='text'
              placeholder='About me'
              name='about'
              required
              minLength='2'
              maxLength='200'
            />
            <span id='about-input-error' className='popup__span'></span>
          </PopupWithForm>
          <PopupWithForm
            name='delete-card'
            title='Are you sure?'
            openPopup={isConfirmDeletePopupOpen ? 'popup_opened' : ''}
            onClose={handelClose}
          >
            <button
              type='submit'
              className='popup__submit-button popup__submit-button_delete-card'
            >
              Yes
            </button>
          </PopupWithForm>

          <Footer />
          <ImagePopup />
        </div>
      </div>
    </div>
  );
}

export default App;

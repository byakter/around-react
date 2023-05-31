import React, { useEffect, useState } from "react";
import edit from "../images/edit-button.svg";
import plus from "../images/Plus-vector.svg";
import { api } from "../utils/api";
import Card from "./Card";

const Main = ({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onConfirmDeleteClick,
  onCardClick,
  updatedCards,
  setUpdateCards,
  updatedAvatar,
  setUpdateAvatar,
}) => {
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getUserInfo()
      .then((userInfo) => {
        setUserName(userInfo.name);
        setUserDescription(userInfo.about);
        setUserAvatar(userInfo.avatar);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });

    api
      .getInitialCards()
      .then((items) => {
        setCards(items);
      })
      .catch((error) => {
        console.log("Error fetching user data:", error);
      });
  }, []);

  // useEffect( () =>{
  //   if(updatedCards === true){
  //     api
  //     .getInitialCards()
  //     .then((items) => {
  //       setCards(items);
  //       setUpdateCards(false)
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching user data:", error);
  //     });
  //   }
  // }, [])

  // useEffect( () =>{
  //   if(updatedAvatar === true){
  //     api
  //     .getUserInfo()
  //     .then((userInfo) => {
  //       setUserName(userInfo.name);
  //       setUserDescription(userInfo.about);
  //       setUserAvatar(userInfo.avatar);
  //       setUpdateAvatar(false)
  //     })
  //     .catch((error) => {
  //       console.log("Error fetching user data:", error);
  //     });
  //   }
  // }, [])

  return (
    <main>
      <section className="profile">
        <div className="profile__container">
          <div
            className="profile__image"
            style={{ backgroundImage: `url(${userAvatar})` }}
            // alt="userphoto"
          ></div>
          <button
            className="profile__image-button"
            type="button"
            onClick={onEditAvatarClick}
          >
            <img
              src={edit}
              alt="edit-button"
              className="profile__image-button-vector"
            />
          </button>
        </div>
        <div className="profile__description">
          <div className="profile__caption">
            <h1 className="profile__title">{userName}</h1>
            <button
              className="profile__edit-button"
              type="button"
              onClick={onEditProfileClick}
            >
              <img
                src={edit}
                alt="edit-button"
                className="profile__edit-button-vector"
              />
            </button>
          </div>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
        <button
          className="profile__button"
          type="button"
          onClick={onAddPlaceClick}
        >
          <img src={plus} alt="plus-emoji" className="profile__vector" />
        </button>
      </section>
      {/* <div className='popup popup_type_profile'>
//         <div className='popup__content'>
//           <button type='button' className='popup__close'></button>
//           <h3 className='popup__title'>Edit Profile</h3>
//           <form
            className='popup__form popup__form_type_profile'
            name='profile-form'
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
            <button
              type='submit'
              className='popup__submit-button'
              id='save-button'
            >
              Save
            </button>
          </form>
        </div>
      </div>
      <div className='popup popup_type_card'>
        <div className='popup__content'>
          <button type='button' className='popup__close'></button>
          <h3 className='popup__title'>New place</h3>
          <form className='popup__form popup__form_type_card' name='card-form'>
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
            <button
              type='submit'
              className='popup__submit-button'
              id='save-button-card'
            >
              Create
            </button>
          </form>
        </div>
      </div>

      <div className='popup popup_type_delete-card'>
        <div className='popup__content'>
          <button type='button' className='popup__close'></button>
          <h3 className='popup__title'>Are you sure?</h3>
          <form
            className='popup__form popup__form_type_delete-card'
            name='card-form'
          >
            <button
              type='submit'
              className='popup__submit-button popup__submit-button_delete-card'
            >
              Yes
            </button>
          </form>
        </div>
      </div>

      <div className='popup popup_type_avatar'>
        <div className='popup__content'>
          <button type='button' className='popup__close'></button>
          <h3 className='popup__title'>Change profile picture</h3>
          <form
            className='popup__form popup__form_type_avatar'
            name='profile-form'
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
            <button
              type='submit'
              className='popup__submit-button'
              id='save-button-avatar'
            >
              Save
            </button>
          </form>
        </div>
      </div>

      <div className='popup popup_type_preview'>
        <div className='popup__content popup__content_preview'>
          <button
            type='button'
            className='popup__close popup__close_type_btn'
          ></button>
          <img className='popup__preview-image' src='#' alt='' />
          <p className='popup__preview-title'></p>
        </div>
      </div> */}
      {
        //     "likes": [],
        //     "_id": "645fafb42b4be80642da2add",
        //     "name": "asd",
        //     "link": "https://preview.redd.it/8d1xfnblp9ka1.jpg?width=640&crop=smart&auto=webp&v=enabled&s=51848a53056386c12bc01e5309744efc5ea267a6",
        //     "owner": {
        //         "name": "Alon Sachs5",
        //         "about": "FullStack developer7",
        //         "avatar": "https://claimflights.com/wp-content/uploads/Krabi-Thailand-1024x640.jpg",
        //         "_id": "c88564917fa3d45d6ff82624",
        //         "cohort": "cohort-3-en"
        //     },
        //     "createdAt": "2023-05-13T15:41:40.454Z"
      }
      <section className="cards">
        {cards.map((card) => {
          return (
            <Card
              card={card}
              key={card._id}
              onCardClick={onCardClick}
              onConfirmDeleteClick={onConfirmDeleteClick}
            />
          );
        })}
      </section>
    </main>
  );
};

export default Main;

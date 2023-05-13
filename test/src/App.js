function App() {
  return (
    <div className='App'>
      <div className='page'>
        <div className='page__content'>
          <header className='header'>
            <img
              className='header__logo'
              src={require('./images/Vector.svg')}
              alt='around-the-us-logo'
            />
          </header>
          <main>
            <section className='profile'>
              <div className='profile__container'>
                <img
                  className='profile__image'
                  src={require('./images/jacques-cousteau.jpg')}
                  alt='userphoto'
                />
                <button className='profile__image-button' type='button'>
                  <img
                    src={require('./images/edit-button.svg')}
                    alt='edit-button'
                    className='profile__image-button-vector'
                  />
                </button>
              </div>
              <div className='profile__description'>
                <div className='profile__caption'>
                  <h1 className='profile__title'>Jacques cousteau</h1>
                  <button className='profile__edit-button' type='button'>
                    <img
                      src={require('./images/edit-button.svg')}
                      alt='edit-button'
                      className='profile__edit-button-vector'
                    />
                  </button>
                </div>
                <p className='profile__subtitle'>Explorer</p>
              </div>
              <button className='profile__button' type='button'>
                <img
                  src={require('./images/Plus-vector.svg')}
                  alt='plus-emoji'
                  className='profile__vector'
                />
              </button>
            </section>
            <div className='popup popup_type_profile'>
              <div className='popup__content'>
                <button type='button' className='popup__close'></button>
                <h3 className='popup__title'>Edit Profile</h3>
                <form
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
                <form
                  className='popup__form popup__form_type_card'
                  name='card-form'
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
                  <span
                    id='image-link-avatar-error'
                    className='popup__span'
                  ></span>
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
            </div>

            <section className='cards'></section>
          </main>
          <footer className='footer'>
            <p className='footer__title'>© 2022 Around The U.S.</p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;

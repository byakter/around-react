const ImagePopup = (props) => {
    return (
      
      <div className={`popup popup_type_preview ${props.openPopup}`}>
      <div className='popup__content popup__content_preview'>
        <button
          type='button'
          className='popup__close popup__close_type_btn'
        ></button>
        <img className='popup__preview-image' src={props.imageName} alt='' />
        <p className='popup__preview-title'></p>
      </div>
    </div>
    );
  };
  
  export default ImagePopup;
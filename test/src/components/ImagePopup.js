// const ImagePopup = (props) => {
//     return (
      
//       <div className={`popup popup_type_preview ${props.openPopup}`}>
//       <div className='popup__content popup__content_preview'>
//         <button
//           type='button'
//           className='popup__close popup__close_type_btn'
//         ></button>
//         <img className='popup__preview-image' src={props.imageName} alt='' />
//         <p className='popup__preview-title'></p>
//       </div>
//     </div>
//     );
//   };
  
//   export default ImagePopup;


  const ImagePopup = ({selectedCard, onClose, handelEscape}) => {
    
    return (

        <div className={`popup popup_type_preview ${selectedCard  ? 'popup_opened' : ''}`} onClick={onClose } onKeyDown={handelEscape}>
        <div className="popup__content popup__content_preview" >
          <button type="button" className="popup__close popup__close_type_btn" onClick={onClose}></button>
          {selectedCard && (
            <>
              <img className="popup__preview-image" src={selectedCard.link} alt="selected tile"/>
              <p className="popup__preview-title">{selectedCard.name}</p>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default ImagePopup;
  
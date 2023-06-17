import PopupWithForm from "./PopupWithForm";
import React, { useRef, useEffect } from "react";

const EditAvatarPopup = ({ isOpen, onClose, onUpdateAvatar }) => {
  const avatarRef = useRef();
  const handelSubmit = (e) => {
    e.preventDefault();

    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
  };

  useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  return (
    <PopupWithForm
      name="avatar"
      title="Change profile picture"
      openPopup={isOpen ? "popup_opened" : ""}
      onClose={onClose}
      handelSubmit={handelSubmit}
      buttonText="Save"
    >
      <input
        ref={avatarRef}
        className="popup__input popup__input_type_link"
        type="url"
        id="image-link-avatar"
        placeholder="Image-link"
        name="avatar"
        required
      />
      <span id="image-link-avatar-error" className="popup__span"></span>
    </PopupWithForm>
  );
};

export default EditAvatarPopup;

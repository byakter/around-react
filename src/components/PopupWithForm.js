const PopupWithForm = (props) => {
  const handelSubmit = (e) => {
    e.preventDefault();
    const data = getInputValues(e.target);
    props
      .handelSubmit(data)
      .then((res) => {
        console.log(res);
        props.onClose();
        if (props.postSubmit) {
          props.postSubmit();
        }
      })
      .catch((err) => {
        alert("an unknown error has occurred, please try again later");
        console.log("error", err);
      })
      .finally(() => {
        props.onClose();
      });
  };
  const getInputValues = (form) => {
    const inputValues = {};
    const inputs = [...form.querySelectorAll(".popup__input")];

    inputs.forEach((input) => {
      inputValues[input.name] = input.value;
    });

    return inputValues;
  };

  return (
    <div
      className={`popup popup_type_${props.name} ${props.openPopup}`}
      onClick={props.onClose}
    >
      <div className="popup__content">
        <button
          type="button"
          className="popup__close"
          onClick={props.onClose}
        ></button>
        <h3 className="popup__title"> {props.title}</h3>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name="profile-form"
          onSubmit={handelSubmit}
        >
          {props.children}

          <button
            type="submit"
            className="popup__submit-button popup__submit-button_delete-card"
          >
            {props.buttonText}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;

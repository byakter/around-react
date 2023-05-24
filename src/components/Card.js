const Card = ({card, onCardClick, onConfirmDeleteClick}) => {
    const confirm = (event) => {
      event.stopPropagation();
      onConfirmDeleteClick();
    }
    return (
        <div className="cards__card" onClick={()=>onCardClick(card)}>
        <div className="cards__image"  style={{ backgroundImage: `url(${card.link})` }}></div>
        <button type="button" className="cards__button-trash" onClick={confirm}></button>
        <div className="cards__footer">
          <h2 className="cards__title">{card.name}</h2>
          <div className="cards__container-likes">
            <button className="cards__button-like" type="button"></button>
            <p className="cards__number-of-likes">{card.likes.length}</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Card;
import CatCard from "./CatCard/CatCard";

const CatsCards = (props) => {
    return (
        <div className="cats-box">
            {props.state.cats_card_page.cards.map(card =>
                <CatCard key={card.id}
                         pretitle={card.pretitle}
                         title={card.title}
                         subtitle={card.subtitle}
                         portion={card.portion}
                         weight={card.weight}
                         desc={card.desc}
                         count={card.count}
                         error_message={card.error_message} />
            )}
        </div>
    )
}

export default CatsCards
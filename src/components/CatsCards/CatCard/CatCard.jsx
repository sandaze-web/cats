import {useState} from "react";
import cat from '../../../images/cats/cat.png'

const CatCard = ({pretitle, title, subtitle, portion, weight, desc, count, error_message}) => {
    let [isSelected, setIsSelected] = useState(false)
    let [isSelectOut, setIsSelectOut] = useState(false)

    let select_card = () => {
        if(isSelected && count){
            setIsSelected(false)
            setIsSelectOut(false)
        }else{
            setIsSelected(true)
        }
    }

    let change_hover_select = () => {
        if(isSelected && count) setIsSelectOut(true)
    }

    return (
        <div className={`cats-itemBx ${isSelected && 'selected'} ${isSelectOut && 'selected-hover'} ${!count && 'disabled'}`}
             onMouseLeave={change_hover_select}>
            <div className="cats__item" onClick={select_card}>
                <div className="cats__item-top">
                    <p className="cats__item-pretitle">{pretitle}</p>
                    <h2 className="cats__item-title">{title}</h2>
                    <h3 className="cats__item-subtitle">{subtitle}</h3>
                    <ul className="cats-list">
                        <li className="cats-list__item"><span>{portion[0]}</span> порций</li>
                        <li className="cats-list__item">{portion[1]}</li>
                        <li className="cats-list__item">{portion[2]}</li>
                    </ul>
                </div>
                <div className="cats-imgBx">
                    <img src={cat} alt="" />
                </div>
                <div className="cats__item-weight"><span>{weight}</span><span>кг</span></div>
                <div className="cats__item-help-border top"></div>
                <div className="cats__item-help-border bottom"></div>
            </div>
            {count
                ? isSelected
                    ? <p className="cats__desc">{desc}</p>
                    : <p className="cats__desc">Чего сидишь? Порадуй котэ, <span onClick={select_card}>купи.</span></p>
                : <p className="cats__desc">{error_message}</p>
            }

        </div>
    )
}

export default CatCard
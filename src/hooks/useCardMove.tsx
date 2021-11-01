import {useState} from "react";

export const useCardMove = (defaultHeight: string = '70px', newHeight: string = '120px', expandText = 'Release to move card here') => {
    const [isExpanded, setIsExpanded] = useState(false);
    const dragStyle = {
        height: isExpanded ? newHeight : defaultHeight
    };
    const [expandCard, collapseCard] = [() => setIsExpanded(true), () => setIsExpanded(false)];

    const getDragMessage = () => !isExpanded ? <></> : <div className="card-list-item__expand">
        <span className="card-list-item__expand-text">{expandText}</span>
    </div>

    return {expandCard, collapseCard, getDragMessage, dragStyle}
}
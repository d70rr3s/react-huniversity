import { useState } from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { range } from '../../utils';
import { Item } from './Item';
import './Carousel.css';

export const Carousel = ({items: _items, active: _active}) => {
    const items = [..._items, ..._items, ..._items];
    const [active, setActive] = useState(_active);
    const [direction, setDirection] = useState('');

    const renderItems = () => {
        let carousel = [];
        for (let i of range(active - 2, active + 3)) {
            const index = i < 0 ? items.length + i : i % items.length;
            const level = active - i;
            const {key, content} = items[index];
            const onClick = level === 0 ? flip : none;
            carousel = [
                ...carousel,
                <CSSTransition
                    key={key}
                    timeout={500}
                    classNames={`carousel__item_transition ${direction}`}>
                    <Item key={key} id={key} level={level} content={content} onClick={onClick} />
                </CSSTransition>
            ];
        }
        return carousel;
    }

    const none = () => {}
    
    const flip = () => {}
    
    const moveLeft = () => {
        const next = active - 1;
        setActive(next < 0 ? items.length - 1 : next);
        setDirection('left');
    }
    
    const moveRight = () => {
        setActive((active + 1) % items.length);
        setDirection('right');
    }
    
    return(
        <div id="carousel" className="carousel noselect">
            <div className="carousel__arrow carousel__arrow--left" onClick={moveLeft}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </div>
            <TransitionGroup className="carousel__items-list">
                {renderItems()}
            </TransitionGroup>
            <div className="carousel__arrow carousel__arrow--right" onClick={moveRight}>
                <FontAwesomeIcon icon={faChevronRight} />
            </div>
        </div>
    )
}

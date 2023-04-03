import React from 'react'
import { Carousel } from 'react-bootstrap';
import Card from '../Card/Card'

export default function CardCarousel({ cards }) {
    const CARDS_PER_SLIDE = 14;
    const slides = [];
    for (let i = 0; i < cards.length; i += CARDS_PER_SLIDE) {
        const slideCards = cards.slice(i, i + CARDS_PER_SLIDE);
        const slide = (
            <Carousel.Item key={i}>
                <div className="d-flex">
                    {slideCards.map((card) => (
                        <Card key={card.id} card={card} onDeck={false} />
                    ))}
                </div>
            </Carousel.Item>
        );
        slides.push(slide);
    }
    return <Carousel>{slides}</Carousel>;
}
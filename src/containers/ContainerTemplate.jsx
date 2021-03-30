import React from "react";
import Cards from "../components/cards/Cards";

export const ContainerTemplate = props => {
    const cards = new Array(3)
        .fill('')
        .map((_, index) => index)
    return (
        <>
        <div>
            {cards.map(id => {
                return (
                        <Cards
                            key={id}
                            title={props.title}
                        />
                )
            })}
        </div>
                </>
)
}
import React, { Component } from "react";
import Cards from "./cards/Cards";
import holder from "../constants/CardsHolder";

class ContainerTemplate extends Component {

    render() {
        return (
            <>
                <div>
                    {
                        holder.map((el, i) => {
                            return (
                                <Cards
                                    key={i}
                                    el={el}
                                />
                            )
                        })
                    }

                </div>
            </>
        )
    }
}

export default ContainerTemplate
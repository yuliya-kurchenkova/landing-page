import React, {Component} from "react";
import email from '../../assets/images/email.png'
import holder from "../../constants/Cards1";
import navList from "../../constants/Navigation";
import classes from "../navTemplate/NavTemplate.module.scss";

class Cards extends Component {
    render() {
        return (
            <div>
                {
                    holder.map((link, index) => {
                        return (
                            <h2
                                key={index}
                            >
                                {link.title}
                            </h2>
                        )
                    })
                }

            </div>
        )
    }
}
export default Cards


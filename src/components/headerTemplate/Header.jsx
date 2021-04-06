import React, { Component } from 'react'
import NavTemplate from "../navTemplate/NavTemplate";
import Button from "../button/Button";
import classes from './Header.module.scss'
import logo from '../logo.png'

export default class Header extends Component {
    render() {
        return (
            <div className={classes.header}>
                <NavTemplate/>
                <img
                    className={'header__logo'}
                    src={logo}
                    alt='Logo'
                />
                <Button
                    buttonText={'Buy Now'}
                    className={'app__button app__button_primary'}
                />
            </div>
        )
    }

}
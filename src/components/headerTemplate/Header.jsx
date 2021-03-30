import React, { Component } from 'react'
import NavTemplate from "../navTemplate/NavTemplate";
import Button from "../Button/Button";
import classes from './Header.module.scss'
import logo from '../logo.png'

export default class Header extends Component {
    render() {
        return (
            <div className={classes.header}>
                <NavTemplate/>
                <img
                    src={logo}
                    alt='Logo'
                    height='30'
                />
                <Button
                    buttonText={'Buy Now'}
                />
            </div>
        )
    }

}
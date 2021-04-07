import React, {Component} from 'react'
import logo from "../logo.png";
import Button from "../button/Button";
import NavTemplate from "../navTemplate/NavTemplate";
import facebook from '../../assets/images/Icon/Social/facebook.png'
import icon from '../../assets/images/Icon/Social/icon.png'
import inst from '../../assets/images/Icon/Social/inst.png'
import twitter from '../../assets/images/Icon/Social/twitter.png'
import youtube from '../../assets/images/Icon/Social/youtube.png'
import classes from './FooterTemplate.module.scss'

export default class FooterTemplate extends Component {
    render () {
        return (
            <div className={classes.footerTemplate} id="contact">
                <div className={'app__wrapper'}>
                    <div className={classes['footerTemplate__header']}>
                      <p className='app__text app__text_mb'>©2021 Yourcompany</p>
                        <a href="logo">
                            <img
                                src={logo}
                                alt='Logo'
                                className={'header__logo'}
                            />
                        </a>
                        <Button
                            buttonText={'Purchase now'}
                            className={'app__button app__button_primary'}
                        />
                    </div>
                    <hr className={classes['footerTemplate__hr']}/>
                    <div className={classes['footerTemplate__footer']}>
                        <NavTemplate/>
                        <div>
                            <ul  className={classes['footerTemplate__list']}>
                                <li className={classes['items']}>
                                    <img
                                    src={icon}
                                    alt=''
                                />
                                </li>
                                <li className={classes['items']}>
                                    <img

                                    src={twitter}
                                    alt=''
                                />
                                </li>
                                <li className={classes['items']}>
                                    <img
                                    src={facebook}
                                    alt=''
                                />
                                </li>
                                <li className={classes['items']}>
                                    <img
                                    src={youtube}
                                    alt=''
                                />
                                </li>
                                <li className={classes['items']}>
                                    <img
                                    src={inst}
                                    alt=''
                                />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
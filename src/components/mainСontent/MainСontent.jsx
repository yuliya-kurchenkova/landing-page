import React, {Component} from "react";
import classes from './MainContent.module.scss'
import Header from "../headerTemplate/Header";
import Button from "../button/Button";



export default class MainContent extends Component {
    render() {
        return (
            <div className={classes.mainContent} >
                <div className={classes['mainContent__background']}>
                    <Header/>
                    <div className={classes['mainContent__box']}>
                        <h1 className={classes['mainContent__title']}>Introduce Your Product Quickly & Effectively</h1>
                        <p className={classes['mainContent__text']}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                            mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                        </p>
                        <div className={classes['mainContent__button']}>
                            <Button
                                buttonText={'Purchase UI Kit'}
                                className={'app-button app-button_primary'}
                            />
                            <Button
                                buttonText={'Learn More'}
                                className={'app-button app-button_success'}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
import React, {Component} from 'react'
import classes from './PriceTemplate.module.scss'
import Button from "../button/Button";


export default class PriceTemplate extends Component {
    render() {
        return (
            <div className={classes.priceTemplate}>
                <div className={classes['priceTemplate__box']}>
                    <h2 className='app-title'>A Price To Suit Everyone</h2>
                    <div className='app-text'>
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
                        Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                    </div>
                    <p className={classes['priceTemplate__price']}>$40</p>
                    <p className={classes['priceTemplate__desc-price']}>UI Desing Kit</p>
                    <p className={classes['priceTemplate__desc']}>See,One price.Simple</p>
                    <Button
                        buttonText={'Purchase Now'}
                        className={'app-button app-button_primary'}
                    />
                </div>
            </div>
        )
    }


}

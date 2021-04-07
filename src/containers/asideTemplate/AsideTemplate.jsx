import React, {Component} from 'react'
import classes from './AsideTemplate.module.scss'
import undraw from '../../assets/images/undraw.png'
import Icon from '../../assets/images/Icon.png'

export default class AsideTemplate extends Component {
    render() {
        return (
               <div className={classes.asideTemplate} id="about">
                   <div className={classes['asideTemplate__box']}>
                       <h2 className='app__title'>Light, Fast & Powerful</h2>
                       <p className='app__text app__text_mb'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                           mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                       </p>
                   <div className={classes.asideTemplate__inner}>
                       <div className={classes['asideTemplate__inner-box']}>
                           <img
                              src={Icon}
                              alt=''
                              className={classes['asideTemplate__inner-img']}
                           />
                       <h3 className='app__subtitle'>Title Goes Here</h3>
                       <p className='app__small-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                       </div>
                       <div className={classes['asideTemplate__inner-box']}>
                           <img
                               src={Icon}
                               alt=''
                               className={classes['asideTemplate__inner-img']}
                           />
                           <h3 className='app__subtitle'>Title Goes Here</h3>
                           <p className='app__small-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                       </div>
                       </div>
                   </div>
                       <div className={classes['asideTemplate__img']}>
                           <img
                               src={undraw}
                               alt=""
                           />
                       </div>
               </div>
        )
    }

}
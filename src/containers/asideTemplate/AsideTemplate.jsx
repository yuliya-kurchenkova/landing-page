import React, {Component} from 'react'
import classes from './AsideTemplate.module.scss'
import undraw from '../../assets/images/undraw.png'
import Icon from '../../assets/images/Icon.png'

export default class AsideTemplate extends Component {
    render() {
        return (
            <div>
               <div className={classes.asideTemplate}>
                   <div className={classes['asideTemplate__box']}>
                       <h2 className={classes['asideTemplate__title']}>Light, Fast & Powerful</h2>
                       <p className='app-text app-text_mb'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
                           mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
                       </p>
                   <div className={classes.asideTemplate_inner}>
                       <div className={classes['asideTemplate_inner__box']}>
                           <img
                              src={Icon}
                           />
                       <h3 className='app-subtitle'>Title Goes Here</h3>
                       <p className='app-small-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
                       </div>
                       <div className={classes['asideTemplate_inner__box']}>
                           <img
                               src={Icon}
                           />
                           <h3 className='app-subtitle'>Title Goes Here</h3>
                           <p className='app-small-text'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. </p>
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
            </div>
        )
    }

}
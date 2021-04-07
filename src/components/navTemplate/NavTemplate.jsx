import React, {Component} from 'react'
import classes from './NavTemplate.module.scss'
import navList from '../../constants/Navigation'


class NavTemplate extends Component {
    render() {
        return (
            <nav className={classes.navTemplate}>
                <ul className={classes['navTemplate__list']}>
                    {
                        navList.map((link, index) => {
                            return (
                                <li
                                    key={index}
                                    className={classes['navTemplate__item']}
                                >
                                    <a
                                        href={`#${link.route}`}
                                        className={classes['navTemplate__link']}
                                    >
                                        {link.text}
                                    </a>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        )
    }
}
export default NavTemplate



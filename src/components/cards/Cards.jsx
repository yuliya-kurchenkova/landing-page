import React from "react";
import classes from './Cards.module.scss'


function Cards({el}) {
    return (
        <div className={classes.cards}>
            <img
                src={el.src}
                alt=""
                className={classes['cards__img']}
            />
            <div className={classes['cards__box']}>
                <h2 className='app__title app__title_mb'>{el.title}</h2>
                <p className='app__text app__text_mb'>{el.text}</p>
                {
                    el.button ?
                        <button className={'app__button app__button_primary app__button_center'}>{el.button}</button>
                        : null
                }
            </div>
        </div>
    )
}
export default Cards






// class Cards extends Component {
//     render() {
//         return (
//             <div>
//                 {/*/!*{*!/*/}
//                 {/*    // holder.map((link, index) => {*/}
//                         return (
//                             <h2>
//
//                             </h2>
//                         )
//                     })
//                 }
//             </div>
//         )
//     }
// }
// export default Cards


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
                <h2 className='app-title'>{el.title}</h2>
                <p className='app-text'>{el.text}</p>
                {
                    el.button ?
                        <button className={'app-button app-button_primary'}>{el.button}</button>
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


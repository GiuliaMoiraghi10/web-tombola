import Numeri from "./Numeri"
import DisplayEstrazione from "./DisplayEstrazione"
import style from './Main.module.css'

export default function Main() {
    return (
        <section>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.col_9}>
                        <Numeri />
                    </div>
                    <div className={style.col_3}>
                        <DisplayEstrazione />
                    </div>
                </div>
            </div>
        </section>
    )
}
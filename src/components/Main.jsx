import Numeri from "./Numeri"
import DisplayEstrazione from "./DisplayEstrazione"
import style from './Main.module.css'

export default function Main() {
    return (
        <section>
            <div className={style.container}>
                <div className={style.row}>
                    <div className={style.col_9}>
                        {/* genero 90 numeri */}
                        {Array.from({ length: 90 }, (_, index) => (
                            <div key={index}>
                                <Numeri />
                            </div>
                        ))}
                    </div>
                    <div className={style.col_3}>
                        <DisplayEstrazione />
                    </div>
                </div>
            </div>
        </section>
    )
}
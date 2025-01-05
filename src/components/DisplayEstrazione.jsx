import style from './DisplayEstrazione.module.css'

export default function DisplayEstrazione() {
    return (
        <section className={style.display}>
            <h2>Ultimo numero estratto</h2>
            <div className={style.estratto}>80</div>
            <button>Estrai</button>
            <button>Termina gioco</button>
        </section>
    )
}
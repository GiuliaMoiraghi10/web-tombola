import Numeri from "./Numeri"
import DisplayEstrazione from "./DisplayEstrazione"

export default function Main() {
    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-9">
                        <Numeri />
                    </div>
                    <div className="col-3">
                        <DisplayEstrazione />
                    </div>
                </div>
            </div>
        </section>
    )
}
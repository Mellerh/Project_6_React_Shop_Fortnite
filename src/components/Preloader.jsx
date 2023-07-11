import './heplers/Preloader.css'


function Preloader() {


    return(
        <div className="preloader">
            <div className="newtons-cradle">
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
                <div className="newtons-cradle__dot"></div>
            </div>
        </div>
    )
}

export default Preloader;
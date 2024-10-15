import './loader.css';

const Loader = () => {
    return (
        <div id="loader" className="loader">
            <div className="loader__items">
                <div className="loader__item loader__item--1"></div>
                <div className="loader__item loader__item--2"></div>
                <div className="loader__item loader__item--3"></div>
            </div>
        </div>
    )
}

export default Loader
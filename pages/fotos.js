import votImage from './assets/vot.jpg';

function Fotos() {
    return (<div>
            <h1>Fotos</h1>
            <a href="/">Home</a>
            <header>
                <img src={votImage} alt='vot' id='votImage' />
            </header>
        </div>)
}

export default Fotos 
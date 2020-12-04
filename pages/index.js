import Image from 'next/image'

function Home() {
    return (
        <div>
            <h1>HOT-CHICKEN</h1>
            <p>Entre no grupo Hot-Chicken do ZapZap: <a href="https://chat.whatsapp.com/EXvql86tiWW5Ja9B6NAtig"><code>Hot-Chicken</code></a></p>
            <p>Youtube: <a href="https://www.youtube.com/channel/UCCgVZ4daJreAXlZnit_cnxA"><code>Clique aqui</code></a></p>
            <img src="/public/me.png"></img>
            <image
             src="public/hot.jpg"
            ></image>

            <style jsx>{`
                h1 {
                    color: red;
                    margin: auto;
                    width: 20%;
                    padding: 10px;
                }
                p {
                    color: black;
                }
                div {
                    background: grey; 
                }
                `}</style>
            <style global jsx>{`
                body {
                    background: grey    ;
                }
            `}</style>
        </div>
    )  
}

export default Home 
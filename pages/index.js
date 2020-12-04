import { useState } from 'react'
import Image from 'next/image'

function Home() {
    return (
        <div>
            <h1>HOT-CHICKEN</h1>
            <p>Entre no grupo Hot-Chicken do ZapZap: <a href="https://chat.whatsapp.com/EXvql86tiWW5Ja9B6NAtig"><code>Hot-Chicken</code></a></p>
            <style jsx>{`
                h1 {
                    color: red;
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
                    background: pink;
                }
            `}</style>
        </div>
    )  
}

function HomePage() {
    return (
        <div>
            <p>Youtube: <a href="https://www.youtube.com/channel/UCCgVZ4daJreAXlZnit_cnxA"><code>Clique aqui</code></a></p>

            <style jsx>{`
                p {
                    color: black;
                }
            `}</style>
        </div>
    )
}

export default Home 
export default HomePage
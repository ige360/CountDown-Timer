import React from "react"

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer>
           <h2>Designed by Ige Joseph</h2>
           <p>CopyRight @{year}</p>
        </footer>
    )
}

export default Footer;
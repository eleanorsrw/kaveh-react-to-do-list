export default function navBar() {
    return (
        <nav className="navbar">
            <div className="container">
                <div className="logo">
                    <a href="index.html" className="logo-container">
                    <img src="src/assets/logo.gif" alt="kaveh logo" />
                    <h1>Work!</h1>
                    </a>
                </div>
                
                <div className="main-menu">
                    <ul>
                    <li>
                        <a href="#">You can do it!</a>
                    </li>
                    <li>
                        <a href="#">Go! Go!</a>
                    </li>
                    <li>
                        <a href="src/assets/alhaitham.jpg" target='_blank'>Alhaitham?!</a>
                    </li>
                    </ul>
                </div>
            </div>
        </nav>
    )

}
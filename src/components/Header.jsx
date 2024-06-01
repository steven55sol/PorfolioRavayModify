import "../styles/app.css";

export default function Header() {
  return (
    <header>
        <div className="container container-header">
        <h1 className="nav_logo">RevayDev</h1>
        <nav className="nav_menu">
            <ul className="link_menu">
               <a href="/">Inicio</a>
               <a href="/">Sobre mi</a>
               <a href="/">Proyectos</a>
               <a href="/">contacto</a>
            </ul>
            <div className="menu_toggle">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </nav>       
        </div>
    </header>
  )
}

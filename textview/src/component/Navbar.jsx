import { Link } from "react-router-dom";

export default function Navbar({title,mode,togglefunction}) {
    return (
  <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode}`}>
  <a className="navbar-brand mx-3" href="/">{title}</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to={"/"}>Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/about"}>About</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/cources"}>Cources</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to={"/create-cource"}>Create Cources</Link>
      </li>
    </ul>
  </div>
  <div className={`form-check mx-3 form-switch text-${mode==='light'?'dark':'light'}`}>
    <input className="form-check-input" onClick={togglefunction} type="checkbox" id="flexSwitchCheckDefault" />
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
</div>
</nav>
    );
}
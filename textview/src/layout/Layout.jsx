import Alert from "../component/Alert";
import Navbar from "../component/Navbar";
import {Outlet} from 'react-router-dom';

export default function Layout ({title,mode,togglefunction,alert}) {
    return (
        <section>
            <header>
                <Navbar mode={mode} title={title} togglefunction={togglefunction}/>
                <Alert alert={alert} />
            </header>
            <Outlet />
        </section>
    );
}
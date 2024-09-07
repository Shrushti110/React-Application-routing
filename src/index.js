import ReactDOM from 'react-dom/client';
import "./index.css"

import Home from "./views/Home/home"
import About from "./views/About/about"
import Contact from "./views/Contact/contact"

const root = ReactDOM.createRoot(document.getElementById('root'));

const currentPath  = window.location.pathname;

if(currentPath=="/")
    {
    root.render(<Home/>)
}
else if(currentPath=="/about")
{
    root.render(<About/>)
}
else if(currentPath=="/contact")
{
    root.render(<Contact/>)
}
else
{
    root.render(<h1>404 Not Found</h1>)
}




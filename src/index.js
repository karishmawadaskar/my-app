import ReactDOM from 'react-dom/client';

import Home from "./view/home/home";
import About from "./view/about/about";
import Contact from "./view/contact/contact";

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentPath = window.location.pathname;
if(currentPath ==="/"){
  root.render(<Home/>);
}
else if(currentPath ==="/about"){
  root.render(<About/>);
}
else if(currentPath ==="/contact"){
  root.render(<Contact/>);
}
else{
  root.render(<h1>404 not found</h1>)
}
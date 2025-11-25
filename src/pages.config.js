import Home from './pages/Home';
import Historia from './pages/Historia';
import Conceitos from './pages/Conceitos';
import Comparativo from './pages/Comparativo';
import MiniJogo from './pages/MiniJogo';
import __Layout from './Layout.jsx';


export const PAGES = {
    "Home": Home,
    "Historia": Historia,
    "Conceitos": Conceitos,
    "Comparativo": Comparativo,
    "MiniJogo": MiniJogo,
}

export const pagesConfig = {
    mainPage: "Home",
    Pages: PAGES,
    Layout: __Layout,
};
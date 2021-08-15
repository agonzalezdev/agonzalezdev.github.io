import { CSharpIcon } from "./components/TopBar/styles";
import Home from "./pages/home";
import Stack from "./pages/stack";
import Resume from "./pages/resume";
import Contact from "./pages/contact";
import { ReactComponent as CSharpIconComponent } from "./svg/file_type_csharp.svg"
import { ReactComponent as TSIconComponent } from "./svg/file_type_typescript.svg"
import { ReactComponent as CSSIconComponent } from "./svg/file_type_css.svg"

const Routes = [
    {
        id: 0,
        path: "/",
        component: Home,
        name: 'index.html',
        icon: CSharpIconComponent
    },
    {
        id: 1,
        path: "/stack",
        component: Stack,
        name: 'stack.cs',
        icon: CSharpIconComponent
    },
    {
        id: 2,
        path: "/resume",
        component: Resume,
        name: 'resume.ts',
        icon: TSIconComponent
    },
    {
        id: 3,
        path: "/contact",
        component: Contact,
        name: 'contact.css',
        icon: CSSIconComponent
    }
];

export default Routes;
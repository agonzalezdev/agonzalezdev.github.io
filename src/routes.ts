import { CSharpIcon } from "./components/TopBar/styles";
import Home from "./pages/home";
import Stack from "./pages/stack";
import Resume from "./pages/resume";
import { ReactComponent as CSharpIconComponent } from "./svg/file_type_csharp.svg"
import { ReactComponent as TSIconComponent } from "./svg/file_type_typescript.svg"

const Routes = [
    {
        path: "/",
        component: Home,
        name: 'index.html',
        icon: CSharpIconComponent
    },
    {
        path: "/stack",
        component: Stack,
        name: 'stack.cs',
        icon: CSharpIconComponent
    },
    {
        path: "/resume",
        component: Resume,
        name: 'resume.ts',
        icon: TSIconComponent
    }
];

export default Routes;
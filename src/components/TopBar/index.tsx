import { TopBarWrapper, TopBarTab, TopBarTabTag, TopBarTabWrapper, TopBarTabContentWrapper } from "./styles"
import Breadcrumb from "../Breadcrumb/index"
import Routes from "../../routes"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LoadingFile from "../LoadingFile";
import { useState } from "react";


const TopBar = ({ children }) => {
    const [isLoading, setLoading] = useState(false);

    const setIsLoadingWithTime = (time: number) => {
        setLoading(true);
        const timer = setTimeout(() => { setLoading(false); }, time);
        return () => clearTimeout(timer);
    }

    return (
        <TopBarWrapper>
            <ScrollMenu>
                <TopBarTabWrapper>
                    {Routes.filter(e => e.path !== '/').map(route => (
                        <TopBarTab
                            to={route.path}
                            exact
                            activeClassName="active"
                            onClick={() => setIsLoadingWithTime(1000)}
                        >
                            <route.icon width={25} height={25} />
                            <TopBarTabTag>
                                {route.name}
                            </TopBarTabTag>
                        </TopBarTab>
                    ))}
                </TopBarTabWrapper>
            </ScrollMenu>
            <Breadcrumb />
            <LoadingFile show={isLoading} />
            <TopBarTabContentWrapper style={{ display: `${isLoading ? 'none' : 'flex'}` }}>
                {children}
            </TopBarTabContentWrapper>
        </TopBarWrapper>

    )
}

export default TopBar
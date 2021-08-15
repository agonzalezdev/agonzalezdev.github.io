import { TopBarWrapper, TopBarTab, TopBarTabTag, TopBarTabWrapper, TopBarTabContentWrapper } from "./styles"
import Breadcrumb from "../Breadcrumb/index"
import Routes from "../../routes"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LoadingFile from "../LoadingFile";
import { createRef, useEffect, useRef, useState } from "react";


const TopBar = ({ children }) => {
    const [isLoading, setLoading] = useState(false);
    const [tabRefs, setTabRefs] = useState([]);
    //@ts-ignore
    const executeScroll = (ref) => ref.current.scrollIntoView();

    const setIsLoadingWithTime = (time: number) => {
        setLoading(true);
        const timer = setTimeout(() => { setLoading(false); }, time);
        return () => clearTimeout(timer);
    }

    useEffect(() => {
        setTabRefs(tabRefs => (
            Array(Routes.length).fill({}).map((i) => tabRefs[i] || createRef())
        ));
    }, [Routes.length]);

    return (
        <TopBarWrapper>
            <ScrollMenu>
                <TopBarTabWrapper>
                    {Routes.filter(e => e.path !== '/').map((route, i) => (
                        <TopBarTab
                            to={route.path}
                            exact
                            activeClassName="active"
                            id={`top-tap-${route.id}`}
                            ref={tabRefs[i]}
                            onClick={() => {
                                setIsLoadingWithTime(500);
                                executeScroll(tabRefs[i])
                            }}
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
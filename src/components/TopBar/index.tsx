import { TopBarWrapper, TopBarTab, TopBarTabTag, CSharpIcon, TopBarTabWrapper } from "./styles"
import Breadcrumb from "../Breadcrumb/index"
import Routes from "../../routes"
import { ScrollMenu } from "react-horizontal-scrolling-menu";
import LoadingFile from "../LoadingFile";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setFalse, setTrue } from "../../redux/slide/loadingReducer";
import { useEffect, useState } from "react";


const TopBar = ({ children }) => {

    const [isLoading, setLoading] = useState(false);


    const setIsLoadingWithTime = (time: number) => {
        setLoading(true);
        const timer = setTimeout(() => {
            console.log('This will run after 1 second!')
            setLoading(false);
        }, 1000);
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
                            onClick={() => setIsLoadingWithTime(2000)}
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
            {children}
        </TopBarWrapper>

    )
}

export default TopBar
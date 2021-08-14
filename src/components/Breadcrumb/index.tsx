import React from "react"
import { AiFillHome } from "react-icons/ai"
import { useLocation } from "react-router-dom"
import { BreadcrumbTag, BreadcrumbWrapper, BreadcrumbIcon } from "./styles"
import Routes from "../../routes"




const Breadcrumb = () => {
    const location = useLocation();
    const route = Routes.filter(r => r.path == location.pathname)[0];

    return (

        <BreadcrumbWrapper>
            <BreadcrumbTag>{'src > '}<BreadcrumbIcon><route.icon /></BreadcrumbIcon>{route.name}</BreadcrumbTag>
        </BreadcrumbWrapper>

    )
}

export default Breadcrumb
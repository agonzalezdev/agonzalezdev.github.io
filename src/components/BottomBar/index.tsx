import React from "react"
import { AiFillHome } from "react-icons/ai"
import { FaCodeBranch } from "react-icons/fa"
import { BottomBarWrapper, BottomBarIcon, BottomBarIconTag } from "./styles"

const BottomBar = () => (

    <BottomBarWrapper>
        <div>
            <BottomBarIcon />
            <BottomBarIconTag>master</BottomBarIconTag>
        </div>
        <div>
            <BottomBarIconTag>Copyright © {new Date().getFullYear()} Alex Gonzalez</BottomBarIconTag>
        </div>
    </BottomBarWrapper>

)

export default BottomBar

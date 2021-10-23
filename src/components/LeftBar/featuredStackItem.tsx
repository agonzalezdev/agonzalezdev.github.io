import React from 'react'
import styled from 'styled-components'
import { GoSettings } from "react-icons/go"
import ReactTooltip from 'react-tooltip'
import { LeftBarButton } from "./styles"

const FeaturedStackItem = ({ children, tooltip = "" }) => (
    <LeftBarButton data-tip={tooltip} >
        {children}
        <ReactTooltip />
    </LeftBarButton>
);

export default FeaturedStackItem;
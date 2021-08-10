import { Grid } from "@material-ui/core";
import React from "react";
import styled, { css } from 'styled-components'
import ReactTooltip from 'react-tooltip'


const GridStackItem = styled(Grid)`
    &&&{
        flex-grow: 0;
        display: flex;
        max-width: 50%;
        flex-basis: 50%;
        flex-direction: column;
        align-items: stretch;
    }
`

const GridStackItemWrapper = styled.div`
&&&{
   font-size: 4.5em;
    margin: 15px;
    padding: 10px;
    opacity: 0.93;
    border: 1.7px solid rgb(223 31 31 / 64%);
    vertical-align: middle;
    text-align: center;
    border-radius: 5px;
    display: table;
    box-shadow: 4px 5px 4px 3px rgb(168 4 4 / 14%);
    overflow: hidden;
    transition: all 0.4s ease 0s;
    color: white;
    justify-content: space-around;
    display: flex;
}
`


const StackItem = ({ xs, md, tooltip = "", children }) => (
    <GridStackItem item xs={xs} md={md} data-tip={tooltip}>
        <GridStackItemWrapper>
            {children}
            <ReactTooltip />
        </GridStackItemWrapper>
    </GridStackItem>
);


export default StackItem;
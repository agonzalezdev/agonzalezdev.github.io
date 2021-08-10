import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { SectionContainer, SectionWrapper, SectionRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, } from "./styles"

const MainSectionWrapper = styled.div`
    color: #fff
`

const Section = ({ id, lightBg, topLine, headLine, description, alt, children, img = undefined, }) => {
    return (
        <>
            <SectionContainer id={id} lightBg={lightBg}>
                <SectionWrapper>
                    <SectionRow >
                        <Column1 fullWidth={img == undefined}>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={!lightBg}>{headLine}</Heading>
                                <Subtitle darkText={lightBg}>{description}</Subtitle>
                                <div style={{ color: "black" }}> {children} </div>
                                {/* <BtnWrap>
                            <Button></Button>
                        </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        {img != undefined ?
                            <Column2 >
                                <ImgWrap>
                                    <Img src={img} alt={alt} />
                                </ImgWrap>
                            </Column2>
                            : <></>
                        }
                    </SectionRow>
                </SectionWrapper>
            </SectionContainer>
        </>
    )
}

export default Section

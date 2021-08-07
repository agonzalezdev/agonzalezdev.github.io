import React from 'react'
import styled from 'styled-components'
import { Button } from '../button'
import { SectionContainer, SectionWrapper, SectionRow, Column1, TextWrapper, TopLine, Heading, Subtitle, Column2, ImgWrap, Img, } from "./styles"

const MainSectionWrapper = styled.div`
    color: #fff
`

const Section = ({ id, lightBg, imgStart, topLine, headLine, description, alt, children, img = "", }) => {
    return (
        <>
            <SectionContainer id={id} lightBg={lightBg}>
                <SectionWrapper>
                    <SectionRow imgStart={imgStart}>
                        <Column1>
                            <TextWrapper>
                                <TopLine>{topLine}</TopLine>
                                <Heading lightText={!lightBg}>{headLine}</Heading>
                                <Subtitle darkText={lightBg}>{description}</Subtitle>
                                <div> {children} </div>
                                {/* <BtnWrap>
                            <Button></Button>
                        </BtnWrap> */}
                            </TextWrapper>
                        </Column1>
                        <Column2>
                            <ImgWrap>
                                <Img src={img} alt={alt} />
                            </ImgWrap>
                        </Column2>
                    </SectionRow>
                </SectionWrapper>
            </SectionContainer>
        </>
    )
}

export default Section

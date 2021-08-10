import React, { useState } from 'react';
import Sidebar from '../component/sidebar/index'
import Navbar from '../component/navbar/index';
import MainBlock from '../component/main';
import Section from '../component/shared/section/index';
import StackData from "../component/sections/stack"
import CVData from "../component/sections/cv"
import Portfolio from "../component/portfolio/index"
import ReactFullpage from '@fullpage/react-fullpage';
import { Console } from 'console';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { increment, decrement, set } from "../redux/slide/slideReducer"
import DynamicBackground from '../component/dynamicBackground';


export default () => {
  const count = useSelector((state: RootState) => state.slide.value)
  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }
  const onSectionLeave = (origin, destination, direction) => {
    dispatch(set(destination.index + 1));
  };

  return (
    <>

      <Sidebar isOpen={isOpen} toggleOpen={toggleOpen} />
      <Navbar toggleOpen={toggleOpen} />

      <ReactFullpage
        scrollOverflow={true}
        onLeave={onSectionLeave}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section" >
                <MainBlock />
              </div>
              <div className="section">
                <div className="slide">
                  <DynamicBackground />
                  <Section {...StackData} ></Section>
                </div>
              </div>
              <div className="section">
                <Section {...CVData} >

                  {/* <Portfolio /> */}
                </Section>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                    </button>
              </div>
            </div>
          );
        }}
      />
    </>
  )
}
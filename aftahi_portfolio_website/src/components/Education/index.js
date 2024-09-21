import React from 'react'
import styled from "styled-components";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { education } from "../../data/constants";
import EducationCard from '../Cards/EducationCard';

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 0px 0px 60px 0px;
//     @media (max-width: 960px) {
//         padding: 0px;
//     }
// `;

// const Wrapper = styled.div`
//     position: relative;
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     flex-direction: column;
//     width: 100%;
//     max-width: 1350px;
//     padding: 40px 0px 0px 0px;
//     gap: 12px;
//     @media (max-width: 960px) {
//         flex-direction: column;
//     }
// `;

// const Title = styled.div`
// font-size: 42px;
// text-align: center;
// font-weight: 600;
// margin-top: 20px;
//   color: ${({ theme }) => theme.text_primary};
//   @media (max-width: 768px) {
//       margin-top: 12px;
//       font-size: 32px;
//   }
// `;

// const Desc = styled.div`
//     font-size: 18px;
//     text-align: center;
//     max-width: 600px;
//     color: ${({ theme }) => theme.text_secondary};
//     @media (max-width: 768px) {
//         margin-top: 12px;
//         font-size: 16px;
//     }
// `;

// const TimeLineSection = styled.div`
//     width: 100%;
//     max-width: 1000px;
//     margin-top: 10px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     gap: 12px;
//     @media (max-width: 660px) {
//         align-items: end;
//     }
// `;


const Container = styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
justify-content-center;
position: relative;
z-index: 1;
align-items: center;
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1100px;
  gap: 12px;
  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 90px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 1024px) {
    font-size: 16px;
    text-align: center;
    width: 95%;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    text-align: center;
    width: 95%;
    ${'' /* max-width: 200px; */}
  }
`;

const Education = () => {
  return (
    // <Container id="education">
    //     <Wrapper>
    //         <Title>Education</Title>
    //         <Desc>My education has been a journey of self-discovery and growth. My educational details are as follows.</Desc>
    //         <TimeLineSection>
    //             <Timeline>
    //                 {education.map((education,index)=>(
    //                     <TimelineItem>   
    //                       <TimelineContent sx={{py: '12px', px: 2}}>
    //                         <EducationCard education={education}/>
    //                       </TimelineContent>
    //                       <TimelineSeparator>
    //                           <TimelineDot variant='outlined' color='secondary'/>
    //                           {index !== education.length - 1 && (
    //                             <TimelineConnector style={{background: "#854CE6"}}/>
    //                           )}
                              
    //                       </TimelineSeparator>
    //                     </TimelineItem>
    //                 ))}
    //             </Timeline>
    //         </TimeLineSection>
    //     </Wrapper>
    // </Container>


    <Container id="education">
      <Wrapper>
        <Title>Education</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My education has been a journey of self-discovery and growth. My
          educational details are as follows.
        </Desc>

        <VerticalTimeline>
          {education.map((education, index) => (
            <EducationCard key={`education-${index}`} education={education} />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  )
}

export default Education

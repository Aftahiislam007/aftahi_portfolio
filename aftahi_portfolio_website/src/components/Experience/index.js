import React from 'react'
import styled from "styled-components";
import { experiences } from "../../data/constants";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import ExperienceCard from '../Cards/ExperienceCard';

import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

// const Container = styled.div`
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     position: relative;
//     z-index: 1;
//     align-items: center;
//     padding: 40px 0px 80px 0px;
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
//     padding: 80px 0;
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
// `;




const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
  padding: 40px 0px 150px 0px;
  @media screen and (max-width: 1024px) {
      padding: 0px;
  }
  @media screen and (max-width: 600px) {
      padding: 40px 0px 160px 0px;
  }
`;
const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
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
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;


const Experience = () => {
  return (
    // <Container id="experience">
    //     <Wrapper>
    //         <Title>Work Experience</Title>
    //         <Desc>What I Served In Company</Desc>
    //         <TimeLineSection>
    //             <Timeline>
    //                 {experiences.map((experience,index)=>(
    //                     <TimelineItem>
    //                         <TimelineSeparator>
    //                             <TimelineDot variant='outlined' color='secondary'/>
    //                             {index !== experiences.length - 1 && <TimelineConnector/>}
                                
    //                          </TimelineSeparator>
    //                         <TimelineContent sx={{py: '12px', px: 2}}>
    //                             <ExperienceCard experience={experience}/>
    //                         </TimelineContent>
    //                     </TimelineItem>
    //                 ))}
    //             </Timeline>
    //         </TimeLineSection>
    //     </Wrapper>
    // </Container>

    <Container id="experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc
          style={{
            marginBottom: "40px",
          }}
        >
          My work experience as a software engineer and working on different
          companies and projects.
        </Desc>

        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </Wrapper>
    </Container>
  )
}

export default Experience

import React from 'react'
import styled from "styled-components";
import { Tilt } from "react-tilt";


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
  @media (max-width: 960px) {
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

const Top = styled.div`
  width: 100%;
  display: flex;
  max-width: 100%;
  gap: 12px;
`;

const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600px;
  color: ${({ theme }) => theme.text_primary + 99};

  @media only screen and (max-width: 768px) {
    font-size: 14px;
  }
`;

const Grade = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary + 99};
  @media only screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media screen and (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media screen and (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: rgba(248, 253, 252, 0.8);
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <Container id="about">
      <Wrapper>
        <Title>About</Title>
        <Desc>
          Get to know about me.
        </Desc>
        {/* <Top>
          <Body>
            <Name>Personal Information</Name>
            <Degree>{education.degree}</Degree>
            <Date>{education.date}</Date>
          </Body>
        </Top>
        <Grade>
          <b>• Father's Name - Md. Anwar Hossen</b>
          
        </Grade> */}
        

        <SkillsContainer>
          <Tilt>
            <Skill>
              <SkillTitle>Personal Information</SkillTitle>
              <SkillList>
                <SkillItem><b>Father's Name -</b>  Md. Anwar Hossen</SkillItem><br />
                <SkillItem><b>Mother's Name -</b>  Rashida Parvin</SkillItem><br />
                <SkillItem><b>Date of Birth -</b>  05 December, 1998</SkillItem><br />
                <SkillItem><b>Religion -</b> Islam</SkillItem><br />
                <SkillItem><b>Nationality -</b>  Bangladeshi</SkillItem><br />
                <SkillItem><b>Present Address -</b>  411, Shaheenbagh, Tejgaon, Dhaka-1215</SkillItem>
              </SkillList>
              
            </Skill>
          </Tilt> 
        </SkillsContainer>
      </Wrapper>
    </Container>
  )
}

export default About

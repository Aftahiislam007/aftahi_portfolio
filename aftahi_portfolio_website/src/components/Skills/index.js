import React from 'react'
import styled from "styled-components";
import { skills } from "../../data/constants";
import { Tilt } from "react-tilt";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
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

export const Title = styled.div`
font-size: 48px;
text-align: center;
font-weight: 600;
margin-top: 90px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

export const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media screen and (max-width: 1024px) {
      font-size: 16px;
      text-align: center;
      width: 95%;
  }
  @media screen and (max-width: 900px) {
      font-size: 16px;
      text-align: center;
      width: 95%;
  }
  @media screen and (max-width: 760px) {
      font-size: 16px;
      text-align: center;
      width: 95%;
  }
`;

const SkillsContainer = styled.div`
  width: 100%;
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
  @media screen and (max-width: 1024px) {
    ${'' /* max-width: 425px; */}
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1rem;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    ${'' /* max-width: 375px; */}
    width: 90%;
    margin: 0 auto;
    padding: 2rem 1rem;
    justify-content: center;
  }
  @media screen and (max-width: 760px) {
    ${'' /* max-width: 375px; */}
    width: 85%;
    margin: 0 auto;
    padding: 2rem 1rem;
    justify-content: center;
  }
`;

const SkillTitle = styled.h2`
  font-size: 28px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  margin-bottom: 20px;
  text-align: center;
`;

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`;

const SkillItem = styled.div`
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 80};
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
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

const SkillImage = styled.img`
  width: 28px;
  height: 24px;
`;

const Skills = () => {
  return (
    <Container id="skills">
      <Wrapper>
        <Title>Skills</Title>
        <Desc>Here are some of my skills on which I have been working on for the past 2 years.</Desc>
        <SkillsContainer>
          {skills.map((item)=>(
            <Tilt>
              <Skill>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillList>
                  {
                    item.skills.map((skill)=>(
                      <SkillItem>
                        <SkillImage src={skill.image}/>{skill.name}
                      </SkillItem>
                    ))
                  }
                </SkillList>
              </Skill>
            </Tilt>            
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container> 
    );
}

export default Skills

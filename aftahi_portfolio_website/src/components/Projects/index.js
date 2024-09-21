import React, { useState } from "react";
import styled from "styled-components";
import ProjectCard from "../Cards/ProjectCard";
import { projects } from "../../data/constants";

import _default from '../../themes/default';

export const Container = styled.div`
    background: linear-gradient(343.07deg, rgba(132, 59, 206, 0.06) 5.71%, rgba(132, 59, 206, 0) 64.83%);
    ${'' /* margin-top: 40px; */}
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    clip-path: polygon(0 0, 100% 0, 100% 100%,100% 98%, 0 100%);
    ${'' /* @media screen and (max-width: 1024px) {
    margin-top: 100px;
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    margin-top: 80px;
    flex-direction: column;
  } */}
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 1350px;
  padding: 10px 0px 100px 0;
  gap: 12px;
  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    flex-direction: column;
    padding: 10px 0px 200px 0;
  }
  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    flex-direction: column;
    padding: 10px 0px 170px 0;
  }
`;

export const Title = styled.div`
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

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media screen and (max-width: 1024px) {
        margin-top: 12px;
        font-size: 16px;
        max-width: 500px;
    }
    @media screen and (max-width: 600px) {
        margin-top: 12px;
        font-size: 16px;
        max-width: 400px;
    }
`;

export const ToggleGroup = styled.div`
    display: flex;
    border: 1.5px solid ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
    font-size: 16px;
    border-radius: 12px;
    font-weight: 500;
    margin: 22px 0px;
    @media screen and (max-width: 1024px) {
      font-size: 12px;
      margin: 22px 19px;

  }
  @media screen and (max-width: 900px) {
    font-size: 12px;
    margin: 18px 15px;
   
  }
  @media screen and (max-width: 760px) {
    font-size: 10px;
    margin: 12px 10px;
  }
`

export const ToggleButton = styled.div`
    padding: 8px 18px;
    border-radius: 6px;
    cursor: pointer;
    ${({ active, theme }) =>
        active && `
    background: ${theme.primary + 20};
    `
    }
    &:hover {
        background: ${({ theme }) => theme.primary + 8};
    }
    @media (max-width: 768px) {
        padding: 6px 8px;
        border-radius: 4px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`


export const CardContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 28px;
    flex-wrap: wrap;
    // display: grid;
    // grid-template-columns: repeat(3, 1fr);
    // grid-gap: 32px;
    // grid-auto-rows: minmax(100px, auto);
    // @media (max-width: 960px) {
    //     grid-template-columns: repeat(2, 1fr);
    // }
    // @media (max-width: 640px) {
    //     grid-template-columns: repeat(1, 1fr);
    // }
`;

const Projects = ({ openModal, setOpenModal }) => {
  
  const [toggle, setToggle] = useState("all");
  
  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my
          projects.
        </Desc>

        <ToggleGroup>
          {toggle === "all" ? (
            <ToggleButton active value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          ) : (
            <ToggleButton value="all" onClick={() => setToggle("all")}>
              All
            </ToggleButton>
          )}

          <Divider />
          {toggle === "web app" ? (
            <ToggleButton active onClick={() => setToggle("web app")}>
              WEB APP
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("web app")}>
              WEB APP
            </ToggleButton>
          )}

          <Divider />
          {toggle === "database" ? (
            <ToggleButton active onClick={() => setToggle("database")}>
              DATABASE
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("database")}>
              DATABASE
            </ToggleButton>
          )}

          <Divider />
          {toggle === "console application" ? (
            <ToggleButton active onClick={() => setToggle("console application")}>
              CONSOLE APPLICATION
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("console application")}>
              CONSOLE APPLICATION
            </ToggleButton>
          )}

          <Divider />
          {toggle === "data science" ? (
            <ToggleButton active onClick={() => setToggle("data science")}>
              DATA SCIENCE
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("data science")}>
              DATA SCIENCE
            </ToggleButton>
          )}
          <Divider />
          {toggle === "software testing" ? (
            <ToggleButton active onClick={() => setToggle("software testing")}>
              SOFTWARE TESTING
            </ToggleButton>
          ) : (
            <ToggleButton onClick={() => setToggle("software testing")}>
              SOFTWARE TESTING
            </ToggleButton>
          )}
        </ToggleGroup>

        <CardContainer>
          {toggle === "all" &&
            projects.map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
          {projects
            .filter((item) => item.category == toggle)
            .map((project) => (
              <ProjectCard
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ))}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;

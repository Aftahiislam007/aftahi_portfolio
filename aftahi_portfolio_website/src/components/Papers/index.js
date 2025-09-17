import React from 'react'
import styled from "styled-components";
import { papers } from "../../data/constants";
import { useState } from "react";

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
  @media screen and (max-width: 768px) {
      font-size: 16px;
  }
`;

const Button = styled.a`
    -webkit-appearance: button;
  -moz-appearance: button;
  appearance: button;
  cursor: pointer;
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -moz-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  background: -webkit-linear-gradient(
    225deg,
    hsla(271, 100%, 50%, 1) 0%,
    hsla(294, 100%, 50%, 1) 100%
  );
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 20px;
  font-weight: 600;
  &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    } 
    @media screen and (max-width: 1024px) {
    font-size: 15px;
    }
    @media screen and (max-width: 900px) {
        font-size: 15px;
    }
    @media screen and (max-width: 760px) {
        font-size: 15px;
    }
`;




const Card = styled.div`
    width: 40%;
    height: 420px;
    margin-top: 3rem;
    background-color: ${({ theme }) => theme.card};
    ${'' /* cursor: pointer; */}
    border-radius: 10px;
    box-shadow: 0 0 12px 4px rgba(0,0,0,0.4);
    overflow: hidden;
    padding: 26px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: column;
    gap: 14px;
    transition: all 0.5s ease-in-out;
    &:hover {
        transform: translateY(-10px);
        box-shadow: 0 0 50px 4px rgba(0,0,0,0.6);
        filter: brightness(1.1);
    }
    @media screen and (max-width: 1024px) {
    ${'' /* max-width: 425px; */}
    width: 90%;
    margin-top: 30px;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    ${'' /* max-width: 375px; */}
    width: 90%;
    margin-top: 30px;
    justify-content: center;
  }
  @media screen and (max-width: 760px) {
    ${'' /* max-width: 375px; */}
    width: 90%;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
  }
    ${'' /* &:hover ${Button} {
        display: block;
    } */}
`;

const Image = styled.img`
    width: 100%;
    height: 220px;
    background-color: ${({ theme }) => theme.white};
    border-radius: 1.5rem;
    overflow: hidden;
    box-shadow: 0 0 16px 2px rgba(0,0,0,0.3);
`;

const Tags = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 4px;
`;

const Details = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0px;
    padding: 0px 2px;
`;

const CertificatesTitle  = styled.div`
    font-size: 20px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_secondary};
    overflow: hidden;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const Date = styled.div`
    font-size: 12px;
    margin-left: 2px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 80};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`;

const Certificates_Description = styled.div`
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary + 99};
    overflow: hidden;
    margin-top: 8px;
    display: -webkit-box;
    max-width: 100%;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
`;

const Members = styled.div`
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

const Tag = styled.span`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.primary};
    background-color: ${({ theme }) => theme.primary + 15};
    padding: 2px 8px;
    border-radius: 10px;
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;

  @media screen and (max-width: 1024px) {
    ${'' /* max-width: 425px; */}
    width: 100%;
    margin-top: 30px;
    justify-content: center;
  }
  @media screen and (max-width: 900px) {
    ${'' /* max-width: 375px; */}
    width: 100%;
    margin-top: 30px;
    justify-content: center;
  }
  @media screen and (max-width: 760px) {
    ${'' /* max-width: 375px; */}
    width: 100%;
    margin-top: 30px;
    flex-wrap: wrap;
    justify-content: center;
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
      width: auto;

    }
    @media screen and (max-width: 900px) {
      font-size: 12px;
      margin: 16px 12px;
      width: auto;
    
    }
    @media screen and (max-width: 760px) {
      font-size: 8px;
      margin: 12px 10px;
      width: auto;
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
    @media screen and (max-width: 1024px) {
      padding: 6px 8px;
      border-radius: 4px;

    }
    @media screen and (max-width: 900px) {
      padding: 5px 7px;
      border-radius: 3px;
    
    }
    @media screen and (max-width: 760px) {
      padding: 4px 6px;
      border-radius: 2px;
    }
`
export const Divider = styled.div`
    width: 1.5px;
    background: ${({ theme }) => theme.primary};
`;


const Papers = () => {
  const [toggle, setToggle] = useState("all");

  return (
    <Container id="papers">
      <Wrapper>
        <Title>Research Papers</Title>
        <Desc>What I Published</Desc>

        <ToggleGroup>
          {[
            "all",
            "conference paper",
            "journal paper",
          ].map((category, index) => (
            <React.Fragment key={category}>
              <ToggleButton
                active={toggle === category}
                onClick={() => setToggle(category)}
              >
                {category.toUpperCase()}
              </ToggleButton>
              {index !== 2 && <Divider />}
            </React.Fragment>
          ))}
        </ToggleGroup>

        <SkillsContainer>
          {(toggle === "all"
            ? papers
            : papers.filter((item) => item.category === toggle)
          ).map((paper, idx) => (
            <Card key={idx}>
              <Image src={paper.img} alt={paper.title} />
              <Details>
                <CertificatesTitle>{paper.title}</CertificatesTitle>
              </Details>
              <Button href={paper.website_link} target="_blank" rel="noreferrer">
                View Paper
              </Button>
            </Card>
          ))}
        </SkillsContainer>
      </Wrapper>
    </Container>
  );
};

export default Papers;

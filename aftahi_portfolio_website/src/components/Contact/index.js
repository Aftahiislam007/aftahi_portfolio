import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { alignProperty } from '@mui/material/styles/cssUtils';
import EarthCanvas from "../../components/canvas/Earth.jsx";
import Swal from 'sweetalert2';
import './ContactStyle.css';

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: right;
position: relative;
z-index: 1;
align-items: center;
margin-top: 5rem;
@media screen and (max-width: 1024px) {
    ${'' /* margin-top: 7rem; */}
    flex-direction: column;
  }
  @media screen and (max-width: 600px) {
    ${'' /* margin-top: 5rem; */}
    flex-direction: column;
  }
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  ${'' /* left: %; */}
  width: 100%;
  max-width: 1300px;
  padding: 20px 30px 80px 0px;
  gap: 18px;
  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    flex-direction: column;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    flex-direction: column;
    justify-content: center;
  }
`;

// const Wrapper_div = styled.div`
//   ${'' /* position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   right: 30%;
//   width: 100%;
//   max-width: 1350px;
//   padding: 0px 0px 80px 0px;
//   gap: 10px;
//   @media (max-width: 960px) {
//       flex-direction: column;
//   } */}

//   width: 100%;
//   display: flex;
//   flex-wrap: wrap;
//   margin-left: 20px;
//   gap: 30px;
//   justify-content: left;
// `;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: 0.1px solid #854CE6;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media screen and (max-width: 1024px) {
    ${'' /* max-width: 400px; */}
    margin-left: 8%;
    width: 95%;
    padding: 10px 36px;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    ${'' /* max-width: 550px; */}
    margin-left: 8%;
    width: 95%;
    padding: 10px 36px;
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

// const Title = styled.div`
// font-size: 52px;
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


// const ContactForm = styled.form`
//   width: 95%;
//   max-width: 600px;
//   display: flex;
//   flex-direction: column;
//   background-color: ${({ theme }) => theme.card};
//   padding: 32px;
//   border-radius: 16px;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   margin-top: 28px;
//   gap: 12px;
// `

// const ContactTitle = styled.div`
//   font-size: 24px;
//   margin-bottom: 6px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_primary};
// `

// const ContactInput = styled.input`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactInputMessage = styled.textarea`
//   flex: 1;
//   background-color: transparent;
//   border: 1px solid ${({ theme }) => theme.text_secondary};
//   outline: none;
//   font-size: 18px;
//   color: ${({ theme }) => theme.text_primary};
//   border-radius: 12px;
//   padding: 12px 16px;
//   &:focus {
//     border: 1px solid ${({ theme }) => theme.primary};
//   }
// `

// const ContactButton = styled.input`
//   width: 100%;
//   text-decoration: none;
//   text-align: center;
//   background: hsla(271, 100%, 50%, 1);
//   background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
//   padding: 13px 16px;
//   margin-top: 2px;
//   border-radius: 12px;
//   border: none;
//   color: ${({ theme }) => theme.text_primary};
//   font-size: 18px;
//   font-weight: 600;
// `

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`;

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`;


const Name = styled.div`
    font-size: 18px;
    font-weight: 600;
    text-align: center;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`;

// const Degree = styled.div`
//     font-size: 14px;
//     font-weight: 500;
//     color: ${({ theme }) => theme.text_secondary + 99};
//     @media only screen and (max-width: 768px){
//         font-size: 12px;
//     }
// `;

// const Date = styled.div`
//     font-size: 12px;
//     font-weight: 400;
//     color: ${({ theme }) => theme.text_secondary + 80};
//     @media only screen and (max-width: 768px){
//         font-size: 10px;
//     }
// `;

export const ResumeButton = styled.a`
    -webkit-appearance: button;
    -moz-appearance: button;
    appearance: button;
    text-decoration: none;
    width: 95%;
    max-width: 300px;
    text-align: center;
    padding: 16px 0;
    color:${({ theme }) => theme.white};
    border-radius: 20px;
    cursor: pointer;
    font-size: 20px;
    font-weight: 600;
    transition: all 0.2s ease-in-out !important;
    background: hsla(271, 100%, 50%, 1);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    box-shadow:  20px 20px 60px #1F2634,
    -20px -20px 60px #1F2634;
    &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    }    
    
    
    @media (max-width: 640px) {
        padding: 12px 0;
        font-size: 18px;
    } 

`;


// const Container = styled.div`
//   display: flex;
//   justify-content: center;
//   gap: 12px;
//   z-index: 1;
//   align-items: center;
//   @media (max-width: 960px) {
//     padding: 0px;
//   }
// `;

// const Wrapper = styled.div`
//   position: relative;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   flex-direction: column;
//   width: 100%;
//   max-width: 1350px;
//   padding: 0px 0px 80px 0px;
//   gap: 12px;
//   @media (max-width: 960px) {
//     flex-direction: column;
//   }
// `;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 90px;
  color: ${({ theme }) => theme.text_primary};
  @media screen and (max-width: 1024px) {
    margin-top: 7rem;
    flex-direction: column;
    font-size: 32px;
  }
  @media screen and (max-width: 600px) {
    margin-top: 5rem;
    flex-direction: column;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 1024px) {
    margin-top: 12px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
  }
  @media screen and (max-width: 600px) {
    margin-top: 10px;
    font-size: 16px;
    text-align: center;
    justify-content: center;
  }
`;
const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;
const ContactTitle = styled.div`
  font-size: 28px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;
const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;
const Button = styled.button`
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
  font-size: 18px;
  font-weight: 600;
  &:hover {
        transform: scale(1.05);
    transition: all 0.4s ease-in-out;
    box-shadow:  20px 20px 60px #1F2634,
    filter: brightness(1);
    } 
`;

// const Skill = styled.div`
//   width: 100%;
//   max-width: 500px;
//   background: ${({ theme }) => theme.card};
//   border: 0.1px solid #854CE6;
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border-radius: 16px;
//   padding: 18px 36px;
//   @media screen and (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media screen and (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }
// `;

// const SkillTitle = styled.h2`
//   font-size: 28px;
//   font-weight: 600;
//   color: ${({ theme }) => theme.text_secondary};
//   margin-bottom: 20px;
//   text-align: center;
// `;

const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   emailjs.sendForm('service_3ldwjvs', 'template_pr6zq3j', form.current, form.current, {
  //       publicKey: 'zRapvWzj3Ep3Xzw7j',
  //     })
  //     .then((result) => {
  //       // setOpen(true);
  //       // form.current.reset();
  //       console.log(result.text);
  //       console.log('Message Sent');
  //     }, 
  //     (error) => {
  //       // console.log(error.text);
  //       console.log('FAILED...', error.text);
  //     },
  //   );

  //   // e.target.reset()



  //   // const btn = document.getElementById('button');

  //   // document.getElementById('form')
  //   // .addEventListener('submit', function(event) {
  //   //   event.preventDefault();

  //   //   btn.value = 'Sending...';

  //   //   const serviceID = 'service_3ldwjvs';
  //   //   const templateID = 'template_pr6zq3j';

  //   //   emailjs.sendForm(serviceID, templateID, this)
  //   //     .then(() => {
  //   //       btn.value = 'Send Email';
  //   //       alert('Sent!');
  //   //     }, (err) => {
  //   //       btn.value = 'Send Email';
  //   //       alert(JSON.stringify(err));
  //   //     });
  //   // });
  // };

  

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "ce666975-4044-4e8d-a5a9-3c0b2bfd1eef");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  };

  return (
    <Container id="contact">
      {/* <EarthCanvas /> */}
      <Title>Contact</Title>
      <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
      <Wrapper> 
        <Skill>
          <SkillTitle>Email</SkillTitle>
          <Top>
            <Body>
                <Name>aftahiislam2016@gmail.com</Name><br />
                {/* <Degree>bachelor</Degree>
                <Date>8th sep 2021</Date> */}
            </Body>
          </Top>
          <ResumeButton href="mailto:aftahiislam2016@gmail.com" target='display'>Send Mail</ResumeButton>
        </Skill>
        <Skill>
          <SkillTitle>WhatsApp</SkillTitle>
          <Top>
            <Body>
                <Name>+8801797341164</Name><br />
                {/* <Degree>bachelor</Degree>
                <Date>8th sep 2021</Date> */}
            </Body>
          </Top>
          <ResumeButton href="https://wa.me/qr/VLDC5HGQP5EDG1" target='display'>Send Message</ResumeButton>
        </Skill>
        <Skill>
          <SkillTitle>Mobile</SkillTitle>
          <Top>
            <Body>
                <Name>+8801797341164</Name><br />
                {/* <Degree>bachelor</Degree>
                <Date>8th sep 2021</Date> */}
            </Body>
          </Top>
          <ResumeButton href="tel:+8801797341164" target='display'>Call Now</ResumeButton>
        </Skill>
        {/* <ContactForm ref={form} onSubmit={onSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <Button type="submit">Send</Button> */}
          {/* <ContactButton type="submit" value="Send" id="button"/> */}
          {/* <ResumeButton href="mailto:aftahiislam2016@gmail.com" type="submit">Send</ResumeButton> */}
          {/* <ContactButton value="Send" id="button">Send</ContactButton> */}
        {/* </ContactForm> */}
        <form onSubmit={onSubmit}>
          <h2>Email Me 🚀</h2>
          <div className="input-box">
            <input type="text" className='field' name="sender_name" placeholder='Your Name'/>
          </div>
          <div className="input-box">
            <input type="email" className='field' name="sender_email" placeholder='Your Email'/>
          </div>
          <div className="input-box">
            <input type="text" className='field' name="sender_subject" placeholder='Your Email Subject'/>
          </div>
          <div className="input-box">
            <textarea name="sender_message" className='field mess' placeholder='Your Message'></textarea>
          </div>
          
          <button type="submit">Send</button>
        </form>
        {/* <script type="text/javascript"
          src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
        </script>

        <script type="text/javascript">
          emailjs.init('zRapvWzj3Ep3Xzw7j')
        </script> */}
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
      {/* <Wrapper_div>
        <Skill>
          <SkillTitle>Email</SkillTitle>
          
        </Skill>
      </Wrapper_div> */}
    </Container>



    // <Container>
    //   <Wrapper>
    //     {/* <EarthCanvas /> */}
    //     <Title>Contact</Title>
    //     <Desc>
    //       Feel free to reach out to me for any questions or opportunities!
    //     </Desc>
    //     <ContactForm onSubmit={handleSubmit}>
    //       <ContactTitle>Email Me 🚀</ContactTitle>
    //       <ContactInput placeholder="Your Email" name="from_email" />
    //       <ContactInput placeholder="Your Name" name="from_name" />
    //       <ContactInput placeholder="Subject" name="subject" />
    //       <ContactInputMessage placeholder="Message" name="message" rows={4} />
    //       <ContactButton type="submit" value="Send" />
    //     </ContactForm>
    //   </Wrapper>
    // </Container>
  )
}

export default Contact
import React from 'react';
import styled from 'styled-components';
import Navbar from './CustomerNavbar';
import Footer from './Footer';
import ContactUs from './Contactus';
import FeedbackPage from './FeedbackPage';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px;
  background: #445;
  font-family: Arial, sans-serif;
  margin-top:30px;
`;

const Title = styled.h2`
  margin-bottom: 20px;
  color: white;
`;

const Description = styled.p`
  margin-bottom: 30px;
  color: white;
  max-width: 800px;
  text-align: center;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const TeamMember = styled.div`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 15px;
  padding: 20px;
  text-align: center;
  width: 200px;
`;

const MemberPhoto = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-bottom: 15px;
`;

const MemberName = styled.h3`
  margin-bottom: 10px;
  color: #333;
`;

const MemberRole = styled.p`
  color: #666;
`;

const AboutUs = () => {
  const teamMembers = [
    { name: 'John', role: 'CEO', photo: 'https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg' },
    { name: 'Jane', role: 'CTO', photo: 'https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg' },
    { name: 'Michael', role: 'Lead Developer', photo: 'https://www.shutterstock.com/image-vector/businessman-executive-profile-icon-vector-260nw-544647394.jpg' },
  ];

  return (
  <div>
  <Navbar/>
  <FeedbackPage/>
  <div>
    <Container>
      <Title>About Us</Title>
      <Description>
        We are a team of dedicated professionals committed to providing top-notch home services. Our goal is to connect you with the best service providers in your area, ensuring quality and reliability in every job.
      </Description>
      <TeamContainer>
        {teamMembers.map((member, index) => (
          <TeamMember key={index}>
            <MemberPhoto src={member.photo} alt={member.name} />
            <MemberName>{member.name}</MemberName>
            <MemberRole>{member.role}</MemberRole>
          </TeamMember>
        ))}
      </TeamContainer>
    </Container>
    </div>
    <ContactUs/>
    <Footer/>
    </div>
  );
}

export default AboutUs;

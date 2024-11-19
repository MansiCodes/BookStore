import React from 'react';
import styled from 'styled-components';
import FindMyBookLogo from '../assets/findMyBook.png'; 
import PaymentLogo1 from '../assets/PaymentLogo1.jpg'; 
import PaymentLogo2 from '../assets/PaymentLogo2.jpg'; 
import PaymentLogo3 from '../assets/PaymentLogo3.jpg';
import PaymentLogo4 from '../assets/PaymentLogo4.jpg';
import PaymentLogo5 from '../assets/PaymentLogo5.jpg';
import PaymentLogo6 from '../assets/PaymentLogo6.jpg';
import LogisticsLogo1 from '../assets/LogisticsLogo1.png';
import LogisticsLogo2 from '../assets/LogisticsLogo2.png'; 
import LogisticsLogo3 from '../assets/LogisticsLogo3.png'; 
import LogisticsLogo4 from '../assets/LogisticsLogo4.png'; 
import LogisticsLogo5 from '../assets/LogisticsLogo5.png'; 

const FooterContainer = styled.footer`
  background-color: #f8f8f8;
  padding: 40px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 20px; 
`;

const Column = styled.div`
  flex: 1;
  min-width: 200px; 
  margin: 0 10px; 
`;

const Logo = styled.img`
  width: 120px;
  height: auto;
  margin-bottom: 20px;
`;

const ColumnTitle = styled.h4`
  margin-bottom: 15px;
`;

const Text = styled.p`
  margin-bottom: 10px;
`;

const SmallLogosContainer = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap; 
`;

const SmallLogo = styled.img`
  width: 40px;
  height: 40px;
  object-fit: contain;
`;

const PaymentAndLogisticsContainer = styled.div`
  display: flex;
  flex-direction: column; 
  gap: 20px; 
  flex: 1; 
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Column>
        <Logo src={FindMyBookLogo} alt="FindMyBook Logo" />
        <Text>The service platform sells various types of books, from the oldest to the newest, and various popular works are also available.</Text>
      </Column>

      <Column>
        <ColumnTitle>Customer Service</ColumnTitle>
        <Text>Help</Text>
        <Text>Return and Refund</Text>
        <Text>Kyrand Guarantee</Text>
        <Text>Contact Us</Text>
      </Column>

     
      <PaymentAndLogisticsContainer>
        <Column>
          <ColumnTitle>Payment</ColumnTitle>
          <SmallLogosContainer>
            <SmallLogo src={PaymentLogo1} alt="Payment Logo 1" />
            <SmallLogo src={PaymentLogo2} alt="Payment Logo 2" />
            <SmallLogo src={PaymentLogo3} alt="Payment Logo 3" />
            <SmallLogo src={PaymentLogo4} alt="Payment Logo 4" />
            <SmallLogo src={PaymentLogo5} alt="Payment Logo 5" />
            <SmallLogo src={PaymentLogo6} alt="Payment Logo 6" />
          </SmallLogosContainer>
        </Column>

        <Column>
          <ColumnTitle>Logistics</ColumnTitle>
          <SmallLogosContainer>
            <SmallLogo src={LogisticsLogo1} alt="Logistics Logo 1" />
            <SmallLogo src={LogisticsLogo2} alt="Logistics Logo 2" />
            <SmallLogo src={LogisticsLogo3} alt="Logistics Logo 3" />
            <SmallLogo src={LogisticsLogo4} alt="Logistics Logo 4" />
            <SmallLogo src={LogisticsLogo5} alt="Logistics Logo 5" />
          </SmallLogosContainer>
        </Column>
      </PaymentAndLogisticsContainer>

      <Column>
        <ColumnTitle>Contact</ColumnTitle>
      </Column>
    </FooterContainer>
  );
};

export default Footer;

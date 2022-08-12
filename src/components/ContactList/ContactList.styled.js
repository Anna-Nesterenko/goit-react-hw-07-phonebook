import styled from 'styled-components';

export const ContactContainer = styled.ul`
  padding-bottom: 30px;
  padding-inline-start: 0;
  margin: 0;
  margin-top: 30px;
  width: 400px;
`;

export const ContactEl = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 10px;

  & > span {
    width: 50%;
    font-size: 22px;
  }
`;

export const ContactBtn = styled.button`
  /* margin-left: 20px; */
`;

import styled from "styled-components";
import { primaryColor } from "./variables";

export const Container = styled.div`
  border-top: 4rem solid ${primaryColor};
  border-left: 3.5rem solid ${primaryColor};
  background-color: #ebecef;
  max-height: 100vh;
  overflow: hidden;
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    border: none;
    padding: 15px;
    flex-direction: column;
  }
`;

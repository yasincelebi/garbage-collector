import styled from "styled-components";
import { primaryColor } from "./variables";
import LoadingLogo from "../assets/interface.svg";
import SuccessIcon from "../assets/success-icon.svg";
import FailIcon from "../assets/fail-icon.svg";
export const StyledTakeAction = styled.div`
    margin-top: 1rem;
  & .title {
    font-size: 1rem;
    font-weight: bold;
    color: ${primaryColor}
  }
  & .content {
    color: ${primaryColor}
    font-size: 0.875rem;
  }
  margin-bottom: 1.5rem;
  gap: 1.438rem;
`;

export const StyledMarkAsResolved = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.281rem;

  & .title {
    font-size: 1rem;
    font-weight: bold;
    color: ${primaryColor};
  }
  textarea {
    resize: none;
    border: none;
    border-radius: 0.375rem;
    min-width: 100%;
    min-height: 100px;
    padding: 1.063rem;
    font-size: 0.875rem;
    color: ${primaryColor};

    margin-bottom: 1rem;
    outline: 0.0031rem solid rgba(89, 102, 128, 0.5);
    height: 153px;
  }
`;

export const StyledLoading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  & .circle {
    background: url(${LoadingLogo}) no-repeat center;
    animation: spin 3s linear infinite;
    background-size: contain;
    height: 3.125rem;
    width: 3.125rem;
  }
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(144deg);
    }
    50% {
      transform: rotate(216deg);
    }
    75% {
      transform: rotate(288deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledResponseRequest = styled("div")<{
  type: StyledResponseType;
}>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  text-align: center;
  & .title {
    font-size: 1.813rem;
    font-weight: bold;
    color: ${(props) =>
      props.type === "success"
        ? "rgba(61, 168, 54, 1)"
        : "rgba(217, 35, 35, 1)"};
    margin-bottom: 0.688rem;
  }
  & .content {
    font-size: 1rem;
    color: ${primaryColor};
  }
  & .icon {
    background: url(${(props) =>
        props.type === "success" ? SuccessIcon : FailIcon})
      no-repeat;
    width: 3.5rem;
    height: 3.5rem;
    margin-bottom: 1rem;
  }
`;

export type StyledResponseType = "error" | "success";
export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

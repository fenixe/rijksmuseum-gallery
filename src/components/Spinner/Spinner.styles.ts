import styled from "styled-components";

export const LoaderContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Loader = styled.div`
  animation: sk-scaleout 1s infinite ease-in-out;
  background-color: white;
  border-radius: 100%;
  height: 6em;
  width: 6em;

  @keyframes sk-scaleout {
    0% {
      transform: scale(0);
    }
    100% {
      opacity: 0;
      transform: scale(1);
    }
  }
`;

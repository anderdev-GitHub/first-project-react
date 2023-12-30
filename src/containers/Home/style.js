import styled from "styled-components";
import Background from "../../assets/background1.svg";

export const Container = styled.div`
  min-height: 100vh;
  background: url("${Background}");
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

export const Image = styled.img`
  margin-top: 30px;
`;

export const ContainerItens = styled.div`
  border-radius: 61px 61px 0px 0px;
  background: linear-gradient(
    157deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25),
    0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  padding: 50px 36px;

  display: flex;
  flex-direction: column;

  height: 100%;
  min-height: calc(100vh - 170px);
`;

export const H1 = styled.h1`
  color: #fff;
  text-align: center;
  font-size: 34px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 80px;
`;

export const InputLabel = styled.p`
  color: #eee;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.408px;

  margin-left: 25px;
`;

export const Input = styled.input`
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 342px;
  height: 58px;
  border-radius: 14px;
  padding-left: 25px;
  margin-bottom: 34px;

  border: none;
  outline: none;

  color: #fff;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Button = styled.button`
  width: 342px;
  height: 74px;
  margin-top: 130px;

  border: none;
  border-radius: 14px;
  background: var(--templates-5-color-1, rgba(0, 0, 0, 0.8));
  cursor: pointer;

  color: #fff;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  
  transition: transform 0.1s;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
    transform: scale(1.1);
  }
`;

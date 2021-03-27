import styled from "styled-components";
import { FaDropbox } from "react-icons/fa";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  @media (min-width: 1024px) {
    max-width: 480px;
  }
`;

export const Navigation = styled.nav`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 16px 32px;
  min-height: 61px;

  > h1 {
    display: flex;
    align-items: center;

    > span {
      color: var(--color-quaternary);
      margin-left: 10px;
      font-size: 29px;
    }
  }
  > button {
    background: none;
    border: none;
    font-weight: bold;
    font-size: 17px;
    outline: 0;
    cursor: pointer;
  }

  @media (min-width: 1024px) {
    justify-content: flex-end;

    > h1 {
      display: none;
    }
  }
`;

export const DropboxLogo = styled(FaDropbox)`
  width: 36px;
  height: 32px;
  fill: var(--color-blue);
`;

export const MenuClose = styled.span`
  padding: 0.4em 0.6em;
  margin: 0;
  font-size: 85%;
  background-color: var(--color-gray);
  border-radius: 5px;
`;

export const Form = styled.form`
  display: flex;
  height: 100%;

  flex-direction: column;
  justify-content: center;

  padding: 0 32px;
  max-width: 480px;
  margin: 0 auto;

  > .title {
    font-size: 25px;
    font-weight: 500;
  }
  > .subtitle {
    font-size: 12px;
    margin-top: 3px;
  }

  > button {
    margin-top: 18px;

    padding: 13px 18px;
    font-size: 16px;
    background-color: var(--color-blue);
    color: var(--color-tertiary);
    border: none;

    cursor: pointer;
    &:hover {
      opacity: 0.87;
    }
  }

  > .terms {
    font-size: 12px;
    opacity: 0.6;
    margin-top: 4px;
  }
`;

export const Input = styled.input`
  background: var(--color-tertiary);
  border: 1px solid var(--color-input-border);
  padding: 13px 18px;
  font-size: 14px;
  min-width: 300px;
  margin-top: 18px;

  &:focus {
    border: 1px solid var(--color-quaternary);
  }
`;

export const CheckboxInline = styled.div`
  display: inline-block;
  width: 100%;
  margin: 2px 0 5px;
  padding: 6px 0;
  line-height: normal;
  box-sizing: border-box;
  border-radius: 3px;
  max-width: none;
  min-height: 34px;
  height: auto;

  input {
    opacity: 0;
    padding: 0;
    margin: 0;
  }

  label {
    display: flex;
    align-items: center;
    position: relative;
    padding-left: 30px;
    min-height: 20px;
    color: var(--color-input-checkbox-label);
  }

  label::before,
  label::after {
    content: "";
    border: 1px solid var(--color-input-border);
    position: absolute;
    cursor: pointer;
    left: 0;
    top: 0;
    width: 20px;
    height: 20px;
  }

  label::after {
    background-image: url(/images/checkmark.svg);
    background-color: var(--color-blue);
    background-position: 5px 5px;
    background-size: 10px 10px;
    background-repeat: no-repeat;
    opacity: 0;
  }

  input:checked + label::after {
    transition: opacity 0.2s;
    opacity: 1;
  }
`;

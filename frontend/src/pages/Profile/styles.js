import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
   max-width: 600px;
   margin: 50px auto;
   form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    input {
      background: yellow;
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: black;
      margin: 0 0 10px;
      &::placeholder {
        color: grey;
      }
    }
    span {
      color: #fb6f91;
      align-self: auto;
      margin: 0 0 10px;
      font-weight: bold;
    }
    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.2);
      margin: 10px 0 20px;
    }
    button {
      margin: 5px 0 0;
      height: 44px;
      background: black;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
       background: ${darken(0.07, '#555')};
      }
    }
   }
   >button {
      width: 100%;
      margin: 10px 0 0;
      height: 44px;
      background: yellow;
      color: black;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;
      &:hover {
       background: ${darken(0.08, '#fff')};
      }
    }
`;
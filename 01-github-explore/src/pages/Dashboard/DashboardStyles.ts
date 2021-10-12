import styled from 'styled-components'

export const Title = styled.h1`
  font-size: 48px;
  color: #3A3A3A;
  max-width: 440px;
  margin-top: 80px;
`

export const Form = styled.form`
  display: flex;
  margin-top: 40px;

  .has-error {
    border: solid 2px #c53030;
  }

  input {
    flex: 1;
    height: 70px;
    border: 1px solid #a3a3a3;
    border-radius: 5px 0 0 5px;
    padding: 0 24px;
    color: #3a3a3a;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    background: #04D361;
    border: none;
    border-radius: 0 5px 5px 0;
    color: #fff;
    font-size: 18px;
    font-weight: bold;
    height: 70px;
    width: 210px;
  }
`
export const Error = styled.span`
  color: #c53030;
  display: block;
  margin-top: 10px;
`

export const Repositories = styled.div`
  margin-top: 80px;

  a {
    align-items: center;
    background: #fff;
    border-radius: 5px;
    display: flex;
    padding: 24px;
    text-decoration: none;
    transition: 0.2s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(10px);
    }

    img {
      border-radius: 50%;
      height: 64px;
      width: 64px;
    }

    div {
      padding: 0 16px;

      strong {
        color: #3a3a3a;
        font-size: 20px;
      }

      p {
        color: #a8a8b3;
        font-size: 18px;
        margin-top: 4px;
      }
    }

    .icon-rep {
      color: #a8a8b3;
      font-family: 'Nanum Gothic', sans-serif;
      margin-left: auto;
    }
  }
`

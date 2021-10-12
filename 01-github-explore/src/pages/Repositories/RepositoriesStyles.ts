import styled from 'styled-components'

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: space-between;

  a {
    align-items: center;
    color: #a8a8b3;
    display:flex;
    text-decoration: none;
    transition: 0.2s;

    &:hover {
      color: #707070;
    }

    .icon-back {
      font-family: 'Nanum Gothic', sans-serif;
      font-size: 10px;
      margin-right: 5px;
    }
  }
`

export const RepositoryInfo = styled.div`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      border-radius: 50%;
      width: 90px;
      height: 90px;
    }

    div {
      color: #3D3D4D;
      margin-left: 24px;

      p {
        color: #737380;
        margin-top: 4px;
      }
    }
  }

  ul {
    display: flex;
    list-style: none;
    margin-top: 30px;

    li {
      & + li {
        margin-left: 80px;
      }

      strong {
        color: #3D3D4D;
        display: block;
        font-size: 24px;
      }
      span {
        color: #737380;
      }
    }
  }
`
export const Issues = styled.div`
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

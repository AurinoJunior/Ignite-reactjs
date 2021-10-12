import styled from 'styled-components'

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
  }

  input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: 0.25rem;

    border: 1px solid var(--input-border);
    background-color: var(--input-background);

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1.5rem;
    }
  }

  button[type=submit] {
    width: 100%;
    text-align: center;
    height: 4rem;
    background: var(--green);
    color: var(--shape);
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    font-weight: 600;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionsTypeButtons = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  color: var(--text-title);

  button {
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;

    transition: 0.2s;

    img {
      width: 20px;
      height: 20px;
      margin-right: 0.5rem;
    }

    &:hover {
      border-color: #aaa;
    }

    &.income-active__green{
      background-color: var(--active-green);
      border: 0;
    }

    &.outcome-active__red{
      background-color: var(--active-red);
      border: 0;
    }
  }
`

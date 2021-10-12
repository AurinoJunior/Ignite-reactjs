import styled from 'styled-components'

export const Container = styled.header`
  background-color: var(--blue);
`
export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 8rem;
  display: flex;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: var(--shape);
    background-color: var(--green);
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
  
    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`

export const Logo = styled.span`
  display: flex;
  align-items:center;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--shape);

  img {
    margin: 0 0.5rem 0 0;
  }
`
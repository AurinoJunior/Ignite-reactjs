import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -6rem;
`

export const CardStyle = styled.div`
  background: var(--shape);
  padding: 2rem;
  border-radius: 0.25rem;
  color: var(--text-title);

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-weight: 500;
  }

  &.summary_highlight {
    background: var(--green);
    color: var(--shape);

    header p {
      font-weight: 600;
    }
  }
`

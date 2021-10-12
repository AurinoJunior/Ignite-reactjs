import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;

    th {
      font-weight: 400;
      color: var(--text-title);
      text-align: left;
      padding: 1rem 2rem;
    }

    td {
      padding: 2rem;
      background-color: var(--shape);
      border-radius: 0.25rem;
      color: var(--text-body);

      &:first-child {
        color: var(--text-title);
      }

      &.income {
        color: var(--green);
      }

      &.outcome {
        color: var(--red);
      }
    }
  }
`

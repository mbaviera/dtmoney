import styled from "styled-components";

export const Container = styled.main`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
  }

  th {
    color: var(--text-body);
    font-weight: 400;
    padding: 1rem 2rem;
    text-align: left;
    line-height: 1.5rem;
  }

  td {
    padding: 1rem 2rem;
    border: 0;
    background: var(--shape);
    color: var(--text-body);
    border-radius: 0%.25rem;

    &:first-child {
      //se for o primeioro td la fica mais escuro que os outros
      color: var(--text-title);
    }

    &.deposit {//quando a classe la no td for deposit a cor do texto é green
        color: var(--green);
    }

    &.withdraw {//quando a classe la no td for withdraw a cor do texto é red
        color: var(--red);
    }
  }
`;

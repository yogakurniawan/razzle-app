import styled from 'styled-components'

export const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 1rem;
  background-color: transparent;
  white-space: nowrap !important;
  margin-bottom: 0;
`;

export const Card = styled.div`
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  margin-bottom: 1.5rem;
  width: 100%;
  border: 1px solid rgba(0, 40, 100, 0.12);
  border-radius: 3px;
`

export const Th = styled.th`
  &:first-child {
    padding-left: 1.5rem;
  }
  border-bottom-width: 1px;
  vertical-align: bottom;
  border-bottom: 2px solid #dee2e6;
  color: #9aa0ac;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 400;
  padding: 0.5rem 0.75rem;
  text-align: inherit;
`

export const Th1 = styled(Th) `
  width: 0.25rem !important;
`

export const Td = styled.td`
  &:first-child {
      padding-left: 1.5rem;
  }
  vertical-align: middle;
  padding: 0.75rem;
  border-top: 1px solid #dee2e6;
`

export const Tr = styled.tr`
  &:first-child {
    th, td {
      border-top: 0;
    }
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.04);
  }
`
import styled from 'styled-components'

export const Table = styled.table`
    width: 100%;
    max-width: 100%;
    margin-bottom: 1rem;
    background-color: transparent;
    white-space: nowrap !important;
    margin-bottom: 0;
`;

export const Th = styled.th `
    &:first-child {
        padding-left: 1.5rem;
        border-top: 0;
    }
    border-bottom-width: 1px;
    vertical-align: bottom;
    border-bottom: 2px solid #dee2e6;
    color: #9aa0ac;
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 200;
    padding: 0.5rem 0.75rem;
    text-align: inherit;
`

export const Th1 = styled(Th) `
    width: 0.25rem !important;
`

export const Td = styled.td `
    &:first-child {
        padding-left: 1.5rem;
        border-top: 0;
    }
    vertical-align: middle;
    padding: 0.75rem;
`
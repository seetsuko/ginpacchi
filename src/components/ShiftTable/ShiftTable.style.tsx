import styled from 'styled-components'

export const TableWrapper = styled.div`
  table {
    width: 100%;
    border-collapse: collapse;
    th,
    td {
      padding: 8px;
      text-align: center;
      border: 1px solid #ccc;
      &:first-child {
        width: 120px;
        background-color: #f0f0f0;
      }
    }
    td {
      background-color: #fff;
    }
  }
`

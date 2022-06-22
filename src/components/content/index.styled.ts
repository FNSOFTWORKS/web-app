import styled from "styled-components";

export const Container = styled.div`
    margin-left:250px;
    padding-bottom: 1rem;
    min-height: calc(100vh - 50px);
    margin-top: 50px;
    margin-bottom: 0 !important;
    -webkit-transition: margin-left 0.3s ease;
    -o-transition: margin-left 0.3s ease;
    transition: margin-left 0.3s ease;
    overflow: hidden;
`

export const Header = styled.div`
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    margin: 1.5rem 0 1.5rem;
    -ms-flex-wrap: wrap;
    justify-content: space-between;
    padding: 0;
    position: relative;
`
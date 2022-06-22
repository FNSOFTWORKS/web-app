import styled from "styled-components";

export const Header = styled.div`
    position:fixed;
    left:0;
    right:0;
    top:0;
    width:100%;
    height: 60px;
    background: ${props => props.theme.colors.background};
    color: #FFF;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 20px;
    padding-left: 250px;
`
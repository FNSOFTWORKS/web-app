import styled from "styled-components";

export const Header = styled.header`
    margin: 0;
    padding: 0;
    border: 0;
    outline: 0;
`

export const Nav = styled.nav`
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
    
    .item-collapse {
        display: block !important;
        float: left;
        flex: inherit;
    }
    
    .item-center {
        float: none;
        margin: 0 auto;
        display: table;
        table-layout: fixed;
    }
`
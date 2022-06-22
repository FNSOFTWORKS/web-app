import styled from "styled-components";

export const Container = styled.aside`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    margin-top: 0px;
    width: 250px;
    max-height: 100%;
    z-index: 1000;
    background: ${props => props.theme.colors.background};
    border-right: 1px solid #dbe2eb;
    box-shadow: 0px 8px 14.72px 1.28px #ebe9ed;
    box-shadow: 0px 8px 14.72px 1.28px rgba(24, 23, 38, 0.06);
    -webkit-transition: left 0.3s ease, width 0.3s ease;
    
    ul {
      padding-left:0;
    }
    
    .side-menu {
      margin-top: 40px;
      padding-bottom: 40px;
    }
    
    .side-menu li a {
      position: relative;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      padding: 2.5px 22px 3px 5px;
      font-size: 14px;
      font-weight: 400;
      -webkit-transition: border-left-color 0.3s ease, background-color 0.3s ease;
      -o-transition: border-left-color 0.3s ease, background-color 0.3s ease;
      transition: border-left-color 0.3s ease, background-color 0.3s ease;
      color: ${props => props.theme.colors.text};
      margin: 6px 5px 6px 12px;
      border-radius: 50px;
      background: ${props => props.theme.colors.background};
    }
    
    .side-menu li a:hover {
      background: ${props => props.theme.colors.primary};
    }
    
    .side-item {
      color: ${props => props.theme.colors.text};
      font-size: 11px;
      text-transform: uppercase;
      font-weight: 700;
      letter-spacing: .5px;
      margin-bottom: 12px;
      padding: 0 20px 0 20px;
      list-style: none;
    }
    
 
    
  `
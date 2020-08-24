import styled from 'styled-components';

export const OverMenu = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    margin-bottom: 20px;
` 

export const Menu = styled.div`
    display: flex;
    flex-direction: row;
    height: 100%;
    width: ${props => props.collapsed ? '120px' : '337px'};
    border-right: 1px solid black;
`

export const CollapseButton = styled.button`
    height: 40px;
    width: 30px;
    border-left: none;
    border-top: none;
    outline: none;

`

export const Title = styled.h1`
    font-size: 30px;
    margin: 15px 20px;
`

export const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: ${props => props.collapsed ? '120px' : '337px'};
    border-bottom: 1px solid black;
`

export const Link = styled.a`
    font-size: 25px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: center;
    border-top: 1px solid black;
    width: 100%;
`
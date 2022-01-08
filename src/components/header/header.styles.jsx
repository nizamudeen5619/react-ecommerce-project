import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HeaderContainer = styled.div`
    height: 60px;
    width: 96%;
    margin-left: 2%;
    margin-right: 2%;    
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`
export const LogoContainer = styled(Link)`
    height: 100%;
    width: 70px;
    padding: 25px;
`

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`
/*
//for reusability
export const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`
*/

export const OptionLink = styled(Link)`
    padding: 10px 15px;
    cursor: pointer;
`
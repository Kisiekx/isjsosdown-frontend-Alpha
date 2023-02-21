import { TopBarContainer, Logo } from "./TopBar.style";
import logo from '../../../../assets/logo.svg'

export const TopBar = () => {
    return (
        <>
        <TopBarContainer><Logo src={logo}/></TopBarContainer>
        </>
    );
}
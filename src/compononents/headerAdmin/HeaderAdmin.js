import React, { useLayoutEffect } from 'react'
import white from "../../assets/logo/white.png"
import { goToAdmin, goToCreateContract, goToEditCalendar, goToLogin } from '../../routes/coordinator'
import { HeaderContainer, Logo, ButtonContainer, StyledButton } from './styled'
import Button from '@material-ui/core/Button'


const Header = ({history}) => {
    

    const logout = () => {
        localStorage.removeItem("token")
        goToLogin(history)
    }

    return (
        <HeaderContainer>
            <Logo src={white} alt="logo" />

                <ButtonContainer>
                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToAdmin(history)}
                    >Home
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToCreateContract(history)}
                    >Criar Usuário
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => goToEditCalendar(history)}
                    >Agenda
                    </Button>

                    <Button
                        type={"submit"}
                        variant={"text"}
                        color={"secondary"}
                        onClick={() => logout()}
                    >Sair
                    </Button>
                </ButtonContainer>
                      
        </HeaderContainer>
    )
}

export default Header

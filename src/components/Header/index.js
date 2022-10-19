import { TitleHeader, UserPic, User, Logo } from './styled'

export const Header = (props) => {


    return (
        <TitleHeader>
            {props.pageFlow === 1 ? (<Logo>Insta4</Logo>) : (<><UserPic src={props.logUserPic} /> <User>{props.logUser}</User>
                <Logo>Insta4</Logo></>)}
        </TitleHeader>
    )
}



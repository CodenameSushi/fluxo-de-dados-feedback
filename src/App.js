import styled, { createGlobalStyle } from "styled-components";
import { useState } from "react";
import FormularioPostagem from "./components/FormularioPostagem/FormularioPostagem";
import { Header } from "./components/Header";
import TelaDaPostagem from "./components/TelaDaPostagem/TelaDaPostagem";
import FormularioLogin from "./components/FormularioLogin/FormularioLogin";
const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Container = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
`;

function App() {
  const [pageFlow, setPageFlow] = useState(1);

  const [user, setUser] = useState("")
  const [userPic, setUserPic] = useState("")

  const [logUser, setLogUser] = useState("")
  const [logUserPic, setLogUserPic] = useState("")

  const [post, setPost] = useState({})

  const login = (e) => {
    setPageFlow(2);
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <aside>
          <Header 
          pageFlow={pageFlow} setPageFlow={setPageFlow}
          logUser = {logUser} setLogUser = {setLogUser}
          logUserPic = {logUserPic} setLogUserPic = {setLogUserPic}
          />
          {pageFlow === 1 ? (
            <FormularioLogin 
            pageFlow={pageFlow} setPageFlow={setPageFlow} 
              user = {user} setUser = {setUser}
              userPic = {userPic} setUserPic = {setUserPic}
              logUser = {logUser} setLogUser = {setLogUser}
              logUserPic = {logUserPic} setLogUserPic = {setLogUserPic}
              login = {login}/>
              
          ) : (
            <FormularioPostagem 
            post = {post}
            setPost = {setPost}
            />
          )}
        </aside>
        <TelaDaPostagem  
            post = {post}
            setPost = {setPost}/>
      </Container>
    </>
  );
}

export default App;

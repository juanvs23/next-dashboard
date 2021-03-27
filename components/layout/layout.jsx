import Head from 'next/head'
import React from 'react'
import { FunctionalsContent } from '../../context/contextApi'
import styled from 'styled-components';
import SidebarComponent from '../sidebarComponent';
import  HeaderComponent from '../headerComponent';
import MainContainer from '../mainContainer';
export const Container = styled.div`
  &.light{
  
    }
  }
`;


const LayoutComponent = ({children}) => {
    const { titleContent,darkMode:{className},height,setHeight } =React.useContext(FunctionalsContent )
    React.useEffect(() => {
        setHeight({height:`${screen.height}px`})
           
        }, [])
    return (
        <>
            <Head>
         <title>{titleContent}</title>
        </Head>
        <Container className={`wrapper ${className}`} style={height}>
            <HeaderComponent/>
            <SidebarComponent/>
       
         <MainContainer>
            {children}
        </MainContainer>   
        
        
        </Container>
        
        </>
    )
}
export default LayoutComponent

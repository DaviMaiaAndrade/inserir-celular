import { PageContainer } from "components/PageContainer";
import { ProcessPageFooter } from "components/ProcessPageFooter";
import { ProcessPageLayout } from "components/ProcessPageLayout";
import React from "react";
import {useStyles} from "./AllAcounts.style";
import { AppBar } from "components/AppBar";
import { ProcessDescriptionHeader } from "components/ProcessDescriptionHeader";
import { InputCel } from "components/InputCel";




export const AllAcounts:React.FC=()=>{
    const styles=useStyles();
    return(
        <PageContainer> 
            <ProcessPageLayout 
            appBar={ <AppBar homeRoute={'/'}>

                 </AppBar> }

             header={<ProcessDescriptionHeader 
                title={"Ativar Conta"} 
                subtitle={"Informe o número do celular cadastrado"} 
                description={"Você receberá, por mensagem de texto, um código de validação de seu acesso"} /> } 
                
                main={<div>
                        <InputCel></InputCel>
                     </div>} 
                footer={ <ProcessPageFooter/> } />
                
             </PageContainer>
       );
    }
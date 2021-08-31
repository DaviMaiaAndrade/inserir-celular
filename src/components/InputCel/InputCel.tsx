import { Typography } from "@material-ui/core";
import React from "react";
import { useStyles } from "./Inputcel.style";

export const InputCel:React.FC=()=>{
    const styles=useStyles();
    return(
        <div className={styles.main}>
        
            <Typography id="inputID"className={styles.inputDDD} >Celular com DDD</Typography>
                      
            
            <input className={styles.input} type="text" placeholder="(XX) XXXX.XXXX" />
        </div>
        )
    }
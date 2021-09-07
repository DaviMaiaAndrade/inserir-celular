import { makeStyles } from '@material-ui/core'
import { sortAndDeduplicateDiagnostics } from 'typescript'

export const useStyles = makeStyles({

main:{
    display: "flex",
    alignItems:" center",
    justifyContent: "center",
},
input:{
    textAlign:"center",
    width:284,
    height:40,
    marginLeft:2,
    marginRight:2,
    marginTop:40,
    borderRadius:5,
    border: 0.8,
    borderStyle:"solid",
    borderColor:"#C4C4C4"    
},
inputDDD:{
    position: 'absolute',
    fontStyle: 'normal',
    fontWeight: 500,
    color: '#555555',
    marginTop: -10,
    marginLeft:-180,    
    fontSize: 12,
    lineHeight:130,
}

})
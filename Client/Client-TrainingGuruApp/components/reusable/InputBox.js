import {TextField} from "@mui/material";

function InputBox({text}){
    const placeholder = `Enter ${text}`
    return <TextField id="filled-basic" label={text}  type="text" placeholder={placeholder} name={text}/>
}


export default  InputBox
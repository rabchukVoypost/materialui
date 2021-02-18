import React from "react"
import InputLabel from "../InputLabel";
import InputBase from "../InputBase";
import FormHelperText from "../FormHelperText";
import FormControl from "@material-ui/core/FormControl";

type TextFieldType = {
    children: string
    id:string
    placeholder:string
    helperId: string
}

const TextField = (children : any, id : any, placeholder:any , helperId:any) => {
    return (
        <FormControl>
            <InputLabel htmlFor={id}>{children}</InputLabel>
            <InputBase id={id} aria-describedby={helperId}
                       placeholder={placeholder}></InputBase>
            <FormHelperText id={helperId}></FormHelperText>
        </FormControl>
    )
}
export default TextField;


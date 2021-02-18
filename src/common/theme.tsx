import {createMuiTheme} from "@material-ui/core";

const defaultTheme = createMuiTheme({
    spacing: 2
})

const theme = createMuiTheme({
    overrides: {
        MuiAvatar:{
          root:{
              width: "18px",
              height: "17.65px",
              position:"absolute",
              marginTop:"43px",
              marginLeft:"510px",
              zIndex:2
          }
        },
        MuiDivider: {
            root: {
                border: "1px solid #E5E5E5",
                width: "252px",
                marginTop: defaultTheme.spacing(12),
            }
        },
        MuiTypography: {
            root: {
                fontFamily: "Roboto",
                color: "#000000",
                fontStyle: "normal",
                marginTop: defaultTheme.spacing(12),
                whiteSpace: "pre-line",

            },
            h1: {
                fontWeight: 900,
                fontSize: "36px",
                lineHeight: "42px"
            },
            h2: {
                fontWeight: "bold",
                fontSize: "32px",
                lineHeight: "37px",
                marginRight: "auto"

            },
            h3: {
                fontWeight: 500,
                fontSize: "28px",
                lineHeight: "33px"
            },
            h4: {
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "28px"
            },
            h5: {
                fontWeight: 500,
                fontSize: "18px",
                lineHeight: "21px"
            },
            h6: {
                fontWeight: "bold",
                fontSize: "16px",
                lineHeight: "19px"
            },
            subtitle1: {
                fontWeight: "bold",
                fontSize: "14px",
                lineHeight: "16px"
            },
            subtitle2: {
                fontWeight: 300,
                fontSize: "14px",
                lineHeight: "16px"
            }
        },
        MuiTextField: {
            root: {margin: defaultTheme.spacing(4)}
        },
        MuiOutlinedInput: {
            root: {
                '&$notchedOutline': {
                    display: "none"
                },
                '&$focused $notchedOutline': {
                    borderWidth: 1,
                },
            }
        },
        MuiFormLabel: {
            root: {
                marginTop:"25px",
                marginBottom:"10px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: 900,
                fontSize: "14px",
                lineHeight: "16px",
                color:"#000000",
                "&$focused":{
                    color:"#6D9B12"
                },
                "&$error":{
                    color:"#FF0000"
                },
            }
        },
        MuiFormHelperText: {
            root: {
                position: "absolute",
                marginTop:"102px",
                "fontWeight": 300,
                fontSize: "14px",
                lineHeight: "18px",
                "&$error":{
                    color:"#FF0000",

                }
            }
        },
        MuiInputBase: {
            input: {
                paddingLeft: defaultTheme.spacing(6),
                paddingTop: defaultTheme.spacing(8),
                paddingBottom: defaultTheme.spacing(8),
                boxSizing: "border-box",
                borderRadius: "6px",
                color: "#B1B1B1",
                width: "550px",
                height: "50px",
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontWeight: "normal",
                fontSize: "14px",
                backgroundColor: "#EFEFEF",
            },
            root:{
                "&$focused":{
                    border:"1px solid #6D9B12",
                    borderRadius:"6px",
                },
                "&$error":{
                    border:"1px solid #FF0000",
                    borderRadius:"6px"
                }
            }
        },
        MuiButton: {

            root: {
                width: "57px",
                height: "19px",
                lineHeight: "19px",
                borderRadius: '6px',
                textTransform: "none"
            },
            label: {
                fontFamily: "Roboto",
                fontStyle: "normal",
                fontSize: "16px",
                fontWeight: 900,
                lineHeight: "19px",
                gridGap: "10px",
                position:"static"

            },
            contained: {
                width: "133px", height: "50px",
                backgroundColor: "#E5E5E5",
                color: "#636363"

            },
            containedSizeSmall: {width: "120px", height: "40px",},
            containedSizeLarge: {width: "270px", height: "50px"},
        }
    },
    palette: {
        primary: {main: "#4285F4"},
        secondary: {main: "#6D9B12"},
        text: {primary: "#FFFFFF"}
    }

})
console.log(theme)
export default theme;
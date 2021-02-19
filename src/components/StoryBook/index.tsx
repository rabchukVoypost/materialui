import React from 'react';
import Button from '../Button'
import Box from '../Box'
import TextField from '@material-ui/core/TextField';
import Typography from "../Typography";

const StoryBook = () => {
    return (
        <Box margin={3}>
            <Box display='flex' flexDirection='column'    width="650px">
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent="space-between" margin={1}>
                    <Button color='secondary' variant='contained' size='large'>Sigh Up</Button>
                    <Button color='secondary' variant='contained'>Sigh Up</Button>
                    <Button color='secondary' variant='contained' size='small'>Sigh Up</Button>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent="space-between" margin={1}>
                    <Button color='primary' variant='contained' size='large'>Sigh Up</Button>
                    <Button color='primary' variant='contained'>Sigh Up</Button>
                    <Button color='primary' variant='contained' size='small'>Sigh Up</Button>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center' justifyContent="space-between" margin={1}>
                    <Button variant='contained' size='large'>Sigh Up</Button>
                    <Button variant='contained'>Sigh Up</Button>
                    <Button variant='contained' size='small'>Sigh Up</Button>
                </Box>
            </Box>
            <Box mb={5}>
                <TextField placeholder="Placeholder" label="Full Name" InputLabelProps={{
                    shrink: true,
                }}/>
                <TextField focused placeholder="Placeholder" label="Email address" InputLabelProps={{
                    shrink: true,
                }}/>
                <TextField error placeholder="Placeholder" label="Password(8 characters)"
                           helperText="Please input your password! The password must be at least 8 characters."
                           InputLabelProps={{
                               shrink: true,
                           }}/>
            </Box>
            <Box display='flex' flexDirection='column' justifyContent="space-between" height="300px">
                <Typography variant="h1">Typography</Typography>
                <Typography variant="h2">Typography</Typography>
                <Typography variant="h3">Typography</Typography>
                <Typography variant="h4">Typography</Typography>
                <Typography variant="h5">Typography</Typography>
                <Typography variant="body1">Typography</Typography>
                <Typography variant="subtitle1">Typography</Typography>
                <Typography variant="subtitle2">Typography</Typography>
            </Box>
        </Box>
    )
}
export default StoryBook;
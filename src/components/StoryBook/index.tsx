import React from 'react';
import Button from '../Button'
import Box from '../Box'
import TextField from '../Textfield';
import Typography from "../Typography";

const StoryBook = () => {
    return (
        <>
            <Box display='flex' justifyContent='center' alignItems='flex-start' flexDirection='column' padding={4}>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Button color='secondary' variant='contained' size='large'>Sigh Up</Button>
                    <Button color='secondary' variant='contained'>Sigh Up</Button>
                    <Button color='secondary' variant='contained' size='small'>Sigh Up</Button>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Button color='primary' variant='contained' size='large'>Sigh Up</Button>
                    <Button color='primary' variant='contained'>Sigh Up</Button>
                    <Button color='primary' variant='contained' size='small'>Sigh Up</Button>
                </Box>
                <Box display='flex' flexDirection='row' alignItems='center'>
                    <Button variant='contained' size='large'>Sigh Up</Button>
                    <Button variant='contained'>Sigh Up</Button>
                    <Button variant='contained' size='small'>Sigh Up</Button>
                </Box>
            </Box>
            <Box display='flex' mt={10} ml={5} alignItems='flex-start' flexDirection='column'>
                <TextField
                    variant="outlined"
                    label="Full Name"
                    defaultValue="Placeholder"
                />
                <TextField
                    focused
                    color="secondary"
                    variant="outlined"
                    label="Email Address"
                    defaultValue="Placeholder"
                />
                <TextField
                    error
                    variant="outlined"
                    label="Password (8 characters)"
                    defaultValue="Placeholder"
                    helperText="Please input your password! The password must be at least 8 characters."
                />

                <Typography variant="h1">Typography</Typography>
                <Typography variant="h2">Typography</Typography>
                <Typography variant="h3">Typography</Typography>
                <Typography variant="h4">Typography</Typography>
                <Typography variant="h5">Typography</Typography>
                <Typography variant="h6">Typography</Typography>
                <Typography variant="subtitle1">Typography</Typography>
                <Typography variant="subtitle2">Typography</Typography>

            </Box>

        </>
    )
}
export default StoryBook
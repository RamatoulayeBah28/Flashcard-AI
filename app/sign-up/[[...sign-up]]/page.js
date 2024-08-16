import {Container, Toolbar, Typography, Button, AppBar, Link,Box} from "@mui/material";
import {SignUp} from '@clerk/nextjs'



export default function SignUpPage(){
    return (<Container maxWifth = "sm">

        <AppBar position="static" sx={{backgroundColor:"#3f51b5"}}>
            <Toolbar>
                <Typography variant="h6" sx={{
                    flexGrow:1
                }}
                >
                    Flashcard SaaS
                </Typography>
                <Button color = "inherit">
                    <Link href="/sign-in" passHref sx={{ color: "white", textDecoration: 'none' }}>
                        Login
                    </Link>
                </Button>

                <Button color = "inherit">
                    <Link href="/sign-up" passHref sx={{ color: "white", textDecoration: 'none' }}> 
                        Sign Up
                    </Link>
                </Button>
            </Toolbar>
        </AppBar>

        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
        >
            <Typography variant="h4">Sign Up</Typography>
            <SignUp/>

        </Box>
    </Container>)
}
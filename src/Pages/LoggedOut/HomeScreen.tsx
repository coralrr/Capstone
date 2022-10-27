import { Box, Button, ButtonGroup, Card, CardActionArea, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import React, {useState} from "react";
import {Navigate} from "react-router-dom";


const HomeScreen = () => {
    const [redirect, setRedirect] = useState(false);
    const [regredirect, setRegRedirect] = useState(false);

    async function sign_up() {
        // TODO: sign up function will go here.
        setRedirect(true);
    }

    async function sign_in() {
        // TODO: login function will go here.
        setRegRedirect(true);
    }

    async function sign_out() {
        // TODO: logout function will go here.
        setRegRedirect(true);
    }

    if (redirect) {
        return <Navigate to = {'/dashboard'}/>;
    }

    if (regredirect) {
        return <Navigate to = {'/register'}/>;
    }


    return (
        <div>
            

            <div className="container">
                <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
                    <a href="/src/Pages" className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none">
                        <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use xlinkHref="#bootstrap"/></svg>
                    </a>

                    <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                        <li><a href="/src/Pages" className="nav-link px-2 link-secondary">Home</a></li>
                        <li><a href="src/Pages/LoggedOut/HomeScreen#" className="nav-link px-2 link-dark">Catalog</a></li>
                        <li><a href="src/Pages/LoggedOut/HomeScreen#" className="nav-link px-2 link-dark">Contrast Calculator</a></li>
                        <li><a href="src/Pages/LoggedOut/HomeScreen#" className="nav-link px-2 link-dark">About</a></li>
                    </ul>

                    <div className="col-md-3 text-end">

                        <Box justifyContent={'space-between'}>
                            <Button
                                style={{
                                    
                                    margin: 5,
                                    padding: 5
                                }}
                                size="small"
                                variant="outlined"
                                color="secondary"
                                onClick={() => sign_in()}>
                                Sign in
                            </Button>
                            
                            <Button
                                style={{
                                    
                                    margin: '0 auto',
                                    padding: 5
                                }}
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => sign_up()}>
                                Sign Up
                            </Button>
                            <Button
                                style={{

                                    margin: '0 auto',
                                    padding: 5
                                }}
                                size="small"
                                variant="contained"
                                color="primary"
                                onClick={() => sign_out()}>
                                Sign Out
                            </Button>
                        </Box>
                    </div>
                </header>

                <main>
                    <Box  display="flex" justifyContent="center" className="row" sx={{ justifyContent: 'space-between', pt: 8 }}>
                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                
                                height="400"
                                image={require('../../assets/images/p.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more perceivable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('../../assets/images/o.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more operable idk
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 350}}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('../../assets/images/u.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more, i forgot what u stands for
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                        <Card sx={{ maxWidth: 310 }}>
                            <CardActionArea>
                                <CardMedia
                                component="img"
                                height="400"
                                image={require('../../assets/images/r.png')}
                                alt="perceivable"
                                />
                                <CardContent>
                                
                                <Typography variant="body2" color="text.secondary">
                                    Something about how website need to be more, yeah i forgot what r stands for too
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>

                    </Box>
                    

                    <Box
                        style={{
                            paddingTop: 100,
                            justifyContent: "center",
                            paddingBottom: 20

                        }}>
                        <Typography align = "center" >To learn more about accessibility with examples, quiz's, and track your progress...</Typography>

                    </Box>
                    <Button
                        style={{
                            display: "flex",
                            margin: '0 auto',
                            padding: 20
                        }}
                        size="large"
                        variant="contained"
                        color="primary"
                        onClick={() => sign_up()}>
                        Get Started - Sign Up
                    </Button>
                </main>
                

            </div>

            
                
        </div>

    )
}

export default HomeScreen;
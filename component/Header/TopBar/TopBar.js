import React from 'react';
import {Container,Image,Input,Grid} from 'semantic-ui-react'
export default function TopBar() {
  return (
    <div className="top-bar">
    <Container>
      <Grid className="top-bar">
        <Grid.Column width={8} className="top-bar__left">
      <Logo/>
        </Grid.Column> 
        <Grid.Column width={8} className="top-bar__rigt">
        <h1>Search</h1>
        </Grid.Column> 
        
      </Grid>
    </Container>
    </div>
  );
}

function Logo () {
  return (
    <Image src ='/l.m.j.1.png' width ='100px' height='100px'alt ='picture'/>
  )
}
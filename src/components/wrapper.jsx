import React from "react";
import {Container, Box, MenuList,Columns} from "bloomer";

const Wrapper = props =>{
    return(
        <Container>
            <MenuList isColor="dark">{props.children}</MenuList>
        </Container>
    )
}

export default Wrapper;


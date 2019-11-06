import React from "react";
import {Container, Box, MenuList} from "bloomer";

const Wrapper = props =>{
    return(
        <Container>
            <Box><MenuList>{props.children}</MenuList></Box>
        </Container>
    )
}

export default Wrapper;


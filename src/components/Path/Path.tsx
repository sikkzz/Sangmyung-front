import { useEffect, useState } from "react";
import { Box, List, ListItem, ListLink } from "./PathElements";

import { useLocation } from "react-router-dom";

const Path = () => {
  const location = useLocation();

  const [path, setPath] = useState([])

//   useEffect(() => {
//     for(let i=0;i<location.pathname.split("/").length;i++){
//         setPath(location.pathname.split("/")[i])
//     }
//   }, [])

  // console.log(location.pathname.split("/"))

  return (
    <Box>
      <List>
        <ListItem>
          {/* <ListLink>HOME</ListLink> */}
        </ListItem>
      </List>
    </Box>
  );
};

export default Path;

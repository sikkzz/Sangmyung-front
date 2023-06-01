import { Box, List, ListItem, ListLink } from "./PathElements";

import { useLocation } from "react-router-dom";

import { PathData, PathData2, PathData3 } from "../../constants/data/PathData";

const Path = () => {
  const location = useLocation();

  return (
    <Box>
      <List>
        <ListItem>
          <ListLink>Home</ListLink>
        </ListItem>
        {PathData.map((item, index) => (
          <ListItem
            key={index}
            style={{
              display:
                item.id === location.pathname.split("/")[1]
                  ? "inline-block"
                  : "none",
            }}
          >
            <ListLink>{item.item}</ListLink>
          </ListItem>
        ))}
        {PathData2.map((item, index) => (
          <ListItem
            key={index}
            style={{
              display:
                item.id === location.pathname.split("/")[2]
                  ? "inline-block"
                  : "none",
            }}
          >
            <ListLink>{item.item}</ListLink>
          </ListItem>
        ))}
        {PathData3.map((item, index) => (
          <ListItem
            key={index}
            style={{
              display:
                item.id === location.pathname.split("/")[3]
                  ? "inline-block"
                  : "none",
            }}
          >
            <ListLink>{item.item}</ListLink>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Path;

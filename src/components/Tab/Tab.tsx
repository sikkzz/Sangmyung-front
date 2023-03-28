import { Container, InnerContainer, Wrapper, Item } from "./TabElements";
import { useLocation, useNavigate } from "react-router";
import { TabData } from "../../constants/data/TabData";

type Props = {
  state: string | undefined;
};

const Tab: React.FC<Props> = ({ state }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Container>
      <InnerContainer>
        <Wrapper>
          {TabData.map((item, index) => (
            <>
              {item.id === state
                ? item.sub_item.map((item, index) => (
                    <Item
                      onClick={() => {
                        navigate(item.link);
                      }}
                      style={{
                        color:
                          location.pathname.split("/")[1] === item.id ||
                          location.pathname.split("/")[2] === item.id
                            ? "rgb(32,71,137)"
                            : "rgb(132,134,134)",

                        borderBottom:
                          location.pathname.split("/")[1] === item.id ||
                          location.pathname.split("/")[2] === item.id
                            ? "2px solid rgb(32,71,137)"
                            : "none",
                      }}
                    >
                      {item.item}
                    </Item>
                  ))
                : ""}
            </>
          ))}
        </Wrapper>
      </InnerContainer>
    </Container>
  );
};

export default Tab;

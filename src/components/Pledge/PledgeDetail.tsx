import {
  Layout,
  Col,
  Box,
  TabBox,
  TabInnerBox,
  TabList,
  TabItem,
  TabItemActive,
} from "./PledgeDetailElements";

import Communication from "./Communication";
import Welfare from "./Welfare";
import Culture from "./Culture";
import Bachelor from "./Bachelor";

import { PledgeTabData } from "../../constants/data/PledgeDetailData";

import { useNavigate } from "react-router-dom";

type Props = {
  state: string | undefined;
};

const PledgeDetail = ({ state }: Props) => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Col>
        <Box>
          <TabBox>
            <TabInnerBox>
              <TabList>
                {PledgeTabData.map((item, index) => (
                  <>
                    {state === item.id ? (
                      <TabItemActive
                        onClick={() => {
                          navigate(item.link);
                        }}
                      >
                        {item.title}
                      </TabItemActive>
                    ) : (
                      <TabItem
                        onClick={() => {
                          navigate(item.link);
                        }}
                      >
                        {item.title}
                      </TabItem>
                    )}
                  </>
                ))}
              </TabList>
            </TabInnerBox>
          </TabBox>

          {state === "communication" ? (
            <Communication />
          ) : state === "culture" ? (
            <Culture />
          ) : state === "welfare" ? (
            <Welfare />
          ) : state === "bachelor" ? (
            <Bachelor />
          ) : (
            ""
          )}
        </Box>
      </Col>
    </Layout>
  );
};

export default PledgeDetail;

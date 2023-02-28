import React from "react";

import { format } from "date-fns";

import { Icon } from "@iconify/react";

import { Layout, Start, End, Text } from "./HeaderElements";

type Props = {
  currentMonth: Date;
  prevMonth: () => void;
  nextMonth: () => void;
};

const Header: React.FC<Props> = ({ currentMonth, prevMonth, nextMonth }) => {
  return (
    <Layout>
      <Start>
        <Text>
          {format(currentMonth, "M")}월 {format(currentMonth, "yyyy")}
        </Text>
      </Start>
      <End>
        <Icon icon="bi:arrow-left-circle-fill" onClick={prevMonth} />
        <Icon icon="bi:arrow-right-circle-fill" onClick={nextMonth} />
      </End>
    </Layout>
  );
};

export default Header;

import { useState } from "react";

import {
	addMonths,
	subMonths,
	format,
	startOfMonth,
	endOfMonth,
	startOfWeek,
	endOfWeek,
	isSameDay,
	addDays,
} from "date-fns";

import {
	Layout,
	Col,
	Box,
	Table,
	THead,
	Tr,
	Td,
	Th,
	TBody,
	WeekBox,
	Week,
	WeekBack,
	Table2,
	WeekContent,
	Link,
	Content,
	Span,
} from "./Elements";

function Test() {
	const [currentMonth, setCurrentMonth] = useState(new Date());
	const [selectedDate, setSelectedDate] = useState(new Date());

	const dates = [];
	const date = ["Sun", "Mon", "Thu", "Wed", "Thrs", "Fri", "Sat"];

	const monthStart = startOfMonth(currentMonth);
	const monthEnd = endOfMonth(monthStart);
	const startDate = startOfWeek(monthStart);
	const endDate = endOfWeek(monthEnd);

	const rows = [];
	let days = [];
	let day = startDate;
	let formattedDate = "";

	for (let i = 0; i < 7; i++) {
		dates.push(<Th key={i}>{date[i]}</Th>);
	}

	while (day <= endDate) {
		for (let i = 0; i < 7; i++) {
			formattedDate = format(day, "d");
			days.push(
				<Td>
					<WeekBox>
						<Week>
							<WeekBack>
								<Table2>
									<TBody>
										<Tr>
											<Td />
										</Tr>
									</TBody>
								</Table2>
							</WeekBack>
							<WeekContent>
								<Table>
									<THead>
										<Tr>
											<Td>{formattedDate}</Td>
										</Tr>
									</THead>
									{/* {formattedDate === "7" ? (
                    
                  ) : (
                    ""
                  )} */}

									{/* <TBody>
                    <Tr>
                      <Td>
                        <Link>
                          <Content>
                            <Span>총학생회비 추가 납부 기간</Span>
                          </Content>
                        </Link>
                      </Td>
                    </Tr>
                  </TBody> */}
								</Table>
							</WeekContent>
						</Week>
					</WeekBox>
				</Td>,
			);
			day = addDays(day, 1);
		}
		rows.push(<Tr>{days}</Tr>);
		days = [];
	}

	return (
		<Layout>
			<Col>
				<Box>
					<Table>
						<THead>
							<Tr>{dates}</Tr>
						</THead>
						<TBody>{rows}</TBody>
					</Table>
				</Box>
			</Col>
		</Layout>
	);
}

export default Test;

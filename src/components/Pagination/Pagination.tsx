import { Nav, Button } from "./PaginationElements";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function Pagination({ total, limit, page, setPage }: any) {
	const numPages = Math.ceil(total / limit);
	const pageArray = new Array(numPages).fill(0);

	return (
		<Nav>
			<Button onClick={() => setPage(page - 1)} disabled={page === 1}>
				&lt;
			</Button>

			{pageArray.map((_, i) => (
				<Button
					key={i + 1}
					onClick={() => setPage(i + 1)}
					aria-current={page === i + 1 ? "page" : undefined}
				>
					{i + 1}
				</Button>
			))}
			<Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
				&gt;
			</Button>
		</Nav>
	);
}

export default Pagination;

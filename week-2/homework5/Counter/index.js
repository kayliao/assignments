const { useState, useRef, forwardRef, createRef, useImperativeHandle } = React;

// function Counter() {
// 	const [num, setNum] = useState(0);
// 	function AddNumber() {
// 		setNum((preState) => preState + 1);
// 	}

// 	return (
// 		<div className="counter">
// 			<li>
// 				<button className="btn_Count" onClick={AddNumber}>
// 					+1
// 				</button>
// 				<span>{num}</span>
// 			</li>
// 		</div>
// 	);
// }

const Counter = forwardRef((_, ref) => {
	const [num, setNum] = useState(0);

	function AddNumber() {
		setNum((preState) => preState + 1);
	}

	useImperativeHandle(ref, () => ({
		AddNumber: AddNumber,
	}));

	return (
		<div className="counter">
			<li>
				<button className="btn_Count" onClick={AddNumber}>
					+1
				</button>
				<span>{num}</span>
			</li>
		</div>
	);
});

function App() {
	const countRef = useRef([]);
	countRef.current[0] = useRef([]);
	countRef.current[1] = useRef([]);
	countRef.current[2] = useRef([]);

	const [counterList, setCounterList] = useState([
		<Counter key={0} ref={countRef.current[0]} />,
		<Counter key={1} ref={countRef.current[1]} />,
		<Counter key={2} ref={countRef.current[2]} />,
	]);

	//countRef.current = counterList.map((counter) => countRef.current[counter.key] ?? createRef());

	// const createNewRef = () => {
	// 	countRef.current[counterList.length] = createRef([]);
	// };

	const AddCounterClick = (event) => {
		countRef.current[counterList.length] = createRef([]);
		setCounterList(
			counterList.concat(
				<Counter
					key={counterList.length}
					ref={countRef.current[counterList.length]}
				/>
			)
		);
	};

	function addAllClick() {
		for (let a = 0; a < counterList.length; a++) {
			countRef.current[a].current.AddNumber();
		}
		//countRef.current[0].current.AddNumber();
	}

	// function test(){
	// 	countRef.current = [0,0,0,0].map(
	// 		(ref, index) =>   countRef.current[index] = React.createref()
	// 		)
	// }

	// const handleCopyUsername = (e, index) => {
	//   countRef.current[index].current.AddNumber();
	// };

	return (
		<div>
			<button onClick={addAllClick}>All +1</button>
			{counterList}
			<button onClick={AddCounterClick}>Add a Counter</button>
		</div>
	);
}

ReactDOM.render(<App />, document.getElementById("root"));

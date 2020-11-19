import React, { useState } from 'react';

import Header from './Header';

// JSX (JavaScript XML)

function App() {
	const [count, setCount] = useState(0);

	// Array [valor, funcaoDeAtualizacao]

	function increment() {
		setCount(count + 1);
	}

	return (
		<div>
			<Header title={"Contador: " + count} />
			
			<button onClick={increment}>Incrementar</button>
		</div>
	);
}

export default App;

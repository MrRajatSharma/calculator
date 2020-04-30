import React from 'react';
import './style.scss';

export default function Calculator() {
	const [value, setValue] = React.useState("");
	const handleChange = (e) => {
		setValue(e.target.value);
	}

	const handleBtnClick = (val) => {		
		let newValue = value;
		if (typeof val != 'number' && isNaN(parseInt(value[value.length - 1]))) {
			// if last character is operator
			// replace last char
			newValue = `${newValue.slice(0, value.length - 1)}${val}`
		} else {
			newValue = `${value}${val}`;
		}

		setValue(newValue);
	}


	const handleSubmit = e => {
		const newValue = eval(value);
		setValue(newValue.toString());
	}

	return (
		<div component="main" style={{ padding: '1rem 3rem 1rem' }}>
			<table>
				<tr>
					<td colSpan="4" style={{ width: '100%', height: '65px', margin: '0px' }}>
						<input className="input" onChange={handleChange} value={value}/>
					</td>
				</tr>
				<tr>
					<td onClick={(e) => handleBtnClick(7)}>
						7
					</td>
					<td onClick={(e) => handleBtnClick(8)}>
						8
					</td>
					<td onClick={(e) => handleBtnClick(9)}>
						9
					</td>
					<td onClick={(e) => handleBtnClick("/")}>
						/
					</td>
				</tr>
				<tr>
					<td onClick={(e) => handleBtnClick(4)}>
						4
					</td>
					<td onClick={(e) => handleBtnClick(5)}>
						5
					</td>
					<td onClick={(e) => handleBtnClick(6)}>
						6
					</td>
					<td onClick={(e) => handleBtnClick("*")}>
						x
					</td>
				</tr>
				<tr>
					<td onClick={(e) => handleBtnClick(1)}>
						1
					</td>
					<td onClick={(e) => handleBtnClick(2)}>
						2
					</td>
					<td onClick={(e) => handleBtnClick(3)}>
						3
					</td>
					<td onClick={(e) => handleBtnClick("-")}>
						-
					</td>
				</tr>
				<tr>
					<td onClick={(e) => handleBtnClick(0)}>
						0
					</td>
					<td onClick={(e) => handleBtnClick("+")}>
						+
					</td>
					<td onClick={(e) => setValue("")}>
						C
					</td>
					<td className="equal" onClick={handleSubmit}>
						=
					</td>
				</tr>
			</table>
		</div>
	);
}

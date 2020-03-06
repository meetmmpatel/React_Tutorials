import React from "react";
import TernaryRendering from "./TernaryRendering";
import MultipleRendering from "./MultipleRendering";

export default function ConditionalRendering() {
	return (
		<div>
			<List list={users}></List>
			<TernaryRendering></TernaryRendering>
			<MultipleRendering></MultipleRendering>
		</div>
	);
}

function List({ list }) {
	if (!list) {
		return null;
	} else {
		return (
			<div>
				{list.map(item => (
					<Item key={item.id} item={item}></Item>
				))}
			</div>
		);
	}
}

const users = [
	{ id: 1, firstName: "Mike", lastName: "Miller" },
	{ id: 2, firstName: "John", lastName: "Smith" }
];
function Item({ item }) {
	return (
		<div>
			<li>
				{item.id}
				{item.firstName}
				{item.lastName}
			</li>
		</div>
	);
}

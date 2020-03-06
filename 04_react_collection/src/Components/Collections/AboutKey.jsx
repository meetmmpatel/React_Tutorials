import React from "react";

export default function AboutKey() {
	return (
		<div>
			<h2>React Collections (keys and List)</h2>
			<ListItem></ListItem>
			<IDWithTitle></IDWithTitle>
			<TitleWithContent></TitleWithContent>
		</div>
	);
}

const nameList = ["Java", "JavaScript", "JavaEE", "ES6", "Java"];

const ListItem = () => {
	return nameList.map((names, index) => <li key={index}>{names}</li>);
};

const IDWithTitle = () => {
	return data.map((item, index) => {
		return (
			<li key={index}>
				{item.id} {item.title}
			</li>
		);
	});
};

const TitleWithContent = () => {
	return data.map((item, index) => {
		return (
			<li key={index}>
				{item.title}
				{item.content}
			</li>
		);
	});
};

const data = [
	{ id: 1, title: "First Data", content: "news" },
	{ id: 2, title: "Second Data", content: "RSS FEED" },
	{ id: 3, title: "Third Data", content: "Blog" },
	{ id: 4, title: "Four Data", content: "Live" }
];

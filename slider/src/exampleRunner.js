import $ from "jquery";

window.runExample = async function (path) {
	const fetched = await fetch(`../2024_04_HolyJS/examples/${path}.js`, {
		headers: {
			"Content-Type": "text/plain",
		},
	});
	const src = await fetched.text();
	eval(src);
};
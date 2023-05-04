

async function findId(name) {
	let response = await fetch('https://kahoot.it/rest/kahoots/?query='+encodeURIComponent(name))
	let data = await response.json();
	return await data.entities[0].card.uuid;
}

async function findKahoot(name) {
	let id = await findId(name);
	let response = await fetch('https://kahoot.it/rest/kahoots/'+id);
	return await response.json()
}


findKahoot('iron man science and engineering').then(data => {
	console.log(data.questions.map(x => {
		x.choices
	}))
});
// ==UserScript==
// @name         Kahoot Question ESP
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       dweltstorm
// @match        https://kahoot.it/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=kahoot.it
// @grant        none
// @require      https://code.jquery.com/jquery-3.6.4.js
// ==/UserScript==
/* globals $ */


async function findId(name) {
	let response = await fetch('/rest/kahoots/?query='+encodeURIComponent(name))
	let data = await response.json();
	return await data.entities[0].card.uuid;
}

async function findKahoot(name) {
	let id = await findId(name);
	let response = await fetch('/rest/kahoots/'+id);
	return await response.json()
}
function quizId() {
    return $("[data-functional-selector='question-index-counter']").text().match(/^\d+/g)[0];
}
var kahoot;

findKahoot(prompt('Enter kahoot name')).then(data => {kahoot = data})

function getAnswers() {
    return kahoot.questions.map(x => {
        return x.choices.filter(y => {
            return y.correct
        }).map(y => x.choices.indexOf(y))
	})[$("[data-functional-selector='question-index-counter']").text().match(/^\d+/g)[0]-1]
}

function boxes() {
    return [
        $("[data-functional-selector='answer-0']"),
        $("[data-functional-selector='answer-1']"),
        $("[data-functional-selector='answer-2']"),
        $("[data-functional-selector='answer-3']")
    ]
}

$(window).keyup(e => {
    if(e.key == 'H') {
        boxes().map(x => {
            if(getAnswers().includes(boxes().indexOf(x))) {
                x.css({'background-color':'green'})
            } else {
                x.css({'background-color':'black'})
            }
        })
    }
})

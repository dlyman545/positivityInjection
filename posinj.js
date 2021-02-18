var positivity = [
	'You\'re badass!',
	'You can do it! All night long!',
	'Better to remain silent and be thought a fool than to speak out and remove all doubt.',
	'If I were two-faced, would I be wearing this one?',
	'The best thing about the future is that it comes one day at a time.',
	'The only mystery in life is why the kamikaze pilots wore helmets.',
	'Light travels faster than sound. This is why some people appear bright until you hear them speak.',
	'Nobody realizes that some people expend tremendous energy merely to be normal.',
	'Men marry women with the hope they will never change. Women marry men with the hope they will change. Invariably they are both disappointed.',
	'The difference between stupidity and genius is that genius has its limits.',
	'The average dog is a nicer person than the average person.',
]

function posInjFn() {
	var randNum = Math.floor(Math.random() * (positivity.length));
	document.getElementById('posDisplay').innerHTML = positivity[randNum];
}
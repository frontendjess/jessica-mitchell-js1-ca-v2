const baseUrl = '';
const liplinersArray = [];

async function getMakeup(url) {
	try {
		document.querySelector('#loadingGif').innerHTML += `
        <img class="loadingGif" src="https://hackernoon.com/images/0*4Gzjgh9Y7Gu8KEtZ.gif">
        `;

		const response = await fetch(
			'https://noroffcors.herokuapp.com/http://makeup-api.herokuapp.com/api/v1/products.json'
		);
		const jsonResult = await response.json();
		const res = jsonResult;

		// for (let i = 0; i < res.length; i++) {
		// 	if (i === 5) {
		// 		break;
		// 	}
		// }

		const liplinerToggle = document.querySelector('#lipliner');

		document.querySelector('#liplinerBtn').onclick = function () {
			console.log('The button has been clicked');
			for (let i = 0; i < res.length; i++) {
				if (res[i].product_type === 'lip_liner') {
					// console.log(rickMortyArray[i]);
					// liplinersArray.push(res[i]);
					liplinerToggle.classList.toggle('hide');
					document.querySelector('#lipliner').innerHTML += `
						<div class="card">
							<img src="${res[i].image_link}" class="images" />
							<br>
							Brand: ${res[i].brand}
							<br>
							Name: ${res[i].name}
							<br>
						</div>
					`;
				}
			}

			// document.querySelector('#liplinerBtn').onclick = function () {
			// 	document.querySelector('#lipliner').innerHTML =
			// 		'closed, please refresh to load again';
			// };
		};
	} catch (error) {
		document.querySelector('#alert').innerHTML = showAlertTouser(
			'An Error occured',
			'danger'
		);
	} finally {
		document.querySelector('#loadingGif').innerHTML = '';
	}
}

getMakeup(baseUrl);

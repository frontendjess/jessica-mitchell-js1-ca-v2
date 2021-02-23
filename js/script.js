const baseUrl = '';

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

		for (let i = 0; i < res.length; i++) {
			if (i === 50) {
				break;
			}
			document.querySelector('main').innerHTML += `
                <div class="card">
                    <div class="card__body">
                        <img src="${res[i].image_link}" /><br>
                        <p class="card__desc">${res[i].name}</p> 
                        <p class="card__desc"></p> 
                        <p class="card__desc"></p>
                    </div>
                </div>
            `;
		}
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

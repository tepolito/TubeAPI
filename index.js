const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search"

function getAPIData(searchTerm, callBack)
{
	const query = {
		q: `${searchTerm} in:name`,
		part:`snippet`,
		key:'AIzaSyAIpBNlyyGDv4dPtB_eKDg-JIbpnhKlDCY',
	}

	$.getJSON(YOUTUBE_API_URL, query, callBack);

}


function displayAPIData(data)
{
	const results = data.items.map(function (item, index)
	{
		return `<div>
	<img src="${item.snippet.thumbnails.default.url}">
	</div>`;
	})

	console.log(results[1]);

	$('.js-results').html(results);
}

function watchSubmit()
{
	$('.js-search-form').submit(function (event)
	{
		event.preventDefault();

		const queryText = $(event.currentTarget).find('.js-search-text');

		const query = queryText.val();

		queryText.val('');

		console.log(query);

		getAPIData(query, displayAPIData);
	})
}

$(watchSubmit());
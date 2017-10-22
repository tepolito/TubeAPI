const YOUTUBE_API_URL = "https://www.googleapis.com/youtube/v3/search"

function watchSubmit()
{
	$('.js-search-form').submit(function (event)
	{
		event.preventDefault();

		const queryText = $(event.currentTarget).find('.js-search-text');

		const query = queryText.val();

		queryText.val('');

		console.log(query);
	})
}

$(watchSubmit());
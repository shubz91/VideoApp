"use strict";

import axios from 'axios'

export const getVideoList = (page, limit=10) => {
	return axios.get('https://api.dailymotion.com/videos', {
		params: {
			fields:["id", "title", "channel", "thumbnail_120_url"].join(","),
			channel:'sport',
			limit:limit,
			page:page
		}
	})
	.then((res) => res.data)
	.catch((err) => console.error(err))
}

export const getCategories = (page, limit=10) => {
	return axios.get('https://api.dailymotion.com/channels', {
		params: {
			fields:["id", "name", "description"].join(","),
			sort:'alpha',
			limit:limit,
			page:page
		}
	})
	.then((res) => res.data)
	.catch((err) => console.error(err))
}


// export default { getVideoList, getCategories }
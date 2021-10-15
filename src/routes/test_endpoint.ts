/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

function delayed() {
    console.log('1 Second passed')
}

export async function get({ body }) {
    console.log('request')
    setTimeout(delayed, 1000)
	return {
		status: 200
	};
	
	
	
}

/**
 * @type {import('@sveltejs/kit').RequestHandler}
 */

export async function get({ body }) {
    console.log('request')

	return {
		status: 200
	};
	
	
	
}

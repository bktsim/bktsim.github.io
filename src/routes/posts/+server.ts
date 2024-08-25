import { json } from '@sveltejs/kit';

const fetchMarkdownPosts = async () => {
	const allPostFiles = import.meta.glob('/src/lib/blogs/*.md');
	const iterablePostFiles = Object.entries(allPostFiles);

	const allPosts = await Promise.all(
		iterablePostFiles.map(async ([path, resolver]) => {
			const { metadata } = await resolver();
			const postPath = path.slice(15, -3);

			return {
				meta: metadata,
				path: postPath
			};
		})
	);

	return allPosts;
};


export const GET = async () => {
	const allPosts = await fetchMarkdownPosts();

	const sortedPosts = allPosts.sort((a, b) => {
		// @ts-expect-error - there is no error!
		return new Date(b.meta.date) - new Date(a.meta.date);
	});

	return json(sortedPosts);
};

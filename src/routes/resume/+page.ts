import { base } from '$app/paths';
import { redirect } from '@sveltejs/kit';

export function load() {
	redirect(308, `${base}/resume.pdf`);
}
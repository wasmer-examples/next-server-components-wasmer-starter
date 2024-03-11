import Stories from 'components/stories'
import fetchData from 'lib/fetch-data'

export const dynamicParams = true
export const runtime = 'edge';

export async function generateStaticParams() {
  return [1]
}

export default async function RSCPage({ params }) {
  const { page } = params
  const storyIds = await fetchData('topstories')
  return <Stories page={page} storyIds={storyIds} />
}

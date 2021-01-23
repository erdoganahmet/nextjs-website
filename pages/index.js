import Layout from '../components/layout'
import Head from 'next/head'
import Link from 'next/link'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function HomePage({ characters }) {
  return (
    <Layout>
      <Head>
        <title>Anasayfa</title>
      </Head>
      <h1>Merhaba!</h1>
      {/* https://rickandmortyapi.com/documentation/#get-all-characters */}
      <ul>
        {characters.results.map((character) => (
          <li key={character.id}>
            <Link
              href="/character/[slug]"
              as={`/character/${slug(character.name)}-${character.id}`}
            >
              <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>

      <p>lorem ipsum dolor</p>
      <style jsx>{`
        p {
          color: orange;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticProps() {
  // data fetch // await : data'yı çekene kadar beklemesini sağlıyor.
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()
  // console.log(characters)
  return {
    props: {
      characters
    } // key ve value aynı isimde olunca bir tane yazmak yetiyor, characters: characters yazmaya gerek yok.
    // will be passed to the page component as props
  }
}

export default HomePage

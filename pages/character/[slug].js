import Layout from '../../components/layout'
import Head from 'next/head'
import unfetch from 'isomorphic-unfetch'
import slug from 'slug'

function CharacterDetail({ character }) {
  return (
    <Layout>
      <Head>
        <title>Ana sayfa</title>
      </Head>

      <h1>{character.name}</h1>

      <figure>
        <img src={character.image} alt={character.name} />
      </figure>
    </Layout>
  )
}

export async function getStaticPaths() {
  const data = await unfetch('https://rickandmortyapi.com/api/character')
  const characters = await data.json()

  const paths = characters.results.map((character) => {
    return { params: { slug: `${slug(character.name)}-${character.id}` } }
  })

  return {
    paths,
    fallback: false // See the "fallback" section below
  }
}

export async function getStaticProps({ params }) {
  const id = params.slug.split('-').slice(-1)[0]
  // data fetch // await : data'yı çekene kadar beklemesini sağlıyor.
  const data = await unfetch('https://rickandmortyapi.com/api/character/' + id)
  const character = await data.json()

  return {
    props: {
      character
    } // key ve value aynı isimde olunca bir tane yazmak yetiyor, characters: characters yazmaya gerek yok.
    // will be passed to the page component as props
  }
}

export default CharacterDetail

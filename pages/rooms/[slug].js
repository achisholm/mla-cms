import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'

const Room = ({ room }) => {
  if (!room) return <div>not found</div>

  const { html, attributes } = room

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>
        
        <img src={attributes.thumbnail} />
        
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>

      <style jsx>{`
        article {
          margin: 0 auto;
        }
        h1 {
          font-weight: bold;
          padding: 3em 0;
          text-align: center;
        }
      `}</style>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), 'content/rooms'))
    .map((roomName) => {
      const trimmedName = roomName.substring(0, roomName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const room = await import(`../../content/rooms/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      room: room.default,
    },
  }
}

export default Room

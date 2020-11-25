import Link from 'next/link'
import Layout from '../../components/layout'

const importRooms = async () => {
  const markdownFiles = require
    .context('../../content/rooms', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/rooms/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Rooms = ({ roomsList }) => (
  <Layout>
    {roomsList.map((room) => (
      <div key={room.slug} className="room">
        <Link href="/rooms/[slug]" as={`/rooms/${room.slug}`}>
          <a>
            <img src={room.attributes.thumbnail} />
            <h2>{room.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    <style jsx>{`
      .room {
        text-align: center;
      }
      img {
        max-width: 100%;
        max-height: 300px;
      }
    `}</style>
  </Layout>
)

export async function getStaticProps() {
  const roomsList = await importRooms()

  return {
    props: {
      roomsList,
    }, // will be passed to the page component as props
  }
}

export default Rooms

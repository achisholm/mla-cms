import fs from 'fs'
import path from 'path'
import Layout from '../../components/layout'

const Post = ({ project }) => {
  if (!project) return <div>not found</div>

  const { html, attributes } = project

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
    .readdirSync(path.join(process.cwd(), 'content/projects'))
    .map((projectName) => {
      const trimmedName = projectName.substring(0, projectName.length - 3)
      return {
        params: { slug: trimmedName },
      }
    })

  return {
    paths,
    fallback: false, // constrols whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  }
}

export async function getStaticProps({ params }) {
  const { slug } = params

  const project = await import(`../../../content/projects/${slug}.md`).catch(
    () => null
  )

  return {
    props: {
      project: project.default,
    },
  }
}

export default Post

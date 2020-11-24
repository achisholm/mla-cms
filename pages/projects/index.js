import Link from 'next/link'
import Layout from '../../components/layout'

const importProjects = async () => {
  // https://webpack.js.org/guides/dependency-management/#requirecontext
  const markdownFiles = require
    .context('../../content/projects', false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2))

  return Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`../../content/projects/${path}`)
      return { ...markdown, slug: path.substring(0, path.length - 3) }
    })
  )
}

const Projects = ({ projectsList }) => (
  <Layout>
    {projectsList.map((project) => (
      <div key={project.slug} className="project">
        <Link href="/project/[slug]" as={`/projects/${project.slug}`}>
          <a>
            <img src={project.attributes.thumbnail} />
            <h2>{project.attributes.title}</h2>
          </a>
        </Link>
      </div>
    ))}
    
    <style jsx>{`
      .project {
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
  const projectsList = await importProjects()

  return {
    props: {
      projectsList,
    }, // will be passed to the page component as props
  }
}

export default Projects

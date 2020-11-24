import Layout from '../components/layout'
import { attributes, html } from '../content/home.md'

const Home = () => (
  <Layout>
    
    <style jsx>{`
      h2 {
        font-weight: bold;
        text
      }

      div {
        text-align: center;
      }
    `}</style>
    
    <section className="hero">
      <div className="container container--hero">
        <a href="https://www.mlaccessories.co.uk">

          <h1>{attributes.title}</h1>

          {/* <picture>
            <source media="(min-width: 751px)" srcset="https://static.mlaccessories.co.uk/image/459862-2086x917/459862.webp" type="image/webp" />
            <source media="(max-width: 750px)" srcset="https://static.mlaccessories.co.uk/image/459856-2086x917/459856.webp" type="image/webp" />
            <img className="hero__image" src="https://static.mlaccessories.co.uk/image/459862-2086x917/459862.jpg" alt="" type="image/webp" />
          </picture> */}
        </a>
      </div>
    </section>
    
    <div dangerouslySetInnerHTML={{ __html: html }} />

  </Layout>
)

export default Home

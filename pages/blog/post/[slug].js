import fs from "fs";
import path from "path";
import Layout from "../../../components/layout";

function TwoColumnImageBlock(props) {
  return (
    <div>
      <p>This is the 2-column image block</p>
      <img src={props.image1} />
      <img src={props.image2} />

      <style jsx>{`
        img {
          border: 1px solid red;
        }
      `}</style>
    </div>
  
  );
}

function ThreeColumnImageBlock(props) {
  return (
    <div>
      <p>This is the 3-column image block</p>
      <img src={props.image1} />
      <img src={props.image2} />
      <img src={props.image3} />
      
      <style jsx>{`
        img {
          border: 1px solid blue;
        }
      `}</style>
    </div>
  );
}

function CaptionImageBlock(props) {
  return (
    <div style={{display:'flex'}}>
      <div>
        <p>This is the Caption and Image Block</p>
        <h2>{props.captionTitle}</h2>
        <p>{props.captionBody}</p>
      </div>
      <div>
        <img src={props.image} />
      </div>
    </div>
  );
}

function CaptionVideoBlock(props) {
  let platform = props.platform;
  let embedCode;
  if (platform == "YouTube") {
    embedCode = <div>Youtube embed code for {props.videoId} goes here</div>;
  } else if (platform == "Vimeo") {
    embedCode = <div>Vimeo embed code for {props.videoId} goes here</div>;
  }

  return (
    <div style={{display:'flex'}}>
      <div>
        <p>This is the Caption and Video Block</p>
        <h2>{props.captionTitle}</h2>
        <p>{props.captionBody}</p>
      </div>
      <div>{embedCode}</div>
    </div>
  );
}

const Post = ({ blogpost }) => {
  if (!blogpost) return <div>not found</div>;

  const { html, attributes } = blogpost;
  let blocksList;

  if (attributes.block) {
    blocksList = attributes.block.map(function (block) {
      
      if (block.type == "2-column-image") {
        return (
          <TwoColumnImageBlock
            image1={block["image-1"]}
            image2={block["image-2"]}
          />
        );
      } else if (block.type == "3-column-image") {
        return (
          <ThreeColumnImageBlock
            image1={block["image-1"]}
            image2={block["image-2"]}
            image3={block["image-3"]}
          />
        );
      } else if (block.type == "caption-image") {
        return (
          <CaptionImageBlock
            captionTitle={block.title}
            captionBody={block.body}
            image={block.image}
          />
        );
      } else if (block.type == "caption-video") {
        return (
          <CaptionVideoBlock
            captionTitle={block.title}
            captionBody={block.body}
            platform={block.platform}
            videoId={block.videoId}
          />
        );
      }
    });
  }

  return (
    <Layout>
      <article>
        <h1>{attributes.title}</h1>

        <img src={attributes.thumbnail} />

        <div dangerouslySetInnerHTML={{ __html: html }} />

        {blocksList}

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
  );
};

export async function getStaticPaths() {
  const paths = fs
    .readdirSync(path.join(process.cwd(), "content/blogPosts"))
    .map((blogName) => {
      const trimmedName = blogName.substring(0, blogName.length - 3);
      return {
        params: { slug: trimmedName },
      };
    });

  return {
    paths,
    fallback: false, // controls whether not predefined paths should be processed on demand, check for more info: https://nextjs.org/docs/basic-features/data-fetching#the-fallback-key-required
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;

  const blogpost = await import(`../../../content/blogPosts/${slug}.md`).catch(
    () => null
  );

  return {
    props: {
      blogpost: blogpost.default,
    },
  };
}

export default Post;

import fs from "fs";
import path from "path";
import Layout from "../../../components/layout";
import TwoColumnImageBlock from "../../../components/content-blocks/TwoColumnImageBlock";
import ThreeColumnImageBlock from "../../../components/content-blocks/ThreeColumnImageBlock";
import CaptionImageBlock from "../../../components/content-blocks/CaptionImageBlock";
import CaptionVideoBlock from "../../../components/content-blocks/CaptionVideoBlock";

import styles from '../../../styles/article.module.scss'

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
      <header className={styles.header}>
        <h1 className={styles.h1}>{attributes.title}</h1>
        <div className={styles.intro} dangerouslySetInnerHTML={{ __html: html }} />
      </header>

      <div className={styles.contentBlocks}>
        <div className="container">
          {blocksList}
        </div>
      </div>
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
    fallback: false,
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

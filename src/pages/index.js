import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/seo";
import Container from "../components/container";
import "../css/styles.css";
export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.nodes;
  return (
    <Container>
      <SEO title={siteTitle} />
      {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <div key={post.slug}>
            <Link to={post.slug}>
              {!!post.frontmatter.cover ? (
                <image sizes={post.frontmatter.cover.childImageSharp.sizes} />
              ) : null}
              <h1 className="heading">{title}</h1>
              <p className="paragraph">{post.frontmatter.date}</p>
              <p className="paragraph">{post.frontmatter.description}</p>
            </Link>
          </div>
        );
      })}
    </Container>
  );
}

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        slug
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`;

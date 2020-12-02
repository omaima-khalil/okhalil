import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

import React from "react";
import Container from "../components/container";

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  console.log(data.mdx.html);
  return (
    <Container>
      <h1 className="post-heading">{frontmatter.title}</h1>
      <p className="post-date">{frontmatter.date}</p>

      <article className="post-body">
        <MDXRenderer>{body}</MDXRenderer>
      </article>

      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <button className="previous-next-button">
                {previous.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <button className="previous-next-button">
                {next.frontmatter.title}
              </button>
            </Link>
          )}
        </>
      )}
    </Container>
  );
};
export default blogPosts;
export const query = graphql`
  query PostsBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        date(formatString: "Do MMMM YYYY ")
      }
    }
  }
`;

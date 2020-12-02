import { graphql, Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";
import Container from "../components/container";

const blogPosts = ({ data, pageContext }) => {
  const { frontmatter, body } = data.mdx;
  const { previous, next } = pageContext;
  return (
    <Container>
      <h1 className="heading">{frontmatter.title}</h1>
      <p className="paragraph">{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
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
        date(formatString: "YYYY MMMM Do")
      }
    }
  }
`;

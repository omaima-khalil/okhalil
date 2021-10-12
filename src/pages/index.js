import React from "react";
import { Link, graphql } from "gatsby";
import SEO from "../components/Seo";
import Container from "../components/Container";
import Hero from "../components/Hero"
import Footer from "../components/Footer";

export default function Home({ data, location }) {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const siteDescription = data.site.siteMetadata.description;
  const posts = data.allMdx.nodes;

  return (
    <div>
   
    <SEO title={siteTitle} description={siteDescription} />
    <Hero/>
    <section className="main">
   
   {posts.map((post) => {
        const title = post.frontmatter.title || post.fields.slug;

        return (
          <div className="card" key={post.slug}>
            <Link className="card-link" to={post.slug}>
              <h1 className="card-title">{title}</h1>
              <p className="card-date">{post.frontmatter.date}</p>
              <p className="card-description">{post.frontmatter.description}</p>
            </Link>
          </div>
        );
      })}
    </section>
    <Footer/>
    </div>
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
          date(formatString: "Do MMMM YYYY ")
          title
          description
        }
      }
    }
  }
`;

import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Idea and JS code from https://github.com/johnnyreilly/blog.johnnyreilly.com/blob/main/blog-website/src/pages/blog-handrolled.js

// Define a TypeScript interface for BlogPost
interface BlogPost {
    date: string;
    formattedDate: string;
    title: string;
    permalink: string;
}

// Util function to require context, specific to Webpack
declare const require: {
    context: (path: string, deep?: boolean, filter?: RegExp) => {
        keys: () => string[];
        (key: string): { metadata: BlogPost };
    };
};

// Load all blog posts
const allPosts: BlogPost[] = ((ctx) => {
    const blogpostNames: string[] = ctx.keys();

    return blogpostNames.reduce<BlogPost[]>((blogposts, blogpostName) => {
        const module = ctx(blogpostName);
        const { date, formattedDate, title, permalink } = module.metadata;
        return [
            ...blogposts,
            {
                date,
                formattedDate,
                title,
                permalink,
            },
        ];
    }, []);
})(require.context('../../blog', true, /\.md$/));

// Group posts by year
const postsByYear = allPosts.reduceRight<Map<string, BlogPost[]>>((posts, post) => {
    const year = post.date.split('-')[0];
    const yearPosts = posts.get(year) || [];
    return posts.set(year, [post, ...yearPosts]);
}, new Map());

// Create an array of years with their posts
const yearsOfPosts = Array.from(postsByYear, ([year, posts]) => ({
    year,
    posts,
}));

// Year component props interface
interface YearProps {
    year: string;
    posts: BlogPost[];
}

// Year component
const Year: React.FC<YearProps> = ({ year, posts }) => {
    return (
        <div className={clsx('col col--4', styles.feature)}>
            <h3>{year}</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.date}>
                        <Link to={post.permalink}>
                            {post.formattedDate} - {post.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

// BlogArchive component
const BlogArchive: React.FC = () => {
    const { siteConfig } = useDocusaurusContext();

    // Structured data for breadcrumbs
    const breadcrumbStructuredData = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        name: 'Blog breadcrumb',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: siteConfig.url,
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: 'Blog',
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbStructuredData),
                }}
            />
            <Layout title="Blog Archive">
                <header className={clsx('hero hero--primary', styles.heroBanner)}>
                    <div className="container">
                        <h1 className="hero__title">Blog Archive</h1>
                        <p className="hero__subtitle">Here you can find all blog posts chronologically</p>
                    </div>
                </header>
                <main>
                    {yearsOfPosts && yearsOfPosts.length > 0 && (
                        <section className={styles.features}>
                            <div className="container">
                                <div className="row">
                                    {yearsOfPosts.map((props, idx) => (
                                        <Year key={idx} {...props} />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}
                </main>
            </Layout>
        </>
    );
}

export default BlogArchive;

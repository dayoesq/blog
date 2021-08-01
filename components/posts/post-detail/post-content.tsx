import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import atomDark from 'react-syntax-highlighter/dist/cjs/styles/prism/atom-dark';
import js from 'react-syntax-highlighter/dist/cjs/languages/prism/javascript';

import PostHeader from './post-header';

import classes from './post-content.module.css';

SyntaxHighlighter.registerLanguage('js', js);

// Due to the build size of SyntaxHighlighter, it is good to import only required language(s)

type PostProps = {
  post: IPost;
};

const PostContent: React.FC<PostProps> = ({ post }) => {
  const imagePath = `/images/posts/${post.slug}/${post.image}`;

  const customRenderers = {
    p(paragraph: any) {
      const { node } = paragraph;
      if (node.children[0].tagName === 'img') {
        const image = node.children[0];
        return (
          <div className={classes.image}>
            <Image
              src={`/images/posts/${post.slug}/${image.properties.src}`}
              alt={image.properties.alt}
              width={600}
              height={300}
            />
          </div>
        );
      }
      return <p>{paragraph.children}</p>;
    },
    code(code: any) {
      const { className, children } = code;
      const language = className.split('-')[1];
      return (
        <SyntaxHighlighter
          language={language}
          style={atomDark}
        >
          {children}
        </SyntaxHighlighter>
      );
    }
  };

  return (
    <article className={classes.content}>
      <PostHeader image={imagePath} title={post.title} />
      <ReactMarkdown components={customRenderers}>
        {post.content ? post.content : ''}
      </ReactMarkdown>
    </article>
  );
};

export default PostContent;



import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirPath = path.join(process.cwd(), 'posts');

export const getPostFiles = () => {
  return fs.readdirSync(postsDirPath);
};

export const getPostData = (postIdentifier: string) => {
  const postSlug = postIdentifier.replace(/\.md$/, '');
  const filePath = path.join(postsDirPath, `${postSlug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content }  = matter(fileContent);
  
  const postData: IPost = {
    slug: postSlug,
    ...data,
    content
  };
  return postData;
};

export const getAllPosts = (): IPost[] => {
  const postFiles = getPostFiles();
  const allPosts = postFiles.map(postFile => {
    return getPostData(postFile);
  });
  const sortedPosts = allPosts.sort((postA, postB) => (postA.date ? postA.date : '') > (postB.date ? postB.date : '') ? -1 : 1);
  return sortedPosts;
};

export const getFeaturedPosts = (): IPost[] => {
  const allPosts = getAllPosts();
  const featuredPosts = allPosts.filter(post => post.isFeatured);
  return featuredPosts;
};


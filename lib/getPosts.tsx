import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content")

export function getPosts(): Post[] {

    if(!fs.existsSync(postsDirectory)) {
        return [];
    }

    const fileNames = fs.readdirSync(postsDirectory);

     const allposts = fileNames.filter((fileName) => fileName.endsWith(".mdx")).map((fileName) => {

        const slug = fileName.replace(/\.mdx$/, '');

        const fullPath = path.join(postsDirectory, fileName);

        const fileContent = fs.readFileSync(fullPath, 'utf8');

        const { data, content, } = matter(fileContent);

        return {
            slug, 
            content,
            date: data.date,
            title: data.title,
            image: data.image
        }
    });

    return allposts;

}


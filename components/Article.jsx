// components/Article.js
export default function Article({ title, description, image, linkText, linkUrl }) {
  return (
    <article className="flex flex-col">
      <h3 className="font-dela uppercase text-[1rem] md:text-[1.15rem] leading-[1.08] mb-4">
        {title}
      </h3>
      <p className="text-[1.02rem] leading-[1.2] text-black/80">
        {description}
      </p>
      {image && (
        <img src={image} alt={title} className="mt-6 w-full rounded-[20px]" />
      )}
      {linkUrl && (
        <a href={linkUrl} className="mt-4 inline-block border-b border-black pb-1 uppercase text-sm font-bold">
          {linkText || "Read more"}
        </a>
      )}
    </article>
  );
}
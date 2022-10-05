import { Project } from "../utils/data.ts";

export default function ProjectWidget(
  { title, description, imageLink, location }: Project,
) {
  return (
    <a
      class="border-1 border-brown shadow rounded flex w-[500px] p-4 gap-8 items-center"
      href={`https://www.google.com/maps/search/${location}`}
      target="_blank"
      rel="noopener"
    >
      <img
        class="w-20 h-20 md:w-32 md:h-32 rounded object-cover"
        src={imageLink}
        alt={title}
      />
      <div>
        <h1 class="text-brown text-2xl">{title}</h1>
        <p>{description}</p>
      </div>
    </a>
  );
}

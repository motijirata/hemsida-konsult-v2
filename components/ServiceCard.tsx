type Props = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export default function ServiceCard({ title, description, image, href }: Props) {
  return (
    <a
      href={href}
      aria-label={title}
      className="block bg-white bg-opacity-90 rounded-xl shadow-md hover:shadow-xl transition hover:ring-2 hover:ring-blue-500 backdrop-blur-sm overflow-hidden"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-t-xl"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-700 text-sm">{description}</p>
      </div>
    </a>
  );
}

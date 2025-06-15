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
      className="block bg-white rounded-xl shadow hover:shadow-lg transition p-4 hover:ring-2 hover:ring-blue-500"
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </a>
  );
}

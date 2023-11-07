interface CategoriesProps {
  categories: string[];
  selectedCategory: string;
  onCatetoryClick: (category: string) => void;
}

export default function Categories({
  categories,
  selectedCategory,
  onCatetoryClick,
}: CategoriesProps) {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-semibold border-b-2 border-slate-600 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            key={category}
            className={`${
              selectedCategory === category && 'text-blue-600'
            } cursor-pointer hover:text-blue-400`}
            onClick={() => onCatetoryClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}

interface CategoryBadgeProps {
  label: string;
}

export default function CategoryBadge({ label }: CategoryBadgeProps) {
  return (
    <span className="text-xs rounded-md bg-green-100 px-1 my-2">{label}</span>
  );
}

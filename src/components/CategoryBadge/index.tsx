interface CategoryBadgeProps {
  label: string;
}

export default function CategoryBadge({ label }: CategoryBadgeProps) {
  return <span className="text-xs rounded-md bg-green-100 p-1">{label}</span>;
}

interface Props {
  title: string;
  subtitle?: string;
}

export default function TestInfo({ title, subtitle }: Props) {
  return (
    <div>
      <h3 className="text-gray-700 font-semibold text-lg">{title}</h3>
      {subtitle && <p className="text-gray-500 text-sm">{subtitle}</p>}
    </div>
  );
}

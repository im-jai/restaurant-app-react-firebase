type MenuCardProps = {
  name: string;
  description: string;
  price: number;
};

function MenuCard({ name, description, price }: MenuCardProps) {
  return (
    <article className="rounded-2xl bg-white p-6 shadow-md">
      <h3 className="mb-2 text-2xl font-bold text-slate-900">{name}</h3>

      <p className="mb-4 text-slate-600">{description}</p>

      <p className="font-bold text-orange-500">¥{price}</p>
    </article>
  );
}

export default MenuCard;

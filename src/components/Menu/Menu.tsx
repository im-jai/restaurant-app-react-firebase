import MenuCard from "./MenuCard";

const menuItems = [
  {
    name: "Shoyu Ramen",
    description: "Classic Japanese ramen with a rich soy-based broth.",
    price: 450,
  },
  {
    name: "Miso Ramen",
    description: "Rich and savory miso broth with fresh toppings.",
    price: 500,
  },
  {
    name: "Tonkotsu Ramen",
    description: "Creamy pork broth slowly cooked for deep flavor.",
    price: 550,
  },
];

function Menu() {
  return (
    <section className="bg-slate-100 px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
            Our Menu
          </p>

          <h2 className="text-4xl font-bold text-slate-900 md:text-5xl">
            Choose Your Ramen
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menuItems.map((item) => (
            <MenuCard
              key={item.name}
              name={item.name}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Menu;

function Hero() {
  return (
    <section className="min-h-[70vh] bg-slate-800 px-6 py-20 text-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-orange-400">
            Authentic Japanese Cuisine
          </p>

          <h2 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
            A Bowl of Happiness
          </h2>

          <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300 md:text-xl">
            Traditional Japanese flavors, prepared with fresh ingredients and
            served with passion.
          </p>

          <button
            type="button"
            className="rounded-full bg-orange-500 px-8 py-3 font-semibold text-white transition hover:bg-orange-400"
          >
            Explore Our Menu
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://images.unsplash.com/photo-1569718212165-3a8278d5f624"
            alt="Japanese ramen bowl"
            className="h-[300px] w-full rounded-4xl object-cover shadow-2xl md:h-[450px]"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

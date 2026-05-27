export default function Newsletter() {
  return (
    <section className="rounded-[32px] bg-white px-6 py-8 md:px-10 md:py-10 text-black shadow-[0_20px_60px_rgba(0,0,0,0.15)]">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-5 md:items-end">
        <div className="md:col-span-2">
          <p className="text-sm uppercase tracking-[0.18em]">Join to Newsletter</p>

          <h2 className="font-dela text-2xl md:text-3xl leading-tight my-4 uppercase">
            Lets co-create together
          </h2>

          <p className="text-base leading-relaxed">
            Short bi-monthly nuggets on Planetary Health, projects and research
            that are changing the world, delivered to your inbox - No spam,
            real action.
          </p>
        </div>

        <div className="md:col-span-3 flex flex-col gap-5">
          <img
            src="/assets/images/meta-crisis.png"
            alt="Newsletter"
            className="w-full max-h-[220px] object-contain object-left"
          />

          <form className="grid grid-cols-1 gap-3 md:grid-cols-[minmax(0,1fr)_auto]">
            <input
              type="email"
              placeholder="Enter your email"
              className="min-h-[52px] border border-black bg-transparent px-4 outline-none"
            />

            <button
              type="submit"
              className="min-h-[52px] bg-black text-white px-6 hover:opacity-85 transition-opacity"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

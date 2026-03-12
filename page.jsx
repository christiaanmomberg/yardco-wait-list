export default function YardCoWaitingListLandingPage() {
                {num}
              </div>
              <h3 className="text-xl font-semibold text-[#083F2B]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#4A4A4A]">{body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#083F2B] p-8 text-white shadow-xl">
              <h2 className="text-3xl font-bold">Who this is for</h2>
              <div className="mt-6 space-y-4 text-white/90">
                <p>• People selling second-hand goods</p>
                <p>• Small businesses with stock to sell</p>
                <p>• Handmade product creators and local artists</p>
                <p>• Sellers who want online and physical store exposure</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#DFF3EA] p-8 shadow-xl">
              <h2 className="text-3xl font-bold text-[#083F2B]">Founding Seller Benefits</h2>
              <div className="mt-6 space-y-4 text-[#083F2B]">
                <p>• Priority access before public rollout</p>
                <p>• Lower processing fees for a launch period</p>
                <p>• First chance to open a store on the platform</p>
                <p>• Early exposure through launch marketing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="waitlist" className="mx-auto max-w-4xl px-6 py-20">
        <div className="rounded-[2rem] bg-white p-8 shadow-2xl ring-1 ring-black/5 md:p-10">
          <div className="mb-8 text-center">
            <h2 className="text-3xl font-bold text-[#083F2B] md:text-4xl">Join the Waiting List</h2>
            <p className="mt-3 text-lg text-[#4A4A4A]">
              Be one of the first sellers on YardCo Store.
            </p>
          </div>

          <form className="grid gap-5 md:grid-cols-2">
            <input className="rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B]" placeholder="Full Name" />
            <input className="rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B]" placeholder="Phone Number" />
            <input className="rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B] md:col-span-2" placeholder="Email Address" />
            <select className="rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B]">
              <option>Select Seller Type</option>
              <option>Personal Seller</option>
              <option>Business Seller</option>
              <option>Handmade / Local Creator</option>
            </select>
            <select className="rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B]">
              <option>How do you want to sell?</option>
              <option>Online Only</option>
              <option>In-Store Only</option>
              <option>Online + In-Store</option>
            </select>
            <textarea
              className="min-h-[120px] rounded-2xl border border-[#D9D9D9] px-4 py-4 outline-none focus:border-[#0F6B4B] md:col-span-2"
              placeholder="What products do you want to sell?"
            />
            <button
              type="button"
              className="md:col-span-2 rounded-2xl bg-[#0F6B4B] px-6 py-4 text-base font-semibold text-white shadow-lg transition hover:opacity-95"
            >
              Join as a Founding Seller
            </button>
          </form>

          <p className="mt-4 text-center text-sm text-[#4A4A4A]">
            Limited early seller access. Founding seller fee benefits apply for a limited time.
          </p>
        </div>
      </section>

      <footer className="border-t border-black/5 bg-white py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-center text-sm text-[#4A4A4A] md:flex-row md:text-left">
          <p>YardCo Store — Buy. Sell. Verify. Deliver.</p>
          <p>A second life for great products.</p>
        </div>
      </footer>
    </div>
  )
}

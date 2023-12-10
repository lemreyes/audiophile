export default function CheckoutPage() {
  return (
    <div className="flex flex-col items-center bg-pageBackground">
      <div className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5 mt-4 ">
        <span className="text-[15px] text-textPrimary font-medium leading-[25px]">
          Go Back
        </span>
      </div>
      <main className="w-10/12 tablet:w-11/12 desktop:w-4/5 wide:w-3/5">
        <section className="bg-white rounded-lg p-4 mt-4 ">
          <h1 className="text-[28px] font-bold tracking-[1px] uppercase">
            Checkout
          </h1>
          <form>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Billing Details
              </h2>
              <label
                htmlFor="name"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="Alexei Ward"
              />
              <label
                htmlFor="email"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Email Address
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="alexei@mail.com"
              />
              <label
                htmlFor="number"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Phone Number
              </label>
              <input
                type="text"
                name="number"
                id="number"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="+1 202-555-0136"
              />
            </div>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Shipping Info
              </h2>
              <label
                htmlFor="address"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Your Address
              </label>
              <input
                type="text"
                name="address"
                id="address"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="1137 Williams Avenue"
              />
              <label
                htmlFor="zip"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                ZIP Code
              </label>
              <input
                type="text"
                name="zip"
                id="zip"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="10001"
              />
              <label
                htmlFor="city"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                City
              </label>
              <input
                type="text"
                name="city"
                id="city"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="New York"
              />
              <label
                htmlFor="country"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Country
              </label>
              <input
                type="text"
                name="country"
                id="country"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="United States"
              />
            </div>
            <div>
              <h2 className="text-accent text-[13px] font-bold tracking-wide leading-[25px] mt-8 uppercase">
                Payment Details
              </h2>
              <label
                htmlFor="paymentMethod"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                Payment Method
              </label>
              <input
                type="radio"
                name="paymentMethod"
                id="paymentMethod"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="1137 Williams Avenue"
              />
              <label
                htmlFor="emoneyNumber"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                e-Money Number
              </label>
              <input
                type="text"
                name="emoneyNumber"
                id="emoneyNumber"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="238521993"
              />
              <label
                htmlFor="emoneyPin"
                className="mt-4 text-[12px] font-bold tracking-tight"
              >
                e-Money Pin
              </label>
              <input
                type="text"
                name="emoneyPin"
                id="emoneyPin"
                className="block w-full mt-4 mb-4 p-4 rounded-lg border border-gray-400 text-14px font-bold tracking-tight"
                placeholder="6891"
              />
            </div>
          </form>
        </section>
        <aside className="mt-8 bg-white rounded-lg p-4">
          <h2 className="text-[18px] tracking-wider font-bold uppercase">
            Summary
          </h2>
        </aside>
      </main>
    </div>
  );
}

import InputComponents from "./InputComponent";

export default function RegisterPages() {
  return (
    <>
      <section className="flex justify-center gap-52 flex-row items-center w-full container h-screen">
        <div className="bg-indigo-600 rounded-2xl shadow-sm shadow-sky-500 outline outline-slate-400 -outline-offset-8">
          <div className="group overflow-hidden relative after:duration-500 before:duration-500  duration-500 hover:after:duration-500 hover:after:translate-x-24 hover:before:translate-y-12 hover:before:-translate-x-32 hover:duration-500 after:absolute after:w-24 after:h-24 after:bg-indigo-600 after:rounded-full  after:blur-xl after:bottom-32 after:right-16 before:absolute before:w-20 before:h-20 before:bg-sky-400 before:rounded-full  before:blur-xl before:top-20 before:right-16 hover:rotate-12 flex justify-center items-center h-56 w-80  bg-neutral-900 rounded-2xl outline outline-slate-400 -outline-offset-8">
            <div className="z-10 flex flex-col items-center gap-2">
              <span className="text-white text-6xl font-bold">Sign Up</span>
              <p className="text-gray-50">Sign Up To Create Your Account</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto w-96 relative overflow-hidden z-10 bg-gray-800 p-8 rounded-lg shadow-md before:w-24 before:h-24 before:absolute before:bg-purple-600 before:rounded-full before:-z-10 before:blur-2xl after:w-32 after:h-32 after:absolute after:bg-sky-400 after:rounded-full after:-z-10 after:blur-xl after:top-24 after:-right-12 h-auto flex flex-col">
          <h2 className="text-2xl font-bold text-white mb-6">
            Sign Up Into Your Account
          </h2>

          <form method="post" action="#">
            <InputComponents
              labelFor="name"
              labelContent="Create Your Username"
              inputName="name"
              inputType="text"
              inputId="name"
            />
            <InputComponents
              labelFor="email"
              labelContent="Create Your Email"
              inputName="email"
              inputType="email"
              inputId="email"
            />
            <InputComponents
              labelFor="password"
              labelContent="Create Your Password"
              inputName="password"
              inputType="password"
              inputId="password"
            />

            <div className="flex justify-center">
              <button
                className="bg-gradient-to-r w-full from-indigo-600 via-indigo-400 to-blue-500 text-white px-4 py-2 font-bold rounded-md hover:opacity-80"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

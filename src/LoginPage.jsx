import InputComponents from "./InputComponent";

export default function LoginPages() {
  return (
    <>
      <section className="bg-page h-[200%] w-[100vw]">
        <div className="h-[100vh]  max-[800px]:h-[100%] flex flex-row justify-center gap-52 max-[800px]:gap-12 max-[800px]:mt-32 items-center max-[800px]:flex-col">
          <h2 className="text-6xl font-extrabold max-[800px]:text-4xl max-[600px]:text-2xl">
            Login into your account
          </h2>
          <form className="overflow-hidden bg-white border-4 border-blue-400 shadow-2xl dark:bg-zinc-900 rounded-2xl dark:border-blue-800 h-[55%] w-[600px]  max-[800px]:h-[100%] max-[800px]:w-[100%]  max-[800px]:mb-32">
            <div className="px-8 py-10 md:px-10">
              <h2 className="text-4xl font-extrabold text-center text-zinc-800 dark:text-white">
                Welcome Back!
              </h2>
              <p className="mt-3 text-center text-zinc-600 dark:text-zinc-400">
                We missed you, sign in to continue.
              </p>
              <div className="mt-10">
                <InputComponents
                  labelContent="Email"
                  labelFor="email"
                  inputType="email"
                  inputId="email"
                  inputName="email"
                  inputPlaceHolder="you@gmail.com"
                />
                <InputComponents
                  labelContent="Password"
                  labelFor="password"
                  inputType="password"
                  inputId="password"
                  inputName="password"
                  inputPlaceHolder="••••••••"
                />
                <div className="mt-10">
                  <button
                    className="w-full px-4 py-3 tracking-wide text-white transition-colors duration-200 transform rounded-lg bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 focus:outline-none focus:ring-4 focus:ring-blue-400 dark:focus:ring-blue-800"
                    type="button"
                    onClick={() => window.location.assign("/")}
                  >
                    Lets Go
                  </button>
                </div>
              </div>
            </div>
            <div className="px-8 py-4 bg-blue-200 dark:bg-zinc-800">
              <div className="text-sm text-center text-blue-900 dark:text-blue-300">
                Dont have an account?
                <a className="font-medium underline" href="/register">
                  {" "}
                  Sign up
                </a>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

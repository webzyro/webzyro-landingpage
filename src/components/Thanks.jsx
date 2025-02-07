const Thanks = () => {
  const userInfo = JSON.parse(sessionStorage.getItem("userInfo") || null);
  return (
    <div className="w-full h-screen inset-0 flex items-center justify-center">
      <div className="max-w-6xl mx-auto p-4 rounded-xl">
        <div className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-4xl font-bold text-slate-800 text-center">
            Thank You! {userInfo?.name}
          </h1>
          <p className="text-2xl font-medium text-slate-700">
            Your Resitration is Successful
          </p>
          <p className="text-2xl font-medium text-slate-600">
            We will contact you soon
          </p>
          <p className="text-sm md:text-xl text-slate-600">
            Want to read more about us!{" "}
            <a
              className="text-blue-500 hover:underline"
              href="https://www.webzyro.com/"
            >
              Click here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Thanks;

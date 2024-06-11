export default function Contact() {
  return (
    <div className="pb-20 bg-transparent text-center">
      <h1 className="mb-5 text-5xl font-bold">CONTACT</h1>
      <div className="flex justify-center m-24">
        <div className="card w-auto h-auto bg-gradient-to-br from-indigo-950 to-transparent shadow-lg place-items-center">
          <div className="columns-2 flex items-center justify-center">
            <div className="text-left p-8">
              <div className="font-semibold">Email</div>
              <div>contact@bearmetal.dev</div>
              <br />
              <div className="font-semibold">Phone</div>
              <div>+32456789012</div>
              <br />
              <div className="font-semibold">Address</div>
              <div>rue des cryptos 666, 1000</div>
              <div>Brussels, BELGIUM</div>
            </div>
            <div className="flex flex-col items-center justify-center p-10">
              <div className="columns-2 flex items-center justify-center space-x-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="input input-bordered w-full max-w-xs bg-slate-100 shadow-inner"
                />
                <input
                  type="text"
                  placeholder="Email address"
                  className="input input-bordered w-full max-w-xs bg-slate-100 shadow-inner"
                />
              </div>
              <div className="w-full mt-4">
                <textarea
                  className="textarea textarea-bordered h-48 w-full bg-slate-100 shadow-inner"
                  placeholder={" "}
                ></textarea>
              </div>
              <div className="w-full flex justify-end mt-4">
                <button className="btn btn-secondary">SEND</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

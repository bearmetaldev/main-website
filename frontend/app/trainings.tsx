export default function Trainings() {
  return (
    <div className="min-h-fit p-20">
      <div className="text-center">
        <h1 className="mb-5 text-5xl font-bold">TRAININGS</h1>
      </div>
      <div className="columns-2">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="pt-10 size-40">
            <img src="/rust-logo.png" alt="rust-logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="pt-10 size-40">
            <img src="/git-logo.png" alt="git-logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions">
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Trainings() {
  return (
    <div className="p-20 bg-transparent text-center">
      <h1 className="mb-5 text-5xl font-bold">TRAININGS</h1>
      <div className="columns-2 flex items-center justify-center space-x-28 m-24">
        <div className="card w-80 h-auto bg-gradient-to-br from-indigo-950 to-transparent shadow-lg place-items-center">
          <figure className="pt-10 size-40">
            <img src="/rust-logo.png" alt="rust-logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Volutpat ullamcorper
              tempor sed lorem quisque. Non faucibus ac proin consequat. Vitae
              tellus erat sed consectetur aliquet id platea vel. Odio euismod id
              arcu elementum. Quis volutpat dapibus in cursus. Fermentum id
              tincidunt interdum ultricies non dolor. Et cursus aenean convallis
              ullamcorper ultricies ut vitae purus massa.
            </p>
            <div className="card-actions"></div>
          </div>
        </div>
        <div className="card w-80 h-auto bg-gradient-to-br from-indigo-950 to-transparent shadow-lg place-items-center">
          <figure className="pt-10 size-40">
            <img src="/git-logo.png" alt="git-logo" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur. Volutpat ullamcorper
              tempor sed lorem quisque. Non faucibus ac proin consequat. Vitae
              tellus erat sed consectetur aliquet id platea vel. Odio euismod id
              arcu elementum. Quis volutpat dapibus in cursus. Fermentum id
              tincidunt interdum ultricies non dolor. Et cursus aenean convallis
              ullamcorper ultricies ut vitae purus massa.
            </p>
            <div className="card-actions"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

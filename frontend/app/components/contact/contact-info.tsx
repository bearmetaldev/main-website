export default function ContactInfo() {
  return (
    <div className="flex flex-wrap my-auto px-4 w-full">
      <div className="w-1/2 lg:w-full mb-4 lg:mb-4">
        <p className="text-left mb-4 md:mx-12 text-lg">
          <strong>Email</strong>
          <br />
          contact@example.com
        </p>
        <p className="text-left md:mx-12 text-lg">
          <strong>Phone</strong>
          <br />
          +1 234 567 8900
        </p>
      </div>
      <div className="w-1/2 lg:w-full">
        <p className="text-left md:mx-12 text-lg">
          <strong>Address</strong>
          <br />
          123 Example Street
          <br />
          City, State 12345
          <br />
          Country
        </p>
      </div>
    </div>
  );
}

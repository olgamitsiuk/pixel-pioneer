import Link from "next/link";

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <div className="text-sm breadcrumbs">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li className="text-primary">Contact</li>
          </ul>
        </div>

        <h1 className="text-3xl font-bold mt-4">Contact</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-1/2">
          <h2 className="font-bold">Message us</h2>
          <p>
            We are here to assist you every step of the way. Whether you have a
            question, need technical support, or simply want to share your
            feedback, our dedicated team is ready to listen and provide prompt
            assistance.
          </p>
          <div className="pt-6">
            <p>
              <span className="font-bold">Email:</span> lorem@pixelpioneer.com
            </p>
            <p>
              <span className="font-bold">Phone:</span> 12345678910
            </p>
          </div>
        </div>
        <form action="" className="md:w-1/2">
          <div className="mb-4">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="sr-only">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address"
              className="input input-bordered w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="sr-only">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              placeholder="Message"
              className="textarea textarea-bordered w-full"
            ></textarea>
          </div>

          <div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-primary w-full"
            />
          </div>
        </form>
      </div>
    </div>
  );
}

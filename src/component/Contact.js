const Contact = () => {
  return (
    <div>
      <h1 className="font-bold text-xl p-4 m-4">Contact Us Page</h1>
      <form>
        <input
          type="textbox"
          placeholder="name"
          className="border border-black p-2 m-2"
        />
        <input
          type="textbox"
          placeholder="message"
          className="border border-black p-2 m-2"
        />
        <button className="border border-black p-2 m-2 bg-gray-100 rounded-lg">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;

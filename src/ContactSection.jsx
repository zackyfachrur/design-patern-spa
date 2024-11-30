export default function ContactSections() {
  function sendWhatsApp(event) {
    event.preventDefault();

    const userName = document.getElementById("username").value;
    const userMessages = document.getElementById("usermessages").value;

    const whatsappURL = `https://wa.me/6282112717940?text=From%20${encodeURIComponent(
      userName
    )}%0AMessage:%20${encodeURIComponent(userMessages)}`;

    window.location.assign(whatsappURL);
  }

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center h-[70vh]"
    >
      <h2 className="text-4xl font-extrabold drop-shadow-md">Kontak Kami</h2>
      <form
        className="bg-yellow-400 w-[40vw] max-[800px]:w-[80%] p-6 rounded-lg shadow-md"
        onSubmit={sendWhatsApp}
      >
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block mb-2 text-sm font-bold text-white"
          >
            Nama Anda
          </label>
          <input
            placeholder="Enter Your Name"
            type="text"
            id="username"
            name="username"
            className="w-full px-3 py-2 font-bold leading-tight text-blue-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="usermessages"
            className="block mb-2 text-sm font-bold text-white"
          >
            Messages
          </label>
          <textarea
            rows="5"
            placeholder="Enter Your Messages"
            id="usermessages"
            name="usermessages"
            className="w-full px-3 py-2 font-bold leading-tight text-blue-700 bg-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
          ></textarea>
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="px-4 py-2 text-sm font-bold text-white bg-blue-700 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          >
            Send Messages
          </button>
        </div>
      </form>
    </section>
  );
}

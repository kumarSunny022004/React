function Card({username="Default" ,post="Not Assigned"}) {
    // console.log(props);
    return (
      <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-lg transform transition duration-300 hover:scale-105">
        <img
          className="w-full h-48 object-cover"
          src="https://yt3.googleusercontent.com/arHIKjc6JTqF_b4QJKPHhQC_Jr8q0XfI7LEpJ0-VuiI0ZRz9xFNz94TWl4CLOcozLx-iAhV_=s900-c-k-c0x00ffffff-no-rj"
          alt="Card Image"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800">Card Title</h2>
          <p className="text-gray-600 mt-2">
           {post}
          </p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
            {username}
          </button>
        </div>
      </div>
    );
  }

  export default Card;
  
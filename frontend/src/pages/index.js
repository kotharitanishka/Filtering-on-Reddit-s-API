import React from "react";
export default function Home() {
  var url = "http://127.0.0.1:5000";

  const API_KEY = "K1mBeF3EOiJzWQtjnScLBWMhGniJYBOZ";

  const [loading, setLoading] = React.useState(false);
  const [myData, setmyData] = React.useState([]);
  const [current, setCurrent] = React.useState('');

  const clearData = () => {
    setmyData([]);
  };

  const getHot = async () => {
    callAPI("/hot");
    setCurrent('Hot');
  };
  const getNew = async () => {
    callAPI("/new");
    setCurrent('New');
  };
  const getTop = async () => {
    callAPI("/top");
    setCurrent('Top');
  };

  const callAPI = async (type) => {
    setLoading(true);
    try {
      const res = await fetch(url + type + "?KEY=" + API_KEY);
      const data = await res.json();
      setmyData(data["data"]);
    } catch (err) {
      console.log(err);
    }
    setLoading(false);
  };

  if (loading) {
    return (
      <div className="flex h-screen">
        <div role="status" className="m-auto">
          <svg
            aria-hidden="true"
            className="inline w-16 h-16 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
    {myData.length ==0 && loading == false ? (
    <div className="flex h-screen">
       
      <div className="m-auto">
        <div className="text-8xl font-bold pb-16 px-20">Reddit</div>
        {/* <main> */}
        <button
          onClick={getNew}
          className="sm:text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-8 rounded inline-flex items-center"
        >
          
          <svg
            className="fill-current w-8 h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 448 512">
              <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
          </svg>
          <span>New</span>
        </button>
        <button
          onClick={getHot}
          className="sm:text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-8 mx-8 rounded inline-flex items-center"
        >
          <svg
          className="fill-current w-8 h-8 mr-2" 
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path d="M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z" />
          </svg>
          <span>Hot</span>
        </button>
        <button
          onClick={getTop}
          className="sm:text-2xl bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-4 px-8 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-8 h-8 mr-2"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M160 80c0-26.5 21.5-48 48-48h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V80zM0 272c0-26.5 21.5-48 48-48H80c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V272zM368 96h32c26.5 0 48 21.5 48 48V432c0 26.5-21.5 48-48 48H368c-26.5 0-48-21.5-48-48V144c0-26.5 21.5-48 48-48z"/>
          </svg>
          <span>Top</span>
        </button>

        
        {/* </main> */}
      </div>
     
    </div>
    ) : (
      <div>
        
        <div className="sm:text-6xl px-10 py-8 ">
        <button
          onClick={clearData}
          className="sm:text-2xl pt-6 rounded inline-flex items-center"
        >
          <svg
            className="fill-current w-8 h-8 mr-4"
            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/>
          </svg>
        </button>
          Showing results for : {current}</div>
      <div className="container mx-auto space-y-2 md:space-y-0 md:gap-2 md:grid md:grid-cols-3">
        {myData.map((item) => (
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img className="w-full" src={item["url"]} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{item["title"]}</div>
            </div>
          </div>
        ))}
      </div>
      </div>
    )}
    </div>

  );
}




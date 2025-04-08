"use client";

const GalleryPage: React.FC = () => {
  return (
    <div className="mt-25 mr-15 ml-40 bg-gray-900">
      <section className="jystify-center flex h-full w-full flex-col items-center rounded-lg bg-gray-500 p-10 shadow-md">
        <h1 className="mb-10 font-bold">Gallery</h1>
        <div className="grid grid-cols-3 items-center gap-25">
          <article className="mb-4 flex h-100 w-75 items-center justify-center rounded-lg bg-gray-800 p-5 shadow-md">
            <img
              className="h-90"
              src="https://i.pinimg.com/736x/14/71/08/1471089013dad6ad09d1e46cf6a6b7d8.jpg"
            ></img>
          </article>
          <article className="mb-4 flex h-100 w-75 items-center justify-center rounded-lg bg-gray-800 p-5 shadow-md">
            <img
              className="h-90"
              src="https://i.pinimg.com/736x/99/f6/ed/99f6ed76292397628a35d5ab77d6f543.jpg"
            ></img>
          </article>
          <article className="mb-4 flex h-100 w-75 items-center justify-center rounded-lg bg-gray-800 p-5 shadow-md">
            <img
              className="h-90"
              src="https://i.pinimg.com/736x/90/d8/52/90d852c9a59b0dc7e466ead1b4650d64.jpg"
            ></img>
          </article>
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;

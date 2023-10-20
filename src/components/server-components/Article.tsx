export default async function Article({ params }: { params: { id: string } }) {
  return (
    <>
      <div className="py-4">
        <h2 className="text-lg font-bold">{/* Display article name here */}</h2>
        <i className="text-gray-400 text-sm">
          {/* Display article date here */}
        </i>
      </div>
      <div className="flex justify-start ">
        {/* Display article content here */}
      </div>
    </>
  );
}

import React from "react";

const page = ({ params }) => {
  return (
    <main>
      <h1>Project {params.name} </h1>
      {/* If the folder name is id, then you have to say params.id and likewise */}
    </main>
  );
};

export default page;

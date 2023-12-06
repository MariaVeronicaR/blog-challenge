import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BlogDetailPage = () => {
  const { id } = useParams();
  const [blogDetails, setBlogDetails] = useState(null);

  useEffect(() => {
    // Realizar una solicitud a la API para obtener los detalles del blog específico
    console.log(`http://localhost:8000/api/v1/blog/${id}`)
    fetch(`http://localhost:8000/api/v1/blog/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setBlogDetails(data);
      })
      .catch((error) => {
        console.error("Error fetching blog details:", error);
      });
  }, [id]);

  if (!blogDetails) {
    return <div className="bg-white border rounded-lg p-3"><h1>Loading...</h1></div>;
  }

  return (
    <div className=" bg-white border rounded-lg p-3">
      <h1> <b>Title:</b> {blogDetails.title}</h1>
      <p> <b>Author:</b> {blogDetails.author}</p>
      <p> <b>Publication Date</b>: {blogDetails.publicationDate}</p>
      <p><b> Content:</b> {blogDetails.content}</p>
    </div>
  );
};

export default BlogDetailPage;

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
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{blogDetails.title}</h1>
      <p>Author: {blogDetails.author}</p>
      <p>Content: {blogDetails.content}</p>
      <p>Publication Date: {blogDetails.publicationDate}</p>
    </div>
  );
};

export default BlogDetailPage;

import { useEffect, useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Title", "Author", "Content", "Publication Date", ""];

export function BlogList({ searchTerm }) {
  const [tableRows, setTableRows] = useState([]);

  useEffect(() => {
    // Definir la URL de la API con el término de búsqueda proporcionado
    const apiUrl = `http://localhost:8000/api/v1/blog?title=${searchTerm}&author=${searchTerm}&content=${searchTerm}`;

    // Realizar la solicitud a la API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const sortedData = data.sort((a, b) => b.id - a.id);
        
        // Actualizar la variable tableRows con los datos ordenados
        setTableRows(sortedData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [searchTerm]); // Ejecutar la solicitud cuando cambie el término de búsqueda
 
  return (
    <Card className="h-full w-full overflow-scroll mb-3">
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th
                key={head}
                className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
              >
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableRows.map(({ id, title, author, content, publicationDate }, index) => {
            const isLast = index === tableRows.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";

            return (
              <tr key={id}>
                <td className={classes}>
                <Link to={`/blogs/${id}`}>
                  <Typography variant="small" color="blue-gray" className="font-normal underline">
                    {title}
                  </Typography>
                  </Link>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {author}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {/*Solo mostrar los primeros 70 caracteres de contenido*/}
                    {content.slice(0, 70)}{content.length > 70 ? '...' : ''}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {publicationDate}
                  </Typography>
                </td>
                <td className={classes}>
                <Link to={`/blogs/${id}`}>
                  <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium underline">
                    Detail
                  </Typography>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
  );
}

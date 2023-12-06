import React from "react";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogBody,
} from "@material-tailwind/react";

 
export function Modal() {
  const [open, setOpen] = React.useState(false);
 
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleOpen = () => {
    setOpen(!open);
    setTitle("");
    setAuthor("");
    setContent("");
  };

  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(typeof title);
      console.log(typeof author);
      console.log(typeof content);
      let res = await fetch(" http://localhost:8000/api/v1/blog", {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            "title": title,
            "author": author,
            "content": content,
        }),
      });
      console.log(res.status)
      if (res.status === 201) {
        //Empty fields
        setTitle("");
        setAuthor("");
        setContent("");
        //Close Modal
        window.location.reload(true);
      
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} className="bg-[#212a2e]">
        Add blog
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
        <h2 className="text-lg  mb-3 ">Add blog</h2>
          <form onSubmit={handleSubmit}>
            
        <input
          type="text"
          className="mb-3 p-2 w-full border rounded-md border-sky-500 bg-[#adadad26]"
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="mb-3 p-2 w-full border rounded-md border-sky-500 bg-[#adadad26]"
          value={author}
          placeholder="Author"
          onChange={(e) => setAuthor(e.target.value)}
        />
        
        <textarea
          type="text"
          className="mb-3 p-2 w-full border rounded-md border-sky-500 bg-[#adadad26]"
          value={content}
          placeholder="Write content here"
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        
        <div>
        <button type="submit">Create</button>
        <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          </div>
      </form>
        </DialogBody>
 
      </Dialog>
    </>
  );
}

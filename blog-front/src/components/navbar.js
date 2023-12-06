import {
    Navbar,
    Typography,
    Button,
    Input,
  } from "@material-tailwind/react";
  import React, { useState } from 'react';
  import  RenderIf  from './RenderIf';
  import { Modal } from './ModalAdd';
  import {  Link, useLocation } from 'react-router-dom';

   
  export function NavbarDark({onSearch}) {
    const location = useLocation();
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
      const term = e.target.value;
      setSearchTerm(term);
      onSearch(term);
    };
    return (
      <Navbar
        variant="gradient"
        color="blue-gray"
        className="h-full w-full from-blue-gray-900 to-blue-gray-800 px-4 py-3 my-3"
      >
        <div className="flex flex-wrap items-center justify-between gap-y-4 text-white">
          <Typography
            as="a"
            href="#"
            variant="h6"
            className="mr-4 ml-2 cursor-pointer py-1.5"
          >
            BLOGS
          </Typography>
          <RenderIf condition={location.pathname === '/'}>
          <div className="ml-auto flex gap-1 md:mr-4">
            <Modal/>
          </div>
          
          <div className="relative flex w-full gap-2 md:w-max">
            <Input
              type="search"
              color="white"
              label="Type here..."
              className="pr-20"
              value={searchTerm}
              onChange={handleSearch}
              containerProps={{
                className: "min-w-[288px]",
              }}
            />
            <Button
              size="sm"
              color="white"
              className="!absolute right-1 top-1 rounded"
            >
              Search
            </Button>
          </div>
          </RenderIf>
          <RenderIf condition={location.pathname.startsWith('/blog')}>
          <Link  
          size="sm"
          color="white"
          to="/"
          className="underline"
          >
           Back
          </Link>
          </RenderIf>
         
        </div>
      </Navbar>
    );}
  
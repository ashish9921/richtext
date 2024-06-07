"use client"
import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import parse from 'html-react-parser';

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import 'react-quill/dist/quill.snow.css';

const page = () => {

    const [value, setValue] = useState('')


    const reactContent = parse(value);
    return (
        <div>
            <ReactQuill value={value} onChange={setValue} />
            {value}
            <div onClick={(() => setValue(value))}>
                {reactContent}
            </div>

        </div>

    )
};

export default page;
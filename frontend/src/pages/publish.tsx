import { useRef, useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/header";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles

function Publish() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const quillRef = useRef(null);

  const modules = {
    toolbar: {
      container: [
        [{ 'header': '1'}, {'header': '2'}, { 'font': [] }],
        [{size: []}],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, 
         {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image', 'video'],
        ['clean']                                         
      ],
    }
  };

  const formats = [
    'header', 'font', 'size',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image', 'video'
  ];

  const handlePublish = () => {
    // Implement your logic to publish the content
    console.log("Title:", title);
    console.log("Content:", content);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow max-w-3xl mx-auto px-4">
        <div className="mt-8">
          <label htmlFor="title" className="block text-lg text-gray-700">
            Title
          </label>
          <input
            id="title"
            name="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Enter title"
          />
        </div>
        <div className="mt-6">
          <ReactQuill
            ref={quillRef}
            value={content}
            onChange={(newContent) => setContent(newContent)}
            modules={modules}
            formats={formats}
            style={{height: "280px"}} // Set the height of the editor
          />
        </div>
      </div>
      <div className="flex justify-center px-4 py-2">
          <button
            onClick={handlePublish}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Publish
          </button>
        </div>
      <Footer />
    </div>
  );
}

export default Publish;

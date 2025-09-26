import { useState } from "react";
import { Upload } from "lucide-react"; // nice upload icon

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setFile(e.dataTransfer.files[0]);
  };

  return (

    <div
      className="border-2 border-dashed border-cyan-500 rounded-xl p-6 text-center cursor-pointer hover:bg-cyan-950/20 transition"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => document.getElementById("fileInput").click()}
    >
      <input
        id="fileInput"
        type="file"
          style={{ display: "none" }}

        accept="image/*"
        className="hidden"
        onChange={handleFileChange}
      />
      <Upload className="mx-auto mb-2 text-cyan-400" size={40} />
      <p className="text-cyan-300">Drag & drop or click to upload</p>

      {file && (
        <div className="mt-4">
          <p className="text-sm text-cyan-200">{file.name}</p>
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="mt-2 mx-auto max-h-40 rounded-lg shadow"
          />
        </div>
      )}
    </div>
  );
}

export default FileUpload;

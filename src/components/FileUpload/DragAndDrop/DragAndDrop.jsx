import { Box } from "@mui/system";
import { useDropzone } from "react-dropzone";
import {
  getStorage,
  ref,
  getDownloadURL,
  uploadBytesResumable,
} from "firebase/storage";
import app from "../../firebase";

const DragAndDrop = ({ setURL }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const storage = getStorage(app);
  const files = acceptedFiles.map((file) => {
    const storageRef = ref(storage, "files/" + file.path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // console.log("Upload is " + progress + "% done");
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setURL(downloadURL);
          console.log(downloadURL);
        });
      }
    );
  });

  return (
    <Box
      sx={{
        display: "grid",
        placeItems: "center",
        backgroundColor: "#E6E6E6",
        height: "200px",
        borderStyle: "dashed",
        borderRadius: 1,
        borderColor: "#A1A1A1",
      }}
      style={{ cursor: "pointer" }}
    >
      <section className="container">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p>Drag And drop some files here!</p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </section>
    </Box>
  );
};

export default DragAndDrop;

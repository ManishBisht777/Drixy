import React, { useState } from "react";
import { storage, db } from "../auth/firebase";
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { useSelector } from "react-redux";
// import { v4 as uuidv4 } from "uuid";

const ImageUpload = () => {
  const [img, setImg] = useState("");
  const { user } = useSelector((state) => state.auth);
  const [type, setType] = useState(null);
  const [success, setSuccess] = useState("");

  const uploadFile = (e) => {
    e.preventDefault();

    // const name = `userID/${user.uid}/${img.name}`;
    // console.log(name);
    const stogrageRef = ref(storage, img.name);
    const uploadTask = uploadBytesResumable(stogrageRef, img);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(db, "images"), {
            url: downloadURL,
            type: type,
          });
          setSuccess(true);
          setTimeout(() => {
            setSuccess(false);
          }, 3000);
        });
      }
    );
  };

  return (
    <div className="auth-container container container--center gap--md">
      <form
        className="auth container container--col container--center gap--md image-container"
        action=""
      >
        <input type="file" onChange={(e) => setImg(e.target.files[0])} />
        <select onChange={(e) => setType(e.target.value)}>
          <option value=""></option>
          <option value="navbar">navbar</option>
          <option value="footer">footer</option>
          <option value="landing">landing page</option>
          <option value="cards">cards</option>
          <option value="features">features</option>
          <option value="miscellaneous">miscellaneous</option>
        </select>
        <button className="button--primary" onClick={(e) => uploadFile(e)}>
          Upload Image
        </button>

        {success && <p>Image Uploaded</p>}
      </form>
    </div>
  );
};

export default ImageUpload;

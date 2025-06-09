import { useState } from "react";


const MatchingImage = () => {


    const [image, setImage ] = useState(null)


    const handleImageChange = (e)=>{
        setImage(e.target.files[0]);
    }

    const handleSubmit = async(e)=>{
        e.preventDefault();

        if(!image ){
            print("Upload image before submistion ")
        }

        const formData = new FormData();
        formData.append("image", image);


        try {  
        const res = await fetch("http://127.0.0.1:5000/api/match", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      console.log(result);
            
        } catch (error) {
            console.log(error)
        }

    }
    return (
     <div>
      <h2>Matching Lost Item</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="formFileLg" className="form-label">
            Show Us What You Are Looking For
          </label>
          <input
            className="form-control form-control-lg"
            id="formFileLg"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </div>

        <div className="row">
          <div className="col-6">
            {/* <button type="button" className="btn btn-outline-primary">
              Back
            </button> */}
          </div>
          <div className="col-6">
            <button type="submit" className="btn btn-primary float-end">
              Save & Next
            </button>
          </div>
        </div>
      </form>
    </div>
  );


}


export default MatchingImage;
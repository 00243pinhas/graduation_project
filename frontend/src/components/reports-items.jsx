
import React, { useState } from 'react';


const ReportForm = () => {


            
  const [formData, setFormData] = useState({
    name: '',
    item: '',
    category: '',
    location: '',
    description: '',
    is_found: false,
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();

    for (const key in formData) {
      data.append(key, formData[key]);
    }

    try {
      const res = await fetch('http://127.0.0.1:5000/api/items', {
        method: 'POST',
        body: data,
      });

      const result = await res.json();
      console.log(result);
    } catch (err) {
      console.log(err);
     
    }
  };


  return (
            <div>
                <h2>Report Lost Item</h2>

                    <form id="form" className="form row g-3 needs-validation" onSubmit={handleSubmit} >


                                <div  class="col-12 col-sm-12 col-md-12 col-lg-6"> 
                                    <label for="field"   className="form-label">name </label> 
                                    <input type="text" id="name" name="name" className="form-control" placeholder="e.g. John Doe" required onChange={handleChange} />
                            
                                </div>

                                <div class="col-12 col-sm-12 col-md-12 col-lg-6">
                                    <label htmlFor="item" className="form-label">Item</label>
                                    <select id="item" name="item" className="form-select" required onChange={handleChange} >
                                        <option value="phone">Phone</option>
                                        <option value="keys">Keys</option>
                                        <option value="id_cards">ID Cards</option>
                                        <option value="wallet">Wallet</option>
                                        <option value="airpods">AirPods</option>
                                    </select>
                                </div>

                                <div  class="col-12 col-sm-12 col-md-12 col-lg-6"> 
                                    <label for="field"   className="form-label">category</label> 
                                    <input type="text" id="category" name="category" className="form-control" placeholder="e.g. Electronics" onChange={handleChange} required />
                            
                                </div>


                                <div class="col-12 col-sm-6 col-md-6 col-lg-6"> 
                                    <label for="Location" className="form-label" >Location </label> 
                                    <input type="text" id="location" name="location" className="form-control" placeholder="e.g. Near the coffee shop" onChange={handleChange} required />
                                </div>

                                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label for="description" className="form-label" > description </label> 
                                    <input type="text" id="description" name="description" className="form-control" placeholder="Describe the item" onChange={handleChange} />
                                </div>



                                <div class="col-12 col-sm-6 col-md-6 col-lg-6">
                                    <label for="description" className="form-label" > Image </label> 
                                     <input type="file" id="image" name="image" className="form-control" accept="image/*"  onChange={handleChange} />
                                </div>

                                <div className="">
                                        <label className="form-label">Was this item found?</label>
                                        <div className="form-check">
                                            <input type="checkbox" id="is_found" className="form-check-input" name="is_found" onChange={handleChange} />
                                        </div>
                                </div>
                                <div className="col-12 d-flex justify-content-between">
                                {/* <button type="button" className="btn btn-outline-primary">Back</button> */}

                                
                                <button type="submit" className="btn btn-primary">Save & Next</button>
                                </div>
                                

                    </form>

      {/* <p>{message}</p> */}
    </div>
  );
};

export default ReportForm;

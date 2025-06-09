const ReportForm = () => {
  return (
      <div>
      <h2>Report Lost Item</h2>
      
      <form >
        <input
          name="name"
          type="text"
          placeholder="Item Name"
        //   value={formData.name}
        //   onChange={handleChange}
          required
        /><br />

        <input
          name="location"
          type="text"
          placeholder="Lost Location"
        //   value={formData.location}
        //   onChange={handleChange}
          required
        /><br />

        <select name="category" required>
          <option value="">-- Select Category --</option>
          <option value="Phone">Phone</option>
          <option value="Wallet">Wallet</option>
          <option value="ID">ID</option>
          <option value="Bag">Bag</option>
          <option value="Other">Other</option>
        </select><br />

        {/* <input type="file" accept="image/*" onChange={handleImageChange} required /><br /> */}

        <button type="submit">Submit</button>
      </form>

      {/* <p>{message}</p> */}
    </div>
  );
};

export default ReportForm;

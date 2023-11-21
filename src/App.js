import React, { useState, useEffect } from "react";
import FormComponent from "./components/FormComponent";
import { saveFormData, getFormData } from "./components/DataService";

function App() {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const initialFormDataList = getFormData();
    setFormDataList(initialFormDataList);
  }, []);

  const handleSave = (formData) => {
    saveFormData(formData);

    const updatedFormDataList = getFormData();
    setFormDataList(updatedFormDataList);
  };

  const hadleDelete = (index) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList.splice(index, 1);
    localStorage.setItem("formData", JSON.stringify(updatedFormDataList));
    setFormDataList(updatedFormDataList);
  };

  return (
    <div className="App">
      <FormComponent onSave={handleSave} />
      <hr />
      <h2>Save Data</h2>
      <ol>
        {formDataList.map((data, index) => (
          <li key={index}>
            {`Name: ${data.name}, Email: ${data.email}`}
            <button onClick={() => hadleDelete(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;

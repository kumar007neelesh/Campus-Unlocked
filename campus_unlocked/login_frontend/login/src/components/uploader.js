import React, { useEffect, useState } from 'react'
import LogoutButton from './logout';
import "../upload.css"
import Top from "./Header"

function ImageUpload() {
    const [name, setName] = useState("");
    const [desc, setDesc] = useState("");
    const [location, setLocation] = useState("");  
    const [image, setImage] = useState("");
    const [allImage, setAllImage] = useState([]);

    function covertToBase64(e) {
        console.log(e);
        var reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => {
            console.log(reader.result); //base64encoded string  
            setImage(reader.result);
        };
        reader.onerror = error => {
            console.log("Error: ", error);
        };
    }

    function uploadImage() {
        fetch("http://localhost:3000/upload-image", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                name: name,
                desc: desc,
                location: location,
                image: image
            })
        }).then((res) => res.json()).then((data) => window.location.href = 'mainpage')
    }

    return (
        <form>
            <Top/>
        <div class="container_up">
            <div class="rectangle_upload"></div>
        </div>
        <h2 className="h2_upload">Upload Photo</h2>
        <div class="container_up">
            <label for="location">Select Location:</label>
            <select name="location" id="location"  onChange={(e)=>setLocation(e.target.value)}>
      
      <option value="auditorium">Auditorium</option>
      <option value="ccd">CCD</option>
      <option value="doaa_canteen">Doaa Canteen</option>
      <option value="flight_laboratory">Flight Laboratory</option>
      <option value="hockey_ground">Hockey Ground</option>
      <option value="mt">M.T.</option>
      <option value="mama_mio">Mama Mio</option>
      <option value="new_sac">New Sac</option>
      <option value="nursery">Nursery</option>
      <option value="oat">OAT</option>
      <option value="old_sac">Old Sac</option>
      <option value="outreach">Outreach</option>
      <option value="oxidation_pond">Oxidation Pond</option>
      <option value="p_k_kelkar_library">P.K.Kelkar Library</option>
      <option value="park67">Park 67</option>
      <option value="pronite_ground">Pronite Ground</option>
      <option value="rm_kd">RM-KD</option>
      <option value="stadium">Stadium</option>
      <option value="swimming_pool">Swimming Pool</option>
      <option value="tennis_court">Tennis Court</option>
    </select>
    </div>

    <div class="container_up">
            <label for="name" class="custom-field one one-position">
        <input type="text" name="name" placeholder=" "  onChange={(e)=>setName(e.target.value)} />
        <span class="placeholder">Enter Name</span>
        </label>
        </div>

        <div class="container_up">
            <label for="desc" class="custom-field one two-position">
            <input type="text" name="desc" placeholder=" "  onChange={(e)=>setDesc(e.target.value)}/>
            <span class="placeholder">Enter Caption</span>
            </label>
        </div>

        <div class="container_up">
            <label for="image" class="drop-container">
              <span class="drop-title">Drop files here</span>
              or
              <input 
                    onChange={covertToBase64} type="file" name="image" accept=".jpg, .jpeg, .png" required />
            </label>
            
        </div>
        <div class="container_up">
        <button class="uploadbutton" type="button" onClick={uploadImage}>Upload</button>
        </div>

       
        
        </form>
    )
}

export default ImageUpload;
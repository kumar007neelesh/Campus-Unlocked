import React from 'react';
import '../upload.css';


function Upload() {
   

  return (
    <body>
    <form action="http://localhost:3000/upload-image" method="POST" enctype="multipart/form-data">
        <div class="container_up">
            <div class="rectangle"></div>
        </div>
        <h2>Upload Photo</h2>

        <div class="container_up">
            <label for="location">Select Location:</label>
            <select name="location" id="location">
      
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
    </select></div>

        <div class="container_up">
            <label for="name" class="custom-field one one-position">
        <input type="text" name="name" placeholder=" "/>
        <span class="placeholder">Enter Name</span>
        </label>
        </div>

        <div class="container_up">
            <label for="desc" class="custom-field one two-position">
            <input type="text" name="desc" placeholder=" "/>
            <span class="placeholder">Enter Caption</span>
            </label>
        </div>

        <div class="container_up">
            <label for="image" class="drop-container">
              <span class="drop-title">Drop files here</span>
              or
              <input type="file" name="image" accept=".jpg, .jpeg, .png" required />
            </label>
        </div>

       
        <button type="submit">Upload</button>
    </form>
</body>
  
  );
}

export default Upload;
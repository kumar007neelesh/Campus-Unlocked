const dropdown = document.getElementById('dropdown');
const imageContainer = document.getElementById('image-container_nearby');


const arr = [
    ["RM/KD", "Nursery", 120, 3, "DOAA_Canteen", 400, 5, "Auditorium", 350, 5],
    ["Cafe Coffee Day", "Library", 10, 1, "IITKS", 550, 7, "DOAA_Canteen", 500, 6],
    ["Library", "CCD", 10, 1, "RMKD", 750, 9, "DOAA_Canteen", 500, 6],
    ["Nursery", "RMKD", 120, 3, "DOAA_Canteen", 400, 6, "Auditorium", 250, 3],
    ["Open Air Theatre", "Hockey_Ground", 10, 1, "Oat", 10, 1, "SPool", 50, 2],
    ["Pronite Ground", "OP", 100, 3, "SPool", 450, 6, "Oat", 500, 6],
    ["Mama Mio", "Oat", 350, 4, "Hockey_Ground", 350, 4, "New_SAC", 370, 5],
    ["Hockey Ground", "Oat", 10, 1, "New_SAC", 10, 1, "SPool", 50, 2],
    ["IIT Kanpur Stadium", "Old_SAC", 270, 3, "Outreach", 450, 6, "Tennis_Court", 450, 6],
    ["Swimming Pool", "New_SAC", 50, 2, "Oat", 60, 2, "Hockey_Ground", 60, 2],
    ["MT Point", "Tennis_Court", 350, 4, "Old_SAC", 450, 5, "Library", 600, 7],
    ["Auditorium", "Nursery", 250, 3, "RMKD", 350, 5, "Library", 500, 11],
    ["Tennis Court", "Old_SAC", 260, 3, "MTP", 350, 4, "IITKS", 450, 5],
    ["Old SAC", "Tennis_Court", 260, 3, "IITKS", 270, 3, "Outreach", 550, 4],
    ["New SAC", "Hockey_Ground", 10, 1, "Oat", 10, 1, "SPool", 50, 2],
    ["Oxidation Pond", "Pronite_Ground", 100, 3, "SPool", 550, 7, "Oat", 600, 8],
    ["DOAA Canteen", "MTP", 350, 4, "RMKD", 400, 5, "Nursery", 400, 5],
    ["Park 67", "Auditorium", 950, 12, "Outreach", 1000, 12, "CCD", 1100, 13],
    ["Flight Laboratory", "Nursery", 750, 9, "RMKD", 750, 9, "DOAA_Canteen", 750, 10],
    ["Outreach", "IITKS", 450, 6, "Old_SAC", 550, 7, "Tennis_Court", 800, 10],
];

let distance = 0;
let time = 0;

// Add an event listener to the dropdown
dropdown.addEventListener('change', () => {
    // Check if a value is selected
    if (dropdown.value == "rkd") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[0][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[0][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[0][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[0][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[0][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[0][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[0][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[0][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[0][9]}`;
        time3.classList.add('time');
        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "ccd") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[1][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[1][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[1][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[1][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[1][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[1][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[1][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[1][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[1][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "lib") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[2][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[2][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[2][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[3][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[3][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[3][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "nur") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[3][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[3][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[3][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[3][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[3][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[3][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[3][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "oat") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[4][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[4][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[4][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[4][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[4][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[4][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[4][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[4][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[4][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "pro") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[5][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[5][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[5][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[5][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[5][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[5][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[5][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[5][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[5][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "mmo") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[6][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[6][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[6][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[6][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[6][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[6][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[6][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[6][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[6][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "hcg") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[7][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[7][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[7][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[7][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[7][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[7][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[7][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[7][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[7][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "iks") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[8][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[8][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[8][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[8][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[8][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[8][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[8][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[8][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[8][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "swp") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[9][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[9][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[9][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[9][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[9][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[9][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[9][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[9][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[9][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "mt") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[10][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[10][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[10][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[10][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[10][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[10][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[10][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[10][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[10][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "aud") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[11][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[11][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[11][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[11][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[11][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[11][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[11][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[11][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[11][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "tnc") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[12][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[12][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[12][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[12][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[12][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[12][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[12][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[12][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[12][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "old") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[13][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[13][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[13][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[13][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[13][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[13][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[13][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[13][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[13][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "new") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[14][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[14][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[14][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[14][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[14][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[14][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[14][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[14][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[14][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "oxp") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[15][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[15][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[15][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[15][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[15][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[15][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[15][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[15][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[15][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "dcn") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[16][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[16][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[16][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[16][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[16][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[16][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[16][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[16][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[16][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "pg7") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[17][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[17][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[17][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[17][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[17][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[17][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[17][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[17][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[17][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "flb") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[18][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[18][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[18][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');


        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[18][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[18][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[18][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[18][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[18][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[18][9]}`;
        time3.classList.add('time');



        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else if (dropdown.value == "out") {
        // Create an image element and set its source attribute
        const image1 = document.createElement('img');
        image1.classList.add('image_tag_nearby');
        image1.src = `./images/${arr[19][1]}.jpeg`;
        const image2 = document.createElement('img');
        image2.src = `./images/${arr[19][4]}.jpeg`;
        image2.classList.add('image_tag_nearby');
        const image3 = document.createElement('img');
        image3.src = `./images/${arr[19][7]}.jpeg`;
        image3.classList.add('image_tag_nearby');

        const dist1 = document.createElement('h3');
        dist1.textContent = `THE DISTANCE IN METRES IS ${arr[19][2]}`;
        dist1.classList.add('distance');
        const dist2 = document.createElement('h3');
        dist2.textContent = `THE DISTANCE IN METRES IS ${arr[19][5]}`;
        dist2.classList.add('distance');
        const dist3 = document.createElement('h3');
        dist3.textContent = `THE DISTANCE IN METRES IS ${arr[19][8]}`;
        dist3.classList.add('distance');

        const time1 = document.createElement('h3');
        time1.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[19][3]}`;
        time1.classList.add('time');
        const time2 = document.createElement('h3');
        time2.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[19][6]}`;
        time2.classList.add('time');
        const time3 = document.createElement('h3');
        time3.textContent = `TIME TO REACH HERE IN MINUTES IS  ${arr[19][9]}`;
        time3.classList.add('time');

        // Add the image to the image container
        imageContainer.innerHTML = '';

        imageContainer.appendChild(image1);
        imageContainer.appendChild(dist1);
        imageContainer.appendChild(time1);

        imageContainer.appendChild(image2);
        imageContainer.appendChild(dist2);
        imageContainer.appendChild(time2);

        imageContainer.appendChild(image3);
        imageContainer.appendChild(dist3);
        imageContainer.appendChild(time3);

        imageContainer.style.display = 'block';
    } else {
        // If no value is selected, clear the image container and hide it
        imageContainer.innerHTML = '';
        imageContainer.style.display = 'none';
    }
    document.addEventListener('DOMContentLoaded', createSelect, false);

    function createSelect() {
        var select = document.getElementsByTagName('select'),
            liElement,
            ulElement,
            optionValue,
            iElement,
            optionText,
            selectDropdown,
            elementParentSpan;

        for (var select_i = 0, len = select.length; select_i < len; select_i++) {
            //console.log('selects init');

            select[select_i].style.display = 'none';
            wrapElement(document.getElementById(select[select_i].id), document.createElement('div'), select_i, select[select_i].getAttribute('placeholder-text'));

            for (var i = 0; i < select[select_i].options.length; i++) {
                liElement = document.createElement("li");
                optionValue = select[select_i].options[i].value;
                optionText = document.createTextNode(select[select_i].options[i].text);
                liElement.className = 'select-dropdown__list-item';
                liElement.setAttribute('data-value', optionValue);
                liElement.appendChild(optionText);
                ulElement.appendChild(liElement);

                liElement.addEventListener('click', function() {
                    displyUl(this);
                }, false);
            }
        }

        function wrapElement(el, wrapper, i, placeholder) {
            el.parentNode.insertBefore(wrapper, el);
            wrapper.appendChild(el);

            document.addEventListener('click', function(e) {
                let clickInside = wrapper.contains(e.target);
                if (!clickInside) {
                    let menu = wrapper.getElementsByClassName('select-dropdown__list');
                    menu[0].classList.remove('active');
                }
            });

            var buttonElement = document.createElement("button"),
                spanElement = document.createElement("span"),
                spanText = document.createTextNode(placeholder);
            iElement = document.createElement("i");
            ulElement = document.createElement("ul");

            wrapper.className = 'select-dropdown select-dropdown--' + i;
            buttonElement.className = 'select-dropdown_button select-dropdown_button--' + i;
            buttonElement.setAttribute('data-value', '');
            buttonElement.setAttribute('type', 'button');
            spanElement.className = 'select-dropdown select-dropdown--' + i;
            iElement.className = 'zmdi zmdi-chevron-down';
            ulElement.className = 'select-dropdown_list select-dropdown_list--' + i;
            ulElement.id = 'select-dropdown__list-' + i;

            wrapper.appendChild(buttonElement);
            spanElement.appendChild(spanText);
            buttonElement.appendChild(spanElement);
            buttonElement.appendChild(iElement);
            wrapper.appendChild(ulElement);
        }

        function displyUl(element) {

            if (element.tagName == 'BUTTON') {
                selectDropdown = element.parentNode.getElementsByTagName('ul');
                //var labelWrapper = document.getElementsByClassName('js-label-wrapper');
                for (var i = 0, len = selectDropdown.length; i < len; i++) {
                    selectDropdown[i].classList.toggle("active");
                    //var parentNode = $(selectDropdown[i]).closest('.js-label-wrapper');
                    //parentNode[0].classList.toggle("active");
                }
            } else if (element.tagName == 'LI') {
                var selectId = element.parentNode.parentNode.getElementsByTagName('select')[0];
                selectElement(selectId.id, element.getAttribute('data-value'));
                elementParentSpan = element.parentNode.parentNode.getElementsByTagName('span');
                element.parentNode.classList.toggle("active");
                elementParentSpan[0].textContent = element.textContent;
                elementParentSpan[0].parentNode.setAttribute('data-value', element.getAttribute('data-value'));
            }

        }

        function selectElement(id, valueToSelect) {
            var element = document.getElementById(id);
            element.value = valueToSelect;
            element.setAttribute('selected', 'selected');
        }
        var buttonSelect = document.getElementsByClassName('select-dropdown__button');
        for (var i = 0, len = buttonSelect.length; i < len; i++) {
            buttonSelect[i].addEventListener('click', function(e) {
                e.preventDefault();
                displyUl(this);
            }, false);
        }
    }
});

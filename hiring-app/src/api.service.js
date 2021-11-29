export const APIService = {
  insertData,
  insertEdu,
  insertExp,
  displayResume,
  insertSalary,
  skillmaster
};

function insertData(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:5000/insert", requestOptions)
    .then(handleResponse)
    .catch((err) => {
      if (err.message.includes(401)) {
        console.log("Something went wrong! Please try again later");
      } else {
        console.log(err.message);
      }
    });
}

function skillmaster() {
  const requestOptions = {
    method: "GET",
    
  };
  return fetch("http://localhost:5000/skillmaster", requestOptions)
    .then(handleResponse)
}


function insertSalary(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:5000/salary", requestOptions)
    .then(handleResponse)
    .catch((err) => {
      if (err.message.includes(401)) {
        console.log("Something went wrong! Please try again later");
      } else {
        console.log(err.message);
      }
    });
}


function insertExp(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:5000/experience", requestOptions)
    .then(handleResponse)
    .catch((err) => {
      if (err.message.includes(401)) {
        console.log("Something went wrong! Please try again later");
      } else {
        console.log(err.message);
      }
    });
}
function insertEdu(data) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(data),
  };
  return fetch("http://localhost:5000/education", requestOptions)
    .then(handleResponse)
    .catch((err) => {
      if (err.message.includes(401)) {
        console.log("Something went wrong! Please try again later");
      } else {
        console.log(err.message);
      }
    });
}

function displayResume() {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-type": "blob",
    },
  };
  return fetch("http://localhost:5000/Resume.pdf", requestOptions)
    .then(handleDownload)
    .catch((err) => {
      if (err.message.includes(401)) {
        console.log("Something went wrong! Please try again later");
      } else {
        console.log(err.message);
      }
    });
}

function handleResponse(response) {
  return response.text().then((text) => {
    const data = text && JSON.parse(text);
    return data;
  });
}

function convertToBase64(input) {
  const uInt8Array = new Uint8Array(input);
  const count = uInt8Array.length;

  // Allocate the necessary space up front.
  const charCodeArray = new Array(count);

  // Convert every entry in the array to a character.
  for (let i = count; i >= 0; i--) {
    charCodeArray[i] = String.fromCharCode(uInt8Array[i]);
  }

  // Convert the characters to base64.
  const base64 = btoa(charCodeArray.join(""));
  return base64;
}

async function handleDownload(response) {
  const rawcontent = await response.arrayBuffer();
  const Base64Data = convertToBase64(rawcontent);
  // console.log(Base64Data.toString());
  return Base64Data;
}

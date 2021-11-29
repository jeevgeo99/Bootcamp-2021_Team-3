const express = require("express");
const cors = require("cors");

var aws = require("aws-sdk");

var multer = require("multer");
var multerS3 = require("multer-s3");
var bodyParser = require("body-parser");

const app = express();

const dbService = require("./dbService");
app.use(bodyParser.json());

app.use(express.json({ limit: "10000mb" }));
// AWS Credentials
var s3 = new aws.S3({
  accessKeyId: "",
  secretAccessKey: "",
  region: "",
});

var corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200, // For legacy browser support
};
app.use(cors(corsOptions));

//Function to upload file as multipart to S3
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: "",
    key: function (req, file, cb) {
      cb(null, file.originalname);
    },
  }),
});

// Function to download a file from S3
const download = (req, res) => {
  var params = {
    Bucket: "",
    Key: "",
  };

  params.Key = req.params.filename;

  s3.getObject(params)
    .createReadStream()
    .on("error", function (err) {
      res.status(500).json({ error: "Error occurred: " + err });
    })
    .pipe(res);
};

app.post("/insert", async (req, res) => {
  var data = req.body;
  const db = dbService.getDbServiceInstance();
  let users = false;
  try {
    users = await db.insertDetails(data);
    if (users) {
      res.status(200).json({
        message: "Insertion successful",
        status: "SUCCESS",
      });
    } else {
      return res.status(404).json({
        status: "FAILURE",
        message: "Insertion failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});
app.post("/salary", async (req, res) => {
  var data = req.body;
  const db = dbService.getDbServiceInstance();
  let users = false;
  try {
    users = await db.insertSalary(data);
    if (users) {
      res.status(200).json({
        message: "Insertion successful",
        status: "SUCCESS",
      });
    } else {
      return res.status(404).json({
        status: "FAILURE",
        message: "Insertion failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});
app.post("/experience", async (req, res) => {
  var data = req.body;
  const db = dbService.getDbServiceInstance();
  let users = false;
  try {
    users = await db.insertExp(data);
    if (users) {
      res.status(200).json({
        message: "Insertion successful",
        status: "SUCCESS",
      });
    } else {
      return res.status(404).json({
        status: "FAILURE",
        message: "Insertion failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});



app.post("/education", async (req, res) => {
  var data = req.body;
  const db = dbService.getDbServiceInstance();
  let users = false;
  try {
    users = await db.insertEdu(data);
    if (users) {
      res.status(200).json({
        message: "Insertion successful",
        status: "SUCCESS",
      });
    } else {
      return res.status(404).json({
        status: "FAILURE",
        message: "Insertion failed",
      });
    }
  } catch (error) {
    res.status(500).json({
      error: error,
    });
  }
});

app.get('/skillmaster', async (req, res) => {
	const db = dbService.getDbServiceInstance();

	let skills = [];
	try {
		skills = await db.getskills();
		if (skills !== undefined) {
			res.status(200).json({
				skills: skills,
				status: 'SUCCESS',
			});
		} else {
			res.status(200).json({
				status: 'FAILURE',
			});
		}
	} catch (error) {
		res.status(500).json({
			error: error,
		});
	}
});

app.post("/upload", upload.single("resume"), function (req, res, next) {
  res.send({
    data: req.files,
    msg: "Successfully uploaded.",
  });
});

app.get("/download/:filename", download);

app.listen(5000, () => {
  console.log("Running on port 5000");
});

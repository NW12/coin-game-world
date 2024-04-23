const express = require("express");
const router = express.Router();

const { fetchSmartContractInfo } = require("../../controllers/danishController");

router.get("/", fetchSmartContractInfo);

module.exports = router;

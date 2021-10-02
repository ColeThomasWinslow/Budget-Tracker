const express = require("express");
const router = express.Router();
const { addNewUser, getUser, deleteUser } = require("../controllers/users");
router.route("/").post(addNewUser);
router.route("/:id").get(getUser).delete(deleteUser);

module.exports = router;

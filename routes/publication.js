const PublicationController = require("../controlles/publication");
const express = require("express");

// API routes
const router = express.Router();

router
  .route("/publication")
  .post(PublicationController.addPublication)
  
  router
 .route("/publications")
 .get(PublicationController.findallpublication)


module.exports = router;


const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Job = require("../models/job")

//call our jobs list
router.get("/", (req, res) => Job.findAll().then(jobs => {
    res.render("jobs", {
        jobs
    })
}).catch(err => console.log(err)));

//display add a job
router.get("/add", (req,res) => res.render("add"));

//add new job
router.post("/add", (req, res) => {
    const date = {
        title: "looking for JS dev",
        technologies: "HTML, CSS, JS",
        salary: "80000",
        description: "t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        contact_email: "user1@hotjobs.com"
    }

    let {title,technologies,salary,description,contact_email} = date;

    Job.create({
        title,
        technologies,
        salary,
        description,
        contact_email
    })
    .then(job => res.redirect("/jobs"))
    .catch(err => console.log(err))
})

module.exports = router
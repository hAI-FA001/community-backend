const express = require('express');
const { getSubjects, addSubject, addSubjects, addYearlyRecordFallAndSpring, getSubjectsByIdAndGetPDF } = require('../../controllers/coursesController/subject.controller');
const router = express.Router()

router.get("/", getSubjects)
router.get("/pdf-all-years/:id", getSubjectsByIdAndGetPDF)

router.post("/", addSubject)
router.post("/subjects", addSubjects)
router.post("/year-fall-spring", addYearlyRecordFallAndSpring)




module.exports = router;
const router = require("express").Router();

//NEW
router.get('/new', (req, res) => {
  res.render('places/new')
})


//SHOW
router.get("/", (req, res) => {
  let places = [
    {
      name: "H-Thai-ML",
      city: "Seattle",
      state: "WA",
      cuisines: "Thai, Pan-Asian",
      pic: "/images/h-thai-ml-tables.avif",
    },
    {
      name: "Coding Cat Cafe",
      city: "Phoenix",
      state: "AZ",
      cuisines: "Coffee, Bakery",
      pic: "/images/coffee-cat.jpeg",
    },
  ];

  res.render("places/index", { places });
});

module.exports = router;

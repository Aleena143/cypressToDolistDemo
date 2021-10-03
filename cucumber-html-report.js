const report = require("multiple-cucumber-html-reporter");
report.generate({
jsonDir: "cypress/reports/cucumber-json",  // ** Path of .json file **//
reportPath: "./reports/cucumber-htmlreport.html",
metadata: {
browser: {
name: "chrome",
version: "94",
},
device: "Local test machine",
platform: {
name: "windows",
version: "10",
},
},
});




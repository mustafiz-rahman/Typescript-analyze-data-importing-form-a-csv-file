"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var CsvFileReader_1 = require("./CsvFileReader");
var WinsAnalysis_1 = require("./analyzer/WinsAnalysis");
var summery_1 = require("./summery");
var HtmlReport_1 = require("./reportstarget/HtmlReport");
var csvFileReader = new CsvFileReader_1.CsvFileReader("football.csv");
var matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
//console.log(matches);
var summary = new summery_1.Summery(new WinsAnalysis_1.WinsAnalysis("Man United"), new HtmlReport_1.HtmlReport());
summary.buildAndPrintReport(matchReader.matches);

const express = require("express");
const cors = require("cors");

const data = require("./data");
const {
    calculateLeadTime,
    calculateCycleTime,
    calculateBugRate,
    calculatePRThroughput,
    calculateDeploymentFrequency
} = require("./metrics");

const app = express();
app.use(cors());

app.get("/api/dashboard", (req, res) => {
    const leadTime = calculateLeadTime(data.prs, data.deployments);
    const cycleTime = calculateCycleTime(data.issues);
    const bugRate = calculateBugRate(data.bugs, data.issues);
    const prThroughput = calculatePRThroughput(data.prs);
    const deploymentFrequency = calculateDeploymentFrequency(data.deployments);

    res.json({
        metrics: {
            leadTime: leadTime.toFixed(1),
            cycleTime: cycleTime.toFixed(1),
            bugRate: (bugRate * 100).toFixed(0) + "%",
            prThroughput,
            deploymentFrequency
        }
    });
});

app.listen(5000);
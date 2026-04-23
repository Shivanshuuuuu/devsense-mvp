function calculateLeadTime(prs, deployments) {
    let total = 0, count = 0;

    prs.forEach(pr => {
        const dep = deployments.find(d => d.pr_id === pr.id);
        if (dep) {
            total += (new Date(dep.deployed_at) - new Date(pr.created_at)) / (1000 * 60 * 60 * 24);
            count++;
        }
    });

    return count ? total / count : 0;
}

function calculateCycleTime(issues) {
    let total = 0;

    issues.forEach(i => {
        total += (new Date(i.done) - new Date(i.in_progress)) / (1000 * 60 * 60 * 24);
    });

    return issues.length ? total / issues.length : 0;
}

function calculateBugRate(bugs, issues) {
    return issues.length ? bugs.length / issues.length : 0;
}

function calculatePRThroughput(prs) {
    return prs.filter(p => p.merged).length;
}

function calculateDeploymentFrequency(deployments) {
    return deployments.length;
}

module.exports = {
    calculateLeadTime,
    calculateCycleTime,
    calculateBugRate,
    calculatePRThroughput,
    calculateDeploymentFrequency
};
const data = {
    prs: [
        { id: 1, created_at: "2026-04-01", merged: true },
        { id: 2, created_at: "2026-04-03", merged: true }
    ],
    deployments: [
        { pr_id: 1, deployed_at: "2026-04-04" },
        { pr_id: 2, deployed_at: "2026-04-06" }
    ],
    issues: [
        { in_progress: "2026-04-01", done: "2026-04-03" },
        { in_progress: "2026-04-02", done: "2026-04-05" }
    ],
    bugs: [{}, {}]
};

module.exports = data;
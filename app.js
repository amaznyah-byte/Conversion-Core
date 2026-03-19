function runCC() {
    const input = document.getElementById("input").value;

    if (!input) {
        alert("Enter a situation first");
        return;
    }

    const output = `
=== CONVERSION CORE ===

INSIGHT:
Your situation lacks clear prioritization.

BEST MOVE:
Focus on one high-impact action and ignore all others for 24 hours.

TRADEOFF:
You gain speed and clarity but sacrifice flexibility.

LEVERAGE:
Commit fully to one direction immediately.
    `;

    document.getElementById("output").innerText = output;
}

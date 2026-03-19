function runCC() {

    const input = document.getElementById("input").value;

    if (!input) {
        alert("Enter a situation first");
        return;
    }

    // BASIC INTENT DETECTION
    let intent = "general";
    if (input.includes("money") || input.includes("business")) {
        intent = "business";
    } else if (input.includes("focus") || input.includes("life")) {
        intent = "personal";
    }

    // INSIGHT
    let insight = "Your situation lacks clarity and prioritization.";

    if (intent === "business") {
        insight = "You are facing a decision with unclear ROI and scattered focus.";
    }

    if (intent === "personal") {
        insight = "You are dealing with internal conflict or lack of direction.";
    }

    // BEST MOVE
    let bestMove = "Choose one direction and commit fully for a short period.";

    // TRADEOFF
    let tradeoff = "You gain clarity and momentum but lose flexibility.";

    // LEVERAGE
    let leverage = "The highest leverage move is focusing all energy on one path.";

    // OUTPUT
    const output = `
=== CONVERSION CORE ===

INSIGHT:
${insight}

BEST MOVE:
${bestMove}

TRADEOFF:
${tradeoff}

LEVERAGE:
${leverage}
    `;

    document.getElementById("output").innerText = output;
}

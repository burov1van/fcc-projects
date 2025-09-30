// Step 1: Collect references to the interactive elements we need to read from or update.
const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

// Step 2: Provide a friendly starter example so the interface is not empty on first load.
const seedMarkdown = `# Heading level 1\n\n## Heading level 2\n\n> Quote blocks are great for emphasis.\n\nHere is some **bold text**, some *italic text*, and a [link](https://example.com).\n\n![Alt text](https://picsum.photos/300/160)`;
if (!markdownInput.value) {
  markdownInput.value = seedMarkdown;
}

// Step 3: Declare the converter function required by the project — no parameters, just read textarea value.
function convertMarkdown() {
  // Step 4: Read the raw markdown from the textarea.
  const source = markdownInput.value;

  // Step 5: Work on a copy so we never mutate the original string directly.
  let html = source;

  // Step 6: Turn image syntax into <img> tags before link handling to avoid conflicts.
  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  // Step 7: Convert link syntax into anchor tags.
  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  // Step 8: Replace level-three headings first (###).
  html = html.replace(/(^|\n)\s{0,3}###\s+(.+?)(?=\n|$)/g, '$1<h3>$2</h3>');

  // Step 9: Replace level-two headings (##).
  html = html.replace(/(^|\n)\s{0,3}##\s+(.+?)(?=\n|$)/g, '$1<h2>$2</h2>');

  // Step 10: Replace level-one headings (#).
  html = html.replace(/(^|\n)\s{0,3}#\s+(.+?)(?=\n|$)/g, '$1<h1>$2</h1>');

  // Step 11: Convert blockquotes that start with > into <blockquote> elements.
  html = html.replace(/(^|\n)\s{0,3}>\s?(.+?)(?=\n|$)/g, '$1<blockquote>$2</blockquote>');

  // Step 12: Swap double markers for bold text.
  html = html.replace(/(\*\*|__)(.+?)\1/g, '<strong>$2</strong>');

  // Step 13: Swap single markers for italic text.
  html = html.replace(/(\*|_)([^*_]+?)\1/g, '<em>$2</em>');

  // Step 14: Return the finished HTML so callers can use it as they like.
  return html;
}

// Step 15: Update both the code block and the live preview whenever the markdown changes.
function syncOutputs() {
  // Step 16: Ask the converter for the latest HTML string.
  const html = convertMarkdown();

  // Step 17: Show the raw HTML as text inside the code panel.
  htmlOutput.textContent = html;

  // Step 18: Render the HTML inside the preview panel.
  preview.innerHTML = html;
}

// Step 19: Keep everything in sync on every input event.
markdownInput.addEventListener("input", syncOutputs);

// Step 20: Run once on load so that the starter markdown is rendered immediately.
syncOutputs();
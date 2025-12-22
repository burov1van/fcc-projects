const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

const seedMarkdown = `# Heading level 1\n\n## Heading level 2\n\n> Quote blocks are great for emphasis.\n\nHere is some **bold text**, some *italic text*, and a [link](https://example.com).\n\n![Alt text](https://picsum.photos/300/160)`;
if (!markdownInput.value) {
  markdownInput.value = seedMarkdown;
}

function convertMarkdown() {
  const source = markdownInput.value;

  let html = source;

  html = html.replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img alt="$1" src="$2">');

  html = html.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');

  html = html.replace(/(^|\n)\s{0,3}###\s+(.+?)(?=\n|$)/g, "$1<h3>$2</h3>");

  html = html.replace(/(^|\n)\s{0,3}##\s+(.+?)(?=\n|$)/g, "$1<h2>$2</h2>");

  html = html.replace(/(^|\n)\s{0,3}#\s+(.+?)(?=\n|$)/g, "$1<h1>$2</h1>");

  html = html.replace(
    /(^|\n)\s{0,3}>\s?(.+?)(?=\n|$)/g,
    "$1<blockquote>$2</blockquote>"
  );

  html = html.replace(/(\*\*|__)(.+?)\1/g, "<strong>$2</strong>");

  html = html.replace(/(\*|_)([^*_]+?)\1/g, "<em>$2</em>");

  return html;
}

function syncOutputs() {
  const html = convertMarkdown();

  htmlOutput.textContent = html;

  preview.innerHTML = html;
}

markdownInput.addEventListener("input", syncOutputs);

syncOutputs();

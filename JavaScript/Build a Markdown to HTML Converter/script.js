const markdownInput = document.getElementById("markdown-input");
const htmlOutput = document.getElementById("html-output");
const preview = document.getElementById("preview");

function convertMarkdown() {
  let text = markdownInput.value || "";
  text = text.replace(/\r\n/g, "\n");

  text = text.replace(/^[ \t]*###\s+(.+)$/gm, "<h3>$1</h3>");
  text = text.replace(/^[ \t]*##\s+(.+)$/gm, "<h2>$1</h2>");
  text = text.replace(/^[ \t]*#\s+(.+)$/gm, "<h1>$1</h1>");

  text = text.replace(/^[ \t]*>\s+(.+)$/gm, "<blockquote>$1</blockquote>");

  text = text.replace(/!\[([^\]]*?)\]\(([^)]+?)\)/g, '<img alt="$1" src="$2">');

  text = text.replace(/\[([^\]]+?)\]\(([^)]+?)\)/g, '<a href="$2">$1</a>');

  text = text.replace(/\*\*([^\n]+?)\*\*/g, "<strong>$1</strong>");
  text = text.replace(/__([^\n]+?)__/g, "<strong>$1</strong>");

  text = text.replace(/\*([^\n]+?)\*/g, "<em>$1</em>");
  text = text.replace(/_([^\n]+?)_/g, "<em>$1</em>");

  return text;
}

function render() {
  const html = convertMarkdown();
  htmlOutput.textContent = html;
  preview.innerHTML = html;
}

markdownInput.addEventListener("input", render);
render();

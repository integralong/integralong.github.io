const params = new URLSearchParams(window.location.search);

const project = params.get('project') || 'about';
const title = params.get('title');

if (title) {
  document.title = title;
}

const markdownPath = `md/${project}.md`;

async function loadMarkdown() {
  const response = await fetch(markdownPath);

  if (!response.ok) {
    document.getElementById('markdown-content').innerHTML =
      '<p>Project not found.</p>';
    return;
  }

  let markdown = await response.text();

  const content = document.getElementById('markdown-content');

  /*
   * Protect LaTeX before Marked parses Markdown.
   *
   * Marked normally interprets things such as:
   *
   *   \(
   *   \)
   *   \[
   *   \]
   *
   * as Markdown escape sequences.
   */
  const mathBlocks = [];

  // Protect display math: \[ ... \]
  markdown = markdown.replace(
    /\\\[[\s\S]*?\\\]/g,
    (match) => {
      const index = mathBlocks.push(match) - 1;
      return `MATHBLOCKPLACEHOLDER${index}END`;
    }
  );

  // Protect inline math: \( ... \)
  markdown = markdown.replace(
    /\\\([\s\S]*?\\\)/g,
    (match) => {
      const index = mathBlocks.push(match) - 1;
      return `MATHBLOCKPLACEHOLDER${index}END`;
    }
  );

  // Parse normal Markdown
  let html = marked.parse(markdown);

  // Restore LaTeX after Marked is finished
  html = html.replace(
    /MATHBLOCKPLACEHOLDER(\d+)END/g,
    (_, index) => mathBlocks[Number(index)]
  );

  content.innerHTML = html;

  // Responsive tables
  content.querySelectorAll('table').forEach((table) => {
    const wrapper = document.createElement('div');
    wrapper.className = 'table-wrapper';

    table.parentNode.insertBefore(wrapper, table);
    wrapper.appendChild(table);
  });

  createTableOfContents(content);

  // Render LaTeX with MathJax
  if (window.MathJax?.typesetPromise) {
    await MathJax.typesetPromise([content]);
  }
}

function createTableOfContents(content) {
  const toc = document.getElementById('toc');

  toc.innerHTML = '';

  const headings = content.querySelectorAll('h2, h3');

  headings.forEach((heading, index) => {
    const id = `section-${index}`;

    heading.id = id;

    const link = document.createElement('a');
    link.href = `#${id}`;
    link.textContent = heading.textContent;

    if (heading.tagName === 'H3') {
      link.classList.add('toc-sub');
    }

    toc.appendChild(link);
  });
}

loadMarkdown();
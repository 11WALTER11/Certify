const fs = require("fs");
const axios = require("axios");

const contributorsUrl =
  "https://api.github.com/repos/11WALTER11/Certify/contributors";

async function updateContributors() {
  try {
    const response = await axios.get(contributorsUrl);
    const contributors = response.data;

    const tableRows = contributors.map((contributor) => {
      return `| [${contributor.login}](${contributor.html_url}) | ![${contributor.login}](${contributor.avatar_url}&s=40) |`;
    });

    const readmeContent = `# Project Name\n\nWelcome to the awesome project! We appreciate all contributions from our amazing contributors.\n\n## Active Contributors\n\n| Contributor | Avatar |\n|-------------|--------|\n${tableRows.join(
      "\n"
    )}\n\n<!-- Add more contributors as needed -->\n\n## How to Contribute\n\n...`;

    fs.writeFileSync("README.md", readmeContent);
  } catch (error) {
    console.error("Error updating contributors:", error.message);
  }
}

updateContributors();

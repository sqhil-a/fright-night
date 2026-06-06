const path = require("path");
const { chromium } = require("playwright");

const root = path.resolve(__dirname, "..");

const captures = [
  {
    file: "promo/post.html",
    selector: ".post",
    output: "assets/fright-night-instagram-post.png",
    width: 1080,
    height: 1080,
  },
  {
    file: "promo/reel.html",
    selector: ".reel",
    output: "assets/fright-night-instagram-reel.png",
    width: 1080,
    height: 1920,
  },
];

async function main() {
  const browser = await chromium.launch();

  for (const capture of captures) {
    const page = await browser.newPage({
      viewport: { width: capture.width, height: capture.height },
      deviceScaleFactor: 1,
    });
    await page.route("https://fonts.googleapis.com/**", (route) => route.abort());
    await page.route("https://fonts.gstatic.com/**", (route) => route.abort());

    console.log(`Exporting ${capture.output}`);
    await page.goto(`file://${path.join(root, capture.file)}`, {
      waitUntil: "domcontentloaded",
    });
    await page.waitForTimeout(1500);
    const element = page.locator(capture.selector);
    await element.screenshot({ path: path.join(root, capture.output) });
    await page.close();
  }

  await browser.close();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

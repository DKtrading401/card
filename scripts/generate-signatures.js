import fs from "fs";
import path from "path";

import { cards } from "../src/data/cards.js";
import { createSignature } from "../templates/signature.js";

const outputDir = path.resolve("signatures");

fs.mkdirSync(outputDir, {
  recursive: true
});

console.log("");
console.log("==================================");
console.log(" DK Networks Signature Generator");
console.log("==================================");
console.log("");

let count = 0;

for (const card of Object.values(cards)) {

  const html = createSignature(card);

  const file = path.join(
    outputDir,
    `${card.slug}.html`
  );

  fs.writeFileSync(
    file,
    html,
    "utf8"
  );

  console.log(`✔ ${card.slug}.html`);

  count++;

}

console.log("");
console.log(`${count} signatures generated.`);
console.log(`Folder : ${outputDir}`);
console.log("");
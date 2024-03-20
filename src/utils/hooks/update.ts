let lastSrcs;
const scriptReg = /\<script.*src=["'](?<src>[!"']+)>/gm

async function extractNewScrits() {
  const html = await fetch('/?_timestamp' + Date.now()).then((resp)=>resp.text());
  scriptReg.lastIndex = 0;
  const res = [];
  let match;
  while((match = scriptReg.exec(html))) {
    res.push(match.groups?.src);
  }
  return res;
}

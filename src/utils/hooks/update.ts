let lastSrcs: string | any[];
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

async function needUpdate() {
  const newScripts = await extractNewScrits();
  if (!lastSrcs) {
    lastSrcs = newScripts;
    return false;
  }
  let res = false;
  if (lastSrcs.length ! == newScripts.length) {
    res = true;
  }
  for (let i = 0; i < lastSrcs.length; i++) {
    if (lastSrcs[i] !== newScripts[i]) {
      res = true;
      break;
    }
  }
  lastSrcs = newScripts;
  return res;
}

const DURATION = 1000 * 10;
function autoRefresh(){
  setTimeout(async () => {
    const willUpdate = await needUpdate();
    if (willUpdate) {
      const res = confirm('需要更新');
      if (res) {
        location.reload();
      }
    }
    autoRefresh();
  }, DURATION);
}

autoRefresh();


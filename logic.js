const apps = {
  google: "https://www.google.com",
  youtube: "https://www.youtube.com",
  facebook: "https://www.facebook.com",
  twitter: "https://twitter.com",
  instagram: "https://www.instagram.com",
  whatsapp: "https://www.whatsapp.com",
  amazon: "https://www.amazon.com",
  gmail: "https://mail.google.com",
  reddit: "https://www.reddit.com",
  tiktok: "https://www.tiktok.com",
  linkedin: "https://www.linkedin.com",
  netflix: "https://www.netflix.com",
  yahoo: "https://www.yahoo.com",
  wikipedia: "https://www.wikipedia.org",
  bing: "https://www.bing.com",
  live: "https://www.live.com",
  zoom: "https://zoom.us",
  microsoft: "https://www.microsoft.com",
  openai: "https://www.openai.com",
  pinterest: "https://www.pinterest.com",
  twitch: "https://www.twitch.tv",
  quora: "https://www.quora.com",
  ebay: "https://www.ebay.com",
  stack_overflow: "https://stackoverflow.com",
  apple: "https://www.apple.com",
  wordpress: "https://wordpress.com",
  roblox: "https://www.roblox.com",
  spotify: "https://www.spotify.com",
  xvideos: "https://www.xvideos.com",
  pornhub: "https://www.pornhub.com",
  duckduckgo: "https://duckduckgo.com",
  adobe: "https://www.adobe.com",
  etsy: "https://www.etsy.com",
  dropbox: "https://www.dropbox.com",
  yandex: "https://www.yandex.com",
  office: "https://www.office.com",
  canva: "https://www.canva.com",
  udemy: "https://www.udemy.com",
  coursera: "https://www.coursera.org",
  indeed: "https://www.indeed.com",
  medium: "https://www.medium.com",
  trello: "https://trello.com",
  github: "https://www.github.com",
  gitlab: "https://gitlab.com",
  deviantart: "https://www.deviantart.com",
  espn: "https://www.espn.com",
  cnbc: "https://www.cnbc.com",
  nytimes: "https://www.nytimes.com",
  cnn: "https://www.cnn.com",
  bbc: "https://www.bbc.com",
  aliexpress: "https://www.aliexpress.com",
  walmart: "https://www.walmart.com",
  booking: "https://www.booking.com",
  airbnb: "https://www.airbnb.com",
  hulu: "https://www.hulu.com",
  imdb: "https://www.imdb.com",
  udacity: "https://www.udacity.com",
  khanacademy: "https://www.khanacademy.org",
  salesforce: "https://www.salesforce.com",
  asana: "https://www.asana.com",
  bitbucket: "https://bitbucket.org",
  figma: "https://www.figma.com",
  notion: "https://www.notion.so",
  messenger: "https://www.messenger.com",
  telegram: "https://web.telegram.org",
  wechat: "https://www.wechat.com",
  baidu: "https://www.baidu.com",
  163: "https://www.163.com",
  ok: "https://ok.ru",
  vk: "https://vk.com",
  naver: "https://www.naver.com",
  samsung: "https://www.samsung.com",
  weather: "https://weather.com",
  archive: "https://archive.org",
  investopedia: "https://www.investopedia.com",
  bloomberg: "https://www.bloomberg.com",
  walmart: "https://www.walmart.com",
  homedepot: "https://www.homedepot.com",
  target: "https://www.target.com",
  twitch: "https://www.twitch.tv",
  nike: "https://www.nike.com",
  zillow: "https://www.zillow.com",
  espncricinfo: "https://www.espncricinfo.com",
  reuters: "https://www.reuters.com",
  usps: "https://www.usps.com",
  ups: "https://www.ups.com",
  fedex: "https://www.fedex.com",
  chase: "https://www.chase.com",
  wellsFargo: "https://www.wellsfargo.com",
  bankOfAmerica: "https://www.bankofamerica.com",
  paypal: "https://www.paypal.com",
  capitalOne: "https://www.capitalone.com",
  hsbc: "https://www.hsbc.com",
  netflix: "https://www.netflix.com",
  disneyPlus: "https://www.disneyplus.com",
  primeVideo: "https://www.primevideo.com",
  paramountPlus: "https://www.paramountplus.com",
  crunchyroll: "https://www.crunchyroll.com",
  hotstar: "https://www.hotstar.com",
  speedtest: "https://www.speedtest.net",
  snapchat: "https://www.snapchat.com",
  tumblr: "https://www.tumblr.com",
  threads: "https://www.threads.net",
  mastodon: "https://mastodon.social",
  clubhouse: "https://www.clubhouse.com",
  mix: "https://mix.com",
  mewe: "https://mewe.com",
  minds: "https://www.minds.com",
  diaspora: "https://diasporafoundation.org",
  vk: "https://vk.com",
  okru: "https://ok.ru",
  wechat: "https://www.wechat.com",
  qq: "https://im.qq.com",
  line: "https://line.me",
  kakaotalk: "https://www.kakaocorp.com/service/KakaoTalk",
  viber: "https://www.viber.com",
  signal: "https://signal.org",
  telegram: "https://web.telegram.org",
  discord: "https://discord.com",
  beReal: "https://bereal.com",
  nextdoor: "https://nextdoor.com",
  truthSocial: "https://truthsocial.com",
  gab: "https://gab.com",
  getter: "https://gettr.com",
  taringa: "https://www.taringa.net",
  ello: "https://ello.co",
  wt: "https://wt.social",
  clubhouse: "https://www.clubhouse.com",
  flipboard: "https://flipboard.com",
  goodreads: "https://www.goodreads.com",
  letterboxd: "https://letterboxd.com",
  devto: "https://dev.to",
  hackernews: "https://news.ycombinator.com",
  producthunt: "https://www.producthunt.com",
  dailymotion: "https://www.dailymotion.com",
  rumble: "https://rumble.com",
  bitchute: "https://www.bitchute.com",
};
const micBtn = document.getElementById("micBtn");
const statusDiv = document.getElementById("status");
const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

if (!SpeechRecognition) {
  statusDiv.textContent = "⚠️ Speech Recognition not supported.";
  micBtn.disabled = true;
} else {
  const recognition = new SpeechRecognition();
  recognition.lang = "en-US";
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
  recognition.continuous = true;
  let listening = false;

  function updateUI() {
    micBtn.classList.toggle("listening", listening);
    statusDiv.textContent = listening ? "🎤 Listening..." : "Microphone idle.";
  }

  micBtn.addEventListener("click", () => {
    listening ? recognition.stop() : recognition.start();
  });

  recognition.addEventListener("start", () => {
    listening = true;
    updateUI();
  });

  recognition.addEventListener("error", (e) => {
    statusDiv.textContent = "⚠️ Error: " + e.error;
  });

  recognition.addEventListener("end", () => {
    listening = false;
    updateUI();
  });

  // Utility: check if `pattern` is a subsequence of `text`
  function isSubsequence(pattern, text) {
    let i = 0,
      j = 0;
    while (i < pattern.length && j < text.length) {
      if (pattern[i] === text[j]) i++;
      j++;
    }
    return i === pattern.length;
  }

  recognition.addEventListener("result", (event) => {
    const text = event.results[event.resultIndex][0].transcript
      .trim()
      .toLowerCase();
    console.log("Heard:", text);

    // Handle "search for ..." commands
    const searchMatch = text.match(/^search(?: for)?\s+(.+)/i);
    if (searchMatch) {
      const query = searchMatch[1];
      window.open(
        `https://www.google.com/search?q=${encodeURIComponent(query)}`,
        "_blank"
      );
      return;
    }

    // Normalize command: strip triggers and spaces
    const cleaned = text
      .replace(/^(open|go to|launch|start)\s+/, "")
      .replace(/\s+/g, "");

    // Try to match via direct include or subsequence
    for (const key in apps) {
      if (
        cleaned.includes(key.toLowerCase()) ||
        isSubsequence(key.toLowerCase(), cleaned)
      ) {
        window.open(apps[key], "_blank");
        return;
      }
    }

    // Fallback search
    window.open(
      `https://www.google.com/search?q=${encodeURIComponent(text)}`,
      "_blank"
    );
  });

  updateUI();
}

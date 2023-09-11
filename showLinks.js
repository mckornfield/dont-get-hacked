const bookLinks = [
  {
    section: "Introduction",
    links: [
      {
        id: "conflict",
        href: "https://timesofindia.indiatimes.com/world/rest-of-world/russia-china-north-korea-and-iran-leads-in-supporting-aggressive-cyber-attackers-says-holisticyber-ceo/articleshow/92779362.cms",
      },
      {
        id: "web-growth",
        href: "https://www.elon.edu/u/imagining/time-capsule/150-years/back-1960-1990/",
      },
    ],
  },
  {
    section: "A Zero Trust Internet",
    links: [
      {
        id: "ralph",
        href: "https://www.youtube.com/watch?v=s92IDLfRRyc",
      },
      {
        id: "fbi",
        href: "https://www.fbi.gov/contact-us/field-offices/boston/news/press-releases/fbi-warns-public-to-beware-of-government-impersonation-scams",
      },
      {
        id: "irs",
        href: "https://www.irs.gov/privacy-disclosure/report-phishing",
      },
    ],
  },
  {
    section: "Phishing Emails, Phone Calls, and Texts (oh my!)",
    links: [
      {
        id: "block-callers-iphone",
        href: "https://support.apple.com/guide/iphone/avoid-unwanted-calls-iphe4b3f7823/ios",
      },
      {
        id: "block-messages-iphone",
        href: "https://support.apple.com/guide/iphone/block-filter-and-report-messages-iph203ab0be4/ios ",
      },
      {
        id: "block-callers-android",
        href: "https://support.google.com/phoneapp/answer/3459196",
      },
      {
        id: "block-messages-android",
        href: "https://support.google.com/messages/answer/9061432",
      },
      {
        id: "google-phishing",
        href: "https://phishingquiz.withgoogle.com/",
      },
      {
        id: "ftc-phishing",
        href: "https://www.ftc.gov/business-guidance/small-businesses/cybersecurity/quiz/phishing",
      },
      {
        id: "cisco-phishing",
        href: "https://www.cisco.com/c/en/us/products/security/email-security/what-is-phishing.html",
      },
    ],
  },
  {
    section: "Unsecured Websites and Suspicious Links",
    links: [
      {
        id: "s3-buckets",
        href: "https://cybersecuritynews.com/hackers-leverage-websites-hosted-aws/#:~:text=Hackers%20use%20legitimate%20Amazon%20Web,security%20services%20and%20end%2Dusers.",
      },
    ],
  },
  {
    section: "The Ten Commandments of Safe Web Surfing",
    links: [
      {
        id: "urlvoid",
        href: "https://urlvoid.com",
      },
      {
        id: "checkshorturl",
        href: "https://checkshorturl.com/",
      },
    ],
  },
  {
    section: "Video Calls",
    links: [
      {
        id: "panda-cover",
        href: "https://www.amazon.com/PandaPrivacy-Universal-Webcam-Laptop-MacBook/dp/B07D3C3D7V",
      },
    ],
  },
  {
    section: "Brute Force Password Attacks and Breaches",
    links: [
      {
        id: "owasp",
        href: "https://owasp.org/www-project-top-ten/",
      },
    ],
  },
  {
    section: "System Exploits",
    links: [
      {
        id: "credit-freeze",
        href: "https://www.nerdwallet.com/article/finance/how-to-freeze-credit",
      },
    ],
  },
  {
    section: "Password Managers",
    links: [
      {
        id: "manager-choices",
        href: "https://www.pcmag.com/picks/the-best-password-managers",
      },
      {
        id: "keeper-setup",
        href: "https://www.youtube.com/watch?v=QjTgduOAa_s",
      },
      {
        id: "keepass",
        href: "https://keepass.info/",
      },
    ],
  },
];

bookLinks.forEach((linkSection) => {
  const sectionTitle = linkSection.section;
  const newList = document.createElement("ul");
  newList.ariaLabel = sectionTitle;
  const listElem = document.body.appendChild(newList);
  linkSection.links.forEach((link) => {
    const newListItem = document.createElement("li");
    newListItem.id = link.id;

    const newLink = document.createElement("a");
    newLink.href = link.href;
    newLink.innerText = link.href;

    const textPrefix = document.createElement("label");
    textPrefix.innerText = `${link.id} - `;

    listElem.appendChild(newListItem);
    newListItem.appendChild(textPrefix);
    newListItem.appendChild(newLink);
  });
});

let lastMarkedElement = null;
let htmlBeforeMark = null;
function onHashChange(e) {
  if (window.location.hash) {
    const elementWithHashId = document.getElementById(
      window.location.hash.replace("#", "")
    );
    //   console.log(window.location.hash);
    if (elementWithHashId) {
      if (lastMarkedElement) {
        lastMarkedElement.innerHTML = htmlBeforeMark;
      }
      htmlBeforeMark = elementWithHashId.innerHTML;
      elementWithHashId.innerHTML =
        "<mark>" + elementWithHashId.innerHTML + "</mark>";
      elementWithHashId.scrollTo({
        top: 100,
        left: 100,
        behavior: "smooth",
      });
      lastMarkedElement = elementWithHashId;
    }
  }
}
onHashChange();
window.onhashchange = onHashChange;

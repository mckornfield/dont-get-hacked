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

if (window.location.hash) {
  const elementWithHashId = document.getElementById(
    window.location.hash.replace("#", "")
  );
  console.log(window.location.hash);
  if (elementWithHashId) {
    elementWithHashId.innerHTML =
      "<mark>" + elementWithHashId.innerHTML + "</mark>";
  }
}

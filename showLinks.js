const bookLinks = [
  {
    section: "Introduction",
    links: [
      {
        id: "conflict",
        href: "https://timesofindia.indiatimes.com/world/rest-of-world/russia-china-north-korea-and-iran-leads-in-supporting-aggressive-cyber-attackers-says-holisticyber-ceo/articleshow/92779362.cms",
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

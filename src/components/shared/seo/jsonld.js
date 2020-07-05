
export class JSONLD {
  constructor () {
    this.logoUrl = "https://camo.githubusercontent.com/6316c376ca8e35369c6591c5663ea470e3f1de14/68747470733a2f2f692e696d6775722e636f6d2f476e46477651462e706e67";
  }

  createArticleMarkdown (title, description, image, datePublished, dateModified, fullArticleUrl) {
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": fullArticleUrl
      },
      "headline": title,
      "image": [
        image
       ],
      "datePublished": datePublished,
      "dateModified": dateModified,
      "author": {
        "@type": "Person",
        "name": "Khalil Stemmler"
      },
       "publisher": {
        "@type": "Organization",
        "name": "khalilstemmler.com",
        "logo": {
          "@type": "ImageObject",
          "url": this.logoUrl
        }
      },
      "description": description
    }
  }
}

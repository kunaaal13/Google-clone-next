export default {
  kind: 'customsearch#search',
  url: {
    type: 'application/json',
    template:
      'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
  },
  queries: {
    request: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '7430000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 1,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2621e85551487305e',
      },
    ],
    nextPage: [
      {
        title: 'Google Custom Search - hello world',
        totalResults: '7430000',
        searchTerms: 'hello world',
        count: 10,
        startIndex: 11,
        inputEncoding: 'utf8',
        outputEncoding: 'utf8',
        safe: 'off',
        cx: '2621e85551487305e',
      },
    ],
  },
  context: {
    title: 'Google',
  },
  searchInformation: {
    searchTime: 0.55458,
    formattedSearchTime: '0.55',
    totalResults: '7430000',
    formattedTotalResults: '7,430,000',
  },
  items: [
    {
      kind: 'customsearch#result',
      title: 'Google Maps',
      htmlTitle: 'Google Maps',
      link: 'https://www.google.com/maps/contrib/112908455793954271204/reviews',
      displayLink: 'www.google.com',
      snippet:
        'Hello World. Local Guide · Level 8. 0 points1 point 15,883 points points points points points points. 15,000. 50,000. Looking for your own reviews and ...',
      htmlSnippet:
        '<b>Hello World</b>. Local Guide · Level 8. 0 points1 point 15,883 points points points points points points. 15,000. 50,000. Looking for your own reviews and&nbsp;...',
      cacheId: 'VuFRSWHlulgJ',
      formattedUrl: 'https://www.google.com/maps/contrib/112908455793954271204/reviews',
      htmlFormattedUrl: 'https://www.google.com/maps/contrib/112908455793954271204/reviews',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcS6AKPxcKCbFW7eGHGdTjCiqmdQQ5IgvK--21nWN8kIjF239s-qTIZ3Jk8T',
            width: '310',
            height: '163',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            'og:image': 'https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png',
            'og:image:width': '256',
            'twitter:card': 'summary',
            'og:site_name': 'Contributions by Hello World',
            viewport: 'initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no',
            'og:title': 'Contributions by Hello World',
            'og:image:height': '256',
            google: 'notranslate',
            'og:description': 'Level 8 Local Guide | 15,883 Points',
          },
        ],
        place: [
          {
            image: 'https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png',
            name: 'Contributions by Hello World',
            description: 'Level 8 Local Guide | 15,883 Points',
          },
        ],
        cse_image: [
          {
            src: 'https://maps.gstatic.com/tactile/geoprofile/sharing/lg_5.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: "Hello World It's Me",
      htmlTitle: '<b>Hello World</b> It&#39;s Me',
      link: 'https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw==',
      displayLink: 'www.google.com',
      snippet:
        "The world has evolved into a struggle between what's good and what's right. Join me every Sunday as I breakdown controversial issues about culture, ...",
      htmlSnippet:
        'The <b>world</b> has evolved into a struggle between what&#39;s good and what&#39;s right. Join me every Sunday as I breakdown controversial issues about culture,&nbsp;...',
      cacheId: 'UloBJWbhVwcJ',
      formattedUrl: 'https://www.google.com/podcasts?feed...',
      htmlFormattedUrl: 'https://www.google.com/podcasts?feed...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTw8koyrLYd8yr-aC7c2lCbXjmdrt4AWU5unztZ7lGQYM8DtJT008nxcs9M',
            width: '225',
            height: '225',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
            'apple-itunes-app':
              'app-id=1398000105, affiliate-data=ct=podcastsSmartBannerShow001&pt=9008, app-argument=https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw',
            'og:type': 'music.radio_station',
            'twitter:card': 'summary',
            'twitter:title': "Hello World It's Me",
            'og:site_name': 'Google Podcasts',
            'og:title': "Hello World It's Me",
            'music:creator': "Hello World It's Me",
            title: "Hello World It's Me",
            'og:description':
              "The world has evolved into a struggle between what's good and what's right.\nJoin me every Sunday as I breakdown controversial issues about culture, politics and race.\nSo if you are a person who cares about the world around them and wants informed opinions this podcast is for you.",
            'twitter:creator': "Hello World It's Me",
            'article:author': "Hello World It's Me",
            'twitter:image':
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
            referrer: 'origin',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'og:url':
              'https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy80Y2Y1N2E4NC9wb2RjYXN0L3Jzcw',
          },
        ],
        cse_image: [
          {
            src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkrSuUsJ9qcrOZOZz8aJibPCCxjoeSm12DEp1bJTwXd0QsJXGn',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Cottages',
      htmlTitle: '<b>Hello World</b> Cottages',
      link: 'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?ei=p7N3YaiVIIT92AHr76uQCA&sa=X&ei=goQWYpG0Csf-2QLmiofYDQ&ei=eVYXYqPWFc-E2QKHvorgDA&ved=2ahUKEwjj9vTZiZj2AhVPQlYKHQefAswQv6wDKAB6BAgBEGY',
      displayLink: 'www.google.com',
      snippet:
        'A: hello world cottages offers diffrent well-furnished rooms equipped with all modern conveniences and comforts. To book a room with MakeMyTrip, ...',
      htmlSnippet:
        'A: <b>hello world</b> cottages offers diffrent well-furnished rooms equipped with all modern conveniences and comforts. To book a room with MakeMyTrip,&nbsp;...',
      formattedUrl: 'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      htmlFormattedUrl: 'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQL8DSnE6aj1bgInE4SQEl1uGVs5GyE-aa0di1flk3TgRdTQIKcbk7xJv8q',
            width: '272',
            height: '185',
          },
        ],
        metatags: [
          {
            'application-name': 'Travel',
            'og:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            'og:type': 'website',
            'og:image:width': '296',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Cottages 3.4 ★ (5)',
            mod: 'true',
            'og:site_name': 'Google Hotel Search',
            'apple-mobile-web-app-title': 'Travel',
            'og:title': 'Hello World Cottages 3.4 ★ (5)',
            'og:image:height': '202',
            'og:description': '$36 · Mar 5–6',
            'twitter:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            referrer: 'origin',
            'twitter:image:alt': 'Hello World Cottages 3.4 ★ (5)',
            'apple-mobile-web-app-status-bar-style': 'black',
            'msapplication-tap-highlight': 'no',
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description': '$36 · Mar 5–6',
            'mobile-web-app-capable': 'yes',
            'og:locale': 'en_US',
            'og:url':
              'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?g2lb=4356900',
          },
        ],
        cse_image: [
          {
            src: 'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Cottages',
      htmlTitle: '<b>Hello World</b> Cottages',
      link: 'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?utm_campaign=sharing&utm_medium=link&utm_source=htls&ts=CAESABpUCjYSMjIlMHgzYmJmYzBlZDUyZmFhMDMxOjB4MWJjZDBhOGM3ZWQ1NGRkMDoJTm9ydGggR29hGgASGhIUCgcI5Q8QBhgbEgcI5Q8QBhgcGAEyAhAAKgkKBToDVVNEGgA&rp=SAI&ap=MAA&sa=X&ei=CYIWYo_9N4vq2QKbp57wBA&ei=cVAXYsCLHcf-2QLmiofYDQ&ved=2ahUKEwiAiN75g5j2AhVHf1YKHWbFAdsQv6wDKAN6BQgBEKgB',
      displayLink: 'www.google.com',
      snippet:
        'Hello World Cottages. 3.4. (5). Directions. Overview. Prices. Reviews. Location. Photos. About. Nightly price. Free cancellation only. Sat, Mar 12. Check in.',
      htmlSnippet:
        '<b>Hello World</b> Cottages. 3.4. (5). Directions. Overview. Prices. Reviews. Location. Photos. About. Nightly price. Free cancellation only. Sat, Mar 12. Check in.',
      formattedUrl: 'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      htmlFormattedUrl: 'https://www.google.com/.../ChoIoP- FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?...',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQL8DSnE6aj1bgInE4SQEl1uGVs5GyE-aa0di1flk3TgRdTQIKcbk7xJv8q',
            width: '272',
            height: '185',
          },
        ],
        metatags: [
          {
            'application-name': 'Travel',
            'og:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            'og:type': 'website',
            'og:image:width': '296',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Cottages 3.4 ★ (5)',
            mod: 'true',
            'og:site_name': 'Google Hotel Search',
            'apple-mobile-web-app-title': 'Travel',
            'og:title': 'Hello World Cottages 3.4 ★ (5)',
            'og:image:height': '202',
            'og:description': '$26 · Mar 12–13',
            'twitter:image':
              'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
            referrer: 'origin',
            'twitter:image:alt': 'Hello World Cottages 3.4 ★ (5)',
            'apple-mobile-web-app-status-bar-style': 'black',
            'msapplication-tap-highlight': 'no',
            viewport:
              'width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description': '$26 · Mar 12–13',
            'mobile-web-app-capable': 'yes',
            'og:locale': 'en_US',
            'og:url':
              'https://www.google.com/travel/hotels/entity/ChoIoP-FyeSj8Pj8ARoNL2cvMTFmOXZycGRkdxAB?g2lb=4356900',
          },
        ],
        cse_image: [
          {
            src: 'https://lh5.googleusercontent.com/p/AF1QipP9RJWrTps_WlbuHRrcwuq4sKlfDCzsqHP216vm=w296-h202-n-k-no-v1',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World Shopping',
      htmlTitle: '<b>Hello World</b> Shopping',
      link: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg.k0nhcDgmvBfs&hl=it',
      displayLink: 'www.google.com',
      snippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google ...',
      htmlSnippet:
        'Realizzato con Google My Maps. Nessun risultato. Cerca in questa mappa. Sposta mappa in. Dalla tua mappa. mostra tutto sulla mappa. Da Google&nbsp;...',
      cacheId: 'q0-peCHq4tIJ',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid=zHQsrThy9kNg...hl=it',
      pagemap: {
        website: [
          {
            image: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            name: 'Hello World Shopping',
            description: 'Hello World Shopping',
            url: 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World Shopping',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World Shopping',
            'og:title': 'Hello World Shopping',
            'og:url': 'https://www.google.com/maps/d/viewer?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
            'og:description': 'Hello World Shopping',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1LURvBzdptdvnuQ5lYFaQvSzbLLk&hl=it',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Hello World! Processing',
      htmlTitle: '<b>Hello World</b>! Processing',
      link: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
      displayLink: 'www.google.com',
      snippet:
        'Hello World! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      htmlSnippet:
        '<b>Hello World</b>! Processing. 546 views. Calque sans titre. Projection in Familab - April 2013. Proyección en Arteleku - Octubre 2012.',
      cacheId: 'LkrfSTqN6ZAJ',
      formattedUrl: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      htmlFormattedUrl: 'https://www.google.com/mymaps/viewer?mid=1RskLR63GVFZKuE...',
      pagemap: {
        website: [
          {
            image:
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            name: 'Hello World! Processing',
            description: 'Hello World! Processing',
            url: 'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        metatags: [
          {
            'og:image':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:type': 'website',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Hello World! Processing',
            viewport:
              'initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=0,width=device-width',
            'twitter:description': 'Hello World! Processing',
            'og:title': 'Hello World! Processing',
            'og:url':
              'https://www.google.com/maps/d/viewer?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
            'og:description': 'Hello World! Processing',
            'twitter:image:src':
              'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/maps/d/thumbnail?mid=1RskLR63GVFZKuE-Ujrijeh3jTDg&hl=en_US',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google',
      htmlTitle: 'Google',
      link: 'https://www.google.com/',
      displayLink: 'www.google.com',
      snippet:
        "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking ...",
      htmlSnippet:
        'Search the <b>world&#39;s</b> information, including webpages, images, videos and more. Google has many special features to help you find exactly what you&#39;re looking&nbsp;...',
      cacheId: 'y14FcUQOGl4J',
      formattedUrl: 'https://www.google.com/',
      htmlFormattedUrl: 'https://www.google.com/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT3X9ZpkcNrr2kAcGZuXPZTNiK1oeTXhRMCZ1UGxNLf-an4du0eriX01mc',
            width: '320',
            height: '112',
          },
        ],
        metatags: [
          {
            referrer: 'origin',
            viewport: 'width=device-width,minimum-scale=1.0',
            google: 'notranslate',
            'format-detection': 'telephone=no',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
      htmlTitle: '<b>Helloworld</b> Travel Ltd (HLO) Stock Price &amp; News - Google Finance',
      link: 'https://www.google.com/finance/quote/HLO:ASX',
      displayLink: 'www.google.com',
      snippet:
        'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed ...',
      htmlSnippet:
        'Get the latest <b>Helloworld</b> Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed&nbsp;...',
      cacheId: '24Jok8mq6O4J',
      formattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      htmlFormattedUrl: 'https://www.google.com/finance/quote/HLO:ASX',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRQldTHAz14MiWY-2bpICyONYLUjcoY7hJc8AQj1tmfmhHDQ43UNmSVu_8',
            width: '311',
            height: '162',
          },
        ],
        metatags: [
          {
            'application-name': 'Google Finance',
            'og:image': 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
            'theme-color': '#ffffff',
            'og:type': 'website',
            'og:image:width': '770',
            'twitter:card': 'summary',
            'twitter:title': 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'apple-mobile-web-app-title': 'Google Finance',
            'og:title': 'Helloworld Travel Ltd (HLO) Stock Price & News - Google Finance',
            'og:image:height': '402',
            'og:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'twitter:image': 'https://ssl.gstatic.com/finance/favicon/finance_496x496.png',
            referrer: 'origin',
            'apple-mobile-web-app-status-bar-style': 'default',
            'msapplication-tap-highlight': 'no',
            'twitter:site': '@google',
            viewport:
              'width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no,minimal-ui',
            'apple-mobile-web-app-capable': 'yes',
            'twitter:description':
              'Get the latest Helloworld Travel Ltd (HLO) real-time quote, historical performance, charts, and other financial information to help you make more informed trading and investment decisions.',
            'mobile-web-app-capable': 'yes',
            'og:url': 'https://www.google.com/finance/quote/HLO:ASX',
          },
        ],
        cse_image: [
          {
            src: 'https://ssl.gstatic.com/finance/favicon/finance_770x402.png',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Docs: Free Online Document Editor | Google Workspace',
      htmlTitle: 'Google Docs: Free Online Document Editor | Google Workspace',
      link: 'https://www.google.com/docs/about/',
      displayLink: 'www.google.com',
      snippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      htmlSnippet:
        'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
      cacheId: 'B4Skq4M5akkJ',
      formattedUrl: 'https://www.google.com/docs/about/',
      htmlFormattedUrl: 'https://www.google.com/docs/about/',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSwELdtonBh-4WwJ2BtD4mygtEC5WJBYy4XjXbIvY4YA92EZHCyMfTD',
            width: '36',
            height: '36',
          },
        ],
        metatags: [
          {
            referrer: 'no-referrer',
            'og:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
            'twitter:title': 'Google Docs: Free Online Document Editor | Google Workspace',
            'og:type': 'website',
            viewport: 'initial-scale=1, minimum-scale=1, width=device-width',
            'twitter:url': 'https://twitter.com/googledocs',
            'twitter:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'og:title': 'Google Docs: Free Online Document Editor | Google Workspace',
            'og:url': 'https://www.facebook.com/GoogleDocs/',
            'twitter:creator': 'Google',
            'og:description':
              'Use Google Docs to create, and collaborate on online documents. Edit together with secure sharing in real-time and from any device.',
            'twitter:image':
              'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
        cse_image: [
          {
            src: 'https://kstatic.googleusercontent.com/files/97ecc831526fbe8c60fe88ef0d7a6cbf06361809f0acf857326681f6a1f35740d3bd7d69bf4a5381f5c31a863bccace4d9d1660379182901f73d24ef137f6fb4',
          },
        ],
      },
    },
    {
      kind: 'customsearch#result',
      title: 'Google Chrome Privacy Whitepaper',
      htmlTitle: 'Google Chrome Privacy Whitepaper',
      link: 'https://www.google.com/chrome/privacy/whitepaper.html',
      displayLink: 'www.google.com',
      snippet:
        "Feb 4, 2021 ... This document also describes the controls available to you regarding how your data is used by Chrome. Here we're focusing on the desktop version ...",
      htmlSnippet:
        'Feb 4, 2021 <b>...</b> This document also describes the controls available to you regarding how your data is used by Chrome. Here we&#39;re focusing on the desktop version&nbsp;...',
      cacheId: 't67Y-xu-jmsJ',
      formattedUrl: 'https://www.google.com/chrome/privacy/whitepaper.html',
      htmlFormattedUrl: 'https://www.google.com/chrome/privacy/whitepaper.html',
      pagemap: {
        cse_thumbnail: [
          {
            src: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQKOXFpJVF_Xz2cq8bSojiNKHJUoBzHsj8n3Sdsy1dQnCNO135b0qOVTw',
            width: '48',
            height: '48',
          },
        ],
        metatags: [
          {
            'msapplication-config': '/chrome/static/images/favicons/browserconfig.xml',
            'og:image': 'https://www.google.com/chrome/static/images/chrome-logo.svg',
            'twitter:card': 'summary_large_image',
            'twitter:title': 'Google Chrome Privacy Whitepaper',
            'og:type': 'website',
            'twitter:url': 'https://www.google.com/chrome/privacy/whitepaper.html',
            'og:title': 'Google Chrome Privacy Whitepaper',
            'og:description': 'Google Chrome Privacy Whitepaper',
            'twitter:image': 'https://www.google.com/chrome/static/images/chrome-logo.svg',
            viewport: 'width=device-width, initial-scale=1',
            'twitter:description': 'Google Chrome Privacy Whitepaper',
            'og:locale': 'en_US',
            'og:url': 'https://www.google.com/chrome/privacy/whitepaper.html',
          },
        ],
        cse_image: [
          {
            src: 'https://www.google.com/chrome/static/images/chrome-logo.svg',
          },
        ],
      },
    },
  ],
};

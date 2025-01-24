// Nav links
export const navLinks = [
    {
        name: 'Home',
        url: '/',
        external: false,
    },
    {
        name: 'Discord',
        url: '/discord',
        external: true,
    },
    {
        name: 'YouTube',
        url: '/youtube',
        external: true,
    },
];

// Site config =>
export const site = {
    name: 'example.xyz',
    title: 'example.xyz',
    description: 'A simple Express.js application using EJS for templating.',
    keywords: ['expressjs', 'nodejs', 'commonjs', 'ejs'].join(', '),
    url: 'https://example.xyz/',
    favicon: '/img/logo/default.png',
    themeColor: '#ddac3d',
    image: 'https://expressjs.com/images/og.png',
    twitterHandle: '@express',
};

export const openGraph = {
    type: 'article',
    siteName: 'example.xyz',
    description: 'A simple Express.js application using EJS for templating.',
    image: 'https://expressjs.com/images/og.png',
    imageAlt: 'expressjs',
};

export const twitter = {
    creator: '@express',
    site: '@express',
    cardType: 'summary_large_image',
    imageAlt: '',
};

export const fonts = {
    fonts: [
        'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700,800,900&display=swap',
        'https://fonts.googleapis.com/css?family=Montserrat:400,600,700,800,900&display=swap',
        'https://fonts.googleapis.com/css?family=Lato:300,400,600,700,800,900&display=swap',
    ]
};

export const adsense = {
    client: 'ca-pub-8275781379114487',
};

// Redirects =>
export const redirects = [
    {
        source: "/discord",
        destination: "https://discord.gg",
        permanent: true,
    },
    {
        source: "/youtube",
        destination: "https://youtube.com",
        permanent: true,
    },
];

// Default Port
export const port = 3001;
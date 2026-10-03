export type Sponsor = {
  name: string;
  logo: string;
  url?: string;
  darkLogo?: boolean;
  tier?: "gold" | "silver" | "bronze" | "community";
  logoSize?: "sm" | "md" | "lg" | "xl";
};

export type SponsorYear = {
  year: number;
  sponsors: Sponsor[];
};

export const sponsorYears: SponsorYear[] = [
  {
    year: 2026,
    sponsors: [
      {
        name: "Human Rights Foundation",
        logo: "/2026Sponsors/HRF-Logo-White.webp",
        url: "https://hrf.org",
        tier: "gold",
      },
      {
        name: "Alpen Labs",
        logo: "/2026Sponsors/White Alpen Lockup.webp",
        url: "https://alpenlabs.io",
        tier: "bronze",
      },
      {
        name: "Nunchuk",
        logo: "/2026Sponsors/nunchuk.webp",
        url: "https://nunchuk.io",
        tier: "bronze",
        logoSize: "lg",
      },
      {
        name: "BTC++",
        logo: "/2026Sponsors/btcplusplus.webp",
        url: "https://btcplusplus.dev",
        tier: "bronze",
        logoSize: "lg",
      },
      {
        name: "Cake Wallet",
        logo: "/2026Sponsors/cake-wallet.webp",
        url: "https://cakewallet.com",
        tier: "silver",
      },
      {
        name: "CogCoin",
        logo: "/2026Sponsors/cogcoin.webp",
        url: "https://cogcoin.org/",
        tier: "silver",
        logoSize: "lg",
      },
      {
        name: "Hydrax",
        logo: "/2026Sponsors/hydrax.webp",
        url: "https://hydrax.io",
        darkLogo: true,
        tier: "bronze",
        logoSize: "lg",
      },
      {
        name: "Anchorage Digital",
        logo: "/2026Sponsors/Anchorage Digital.webp",
        url: "https://anchorage.com",
        tier: "bronze",
      },
      // {
      //   name: "Lightning Labs",
      //   logo: "/2026Sponsors/Lightning Labs.webp",
      //   url: "https://lightning.engineering",
      //   tier: "bronze",
      //   logoSize: "lg",
      // },
      {
        name: "Fidelity",
        logo: "/2026Sponsors/Fidelity.webp",
        url: "https://fidelity.com",
        tier: "bronze",
        logoSize: "lg",
      },
      {
        name: "Allium",
        logo: "/2026Sponsors/allium.webp",
        url: "https://allium.so",
        tier: "community",
      },
      {
        name: "System76",
        logo: "/2026Sponsors/System76.svg",
        url: "https://system76.com",
        tier: "community",
        darkLogo: true,
      },
      {
        name: "MIT iHQ",
        logo: "/2026Sponsors/mit-ihq.webp",
        url: "https://ihq.mit.edu",
        tier: "community",
        darkLogo: true,
        logoSize: "xl",
      },
      {
        name: "Bitcoin Magazine",
        logo: "/2026Sponsors/bitcoin-magazine.webp",
        url: "https://bitcoinmagazine.com",
        tier: "community",
        logoSize: "lg",
      },
      {
        name: "Char Network",
        logo: "/2026Sponsors/char-network.webp",
        url: "https://char.network",
        tier: "bronze",
        logoSize: "lg",
      },
      {
        name: "Digital Currency Initiative",
        logo: "/2026Sponsors/digital-currency-initiative.webp",
        url: "https://dci.mit.edu",
        tier: "bronze",
        logoSize: "xl",
      },
    ],
  },
  {
    year: 2025,
    sponsors: [
      {
        name: "Coinbase",
        logo: "/2025Sponsors/Coinbase Logo.webp",
        url: "https://coinbase.com",
        darkLogo: true,
      },
      {
        name: "Human Rights Foundation",
        logo: "/2025Sponsors/HRF-Logo-2048x563.webp",
        url: "https://hrf.org",
        darkLogo: true,
      },
      {
        name: "Alpen Labs",
        logo: "/2025Sponsors/White Alpen Lockup.webp",
        url: "https://alpenlabs.io",
      },
      {
        name: "Citrea",
        logo: "/2025Sponsors/logo_white.webp",
        url: "https://citrea.xyz",
      },
      {
        name: "SatLayer",
        logo: "/2025Sponsors/SatLayer logo vertical White.webp",
        url: "https://satlayer.xyz",
      },
      {
        name: "Cake Wallet",
        logo: "/2025Sponsors/cake-wallet-logo-color-light.webp",
        url: "https://cakewallet.com",
      },
    ],
  },
];

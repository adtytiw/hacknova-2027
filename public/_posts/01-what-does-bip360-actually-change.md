---
title: "What Does BIP-360 Actually Change?"
slug: "what-does-bip360-actually-change"
excerpt: "BIP-360 isn't being pitched as 'Bitcoin is now quantum-safe.' It's a scaffold — a way to make later post-quantum spending paths more practical."
date: "2026-03-16"
number: 1
tweetUrl: "https://x.com/apruden08/status/2032142647738179664"
publishDate: "2026-03-16T19:00:00Z"
---

Bitcoin's recent post-quantum discussion has finally moved out of the vague phase. For years, "quantum threat" talk mostly meant hand-waving: if large quantum computers arrive, exposed elliptic-curve keys could become vulnerable, so Bitcoin may eventually need a migration path. In the last two months, the conversation tightened around a more specific question: if Bitcoin wants a realistic upgrade path, what should be built first? [Bitcoin Magazine's recent overview of BIP-360](https://bitcoinmagazine.com/news/bitcoin-advances-toward-quantum-resistance) frames the answer as a preparatory structural change, while [Bitcoin Optech #395](https://bitcoinops.org/en/newsletters/2026/03/06/) and recent [Delving Bitcoin discussion](https://delvingbitcoin.org/t/op-cat-and-bitcoin-s-path-to-quantum-resistance/2207) make clear that the hard part is still migration.

BIP-360 is not being pitched by serious sources as "Bitcoin is now quantum-safe." It is being treated more like a scaffold: a way to commit to Merkle roots that could make later post-quantum spending paths more practical. That is a much more modest claim, but also a more useful one. The recent discussion is not really about whether BIP-360 "wins." It is about what it enables, what it does not solve, and how it changes the menu of possible next steps.

---

Alex Pruden ([@apruden08](https://x.com/apruden08)), who is speaking at the 2026 MIT Bitcoin Expo, posted this [thread critiquing a recent ARK Invest paper on quantum risk to Bitcoin](https://x.com/apruden08/status/2032142647738179664), offering a sharp operator perspective on BIP-360's current limitations and the real-world migration hurdles ahead:

> "Pretending otherwise risks ending up with a nasty surprise… the only progress made on PQ is one BIP officially under consideration (of likely 3 total required)."

[Come see him in person on April 11-12 in Cambridge, MA →](https://mitbitcoinexpo.org/speakers)

## The short version

Three things show up again and again in the recent source set.

First, BIP-360 is being treated as an **enabling primitive**, not a final defense. The proposal gives Bitcoin a structure that could host more flexible script or signature approaches later. That is why it keeps appearing alongside discussions of Winternitz-style signatures, algorithm agility, and script-based quantum-resistance constructions.

Second, the exposed-coin problem does not go away. Even if Bitcoin supports better future outputs, coins already sitting behind exposed public keys do not magically become safe. The practical problem becomes migration: how to get users, wallets, businesses, and custodians to move in time.

Third, the debate is starting to split into two layers. There is a protocol layer question — what output or signature constructions Bitcoin should support — and a deployment layer question — how to make a voluntary transition happen at real-world scale.

## What recent sources are emphasizing

[Bitcoin Magazine's February 12 piece](https://bitcoinmagazine.com/news/bitcoin-advances-toward-quantum-resistance) is useful because it gives a general-reader explanation without collapsing into hype. The main takeaway is that BIP-360 represents progress, but not finality. It presents the proposal as a step toward quantum resistance while keeping the key caveat in view: this is a path-builder, not a complete shield.

The [January 20 Delving Bitcoin thread on OP_CAT and Bitcoin's path to quantum resistance](https://delvingbitcoin.org/t/op-cat-and-bitcoin-s-path-to-quantum-resistance/2207) is more revealing because it shows how developers are thinking structurally. The thread ties BIP-360 to broader questions about how Bitcoin might support safer post-quantum paths without forcing a full conceptual reset of the scripting model.

[Bitcoin Optech #395](https://bitcoinops.org/en/newsletters/2026/03/06/) treats BIP-360 as part of the post-quantum toolbox and points readers toward adjacent work rather than turning it into a dramatic one-off. That framing is healthy. The right way to read BIP-360 is as part of a package of emerging options, not as a standalone salvation event.

## The real questions underneath the proposal

The most important recent argument is not "is BIP-360 good?" It is "what problem should Bitcoin solve first?" There are at least four live answers: build safer output structures first, build post-quantum signatures first, prioritize algorithm agility so Bitcoin can swap or combine approaches later, or focus on wallet and migration tooling because user inertia will be the real bottleneck anyway.

These are not mutually exclusive, but they do imply different sequences. And sequence matters. If Bitcoin chooses a path that is elegant on paper but impossible to deploy socially, the cryptography will not save it.

## Why this topic suddenly feels more real

The biggest change is that the discussion is no longer abstract. It now includes concrete questions like: what kinds of script paths would BIP-360 make easier? How would wallets surface migration choices to users? Which UTXO classes remain vulnerable longest? Should Bitcoin prefer script-heavy or signature-heavy post-quantum strategies?

That is progress. Even disagreement is useful here, because disagreement tied to actual proposals is much better than generic future anxiety.

---

The leaders in thinking about quantum-proofing Bitcoin are coming to the 2026 MIT Bitcoin Expo.

[Take a look at the speakers →](https://mitbitcoinexpo.org/speakers)

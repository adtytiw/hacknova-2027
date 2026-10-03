---
title: "What Are People Arguing About With Quantum Migration?"
slug: "quantum-migration-arguments"
excerpt: "Even if Bitcoin gets better future-safe constructions, how does value actually move from old vulnerable forms into newer safer ones? The debate has three layers."
date: "2026-03-17"
number: 2
tweetUrl: "https://x.com/JeremyRubin/status/2031097067041390823"
publishDate: "2026-03-17T13:00:00Z"
---

It is tempting to describe the post-quantum debate as a straight technical race: quantum computers get stronger, Bitcoin upgrades its cryptography, problem solved. The recent discussions do not support that simple picture. The sharper argument is about migration. Even if Bitcoin gets better future-safe constructions, how does value actually move from old vulnerable forms into newer safer ones? And what happens if the technical path arrives before the social one?

Recent debate in the [Delving Bitcoin algorithm-agility thread](https://delvingbitcoin.org/t/algorithm-agility-to-defeat-quantum-and-classical-attacks-on-bitcoins-signature-algorithms/2241), alongside the [BIP-360 conversation](https://delvingbitcoin.org/t/op-cat-and-bitcoin-s-path-to-quantum-resistance/2207) and more public-facing coverage from [Bitcoin Magazine](https://bitcoinmagazine.com/news/bitcoin-advances-toward-quantum-resistance), suggests that "quantum migration" is really three arguments wearing one costume.

---

Jeremy Rubin ([@jeremyrubin](https://x.com/JeremyRubin)), a speaker at the 2026 MIT Bitcoin Expo, framed the recent BIP-110 debate in this [March 9 thread](https://x.com/JeremyRubin/status/2031097067041390823) as a question of ecosystem conventions rather than top-down control, adding a protocol-philosophy angle:

> "The BIP process should document conventions that already exist in the ecosystem, not gatekeep standards that are already widely deployed."

## Argument one: how urgent is the threat?

Some recent voices emphasize preparation over panic. Their view is that Bitcoin should start building migration-capable structures well before any credible emergency. On this reading, the point of BIP-360 and related proposals is not to announce imminent danger, but to avoid a future scenario where the system is forced into rushed decisions.

Other voices are more worried about overreaction. Not because quantum risk is fake, but because a badly framed conversation can make people think partial hardening equals full safety. In that world, Bitcoin could end up with the worst of both outcomes: complacency on the user side and confusion on the technical side.

## Argument two: what exactly needs to migrate?

This is the most practical argument. When people say "Bitcoin needs a quantum path," do they mean future transactions need safer output types, existing coins need to move, wallet software needs to learn new patterns, or exchanges, custodians, and large holders need operational procedures first?

The recent source set points toward "all of the above," but with different priorities. Technical threads tend to focus on constructions and assumptions. Broader explainers tend to focus on exposed outputs and why user action still matters.

## Argument three: should Bitcoin prefer flexibility or specificity?

This is where the conversation starts touching adjacent proposals. One design instinct says Bitcoin should first add structures that keep many post-quantum options open. Another instinct says Bitcoin should move toward a smaller number of concrete, narrowly scoped tools. That tension shows up whenever BIP-360 is mentioned alongside OP_CAT, algorithm-agility discussions, or script-only alternatives.

## Why migration is a harder problem than it sounds

Migration sounds simple until it is turned into operations. A real migration path has to answer questions like: which wallet software identifies vulnerable outputs clearly? How much user action is required? What counts as "migrated enough" for exchanges and institutions? How do you avoid a world where sophisticated holders move first and everyone else lags?

This is why some recent discussion feels less like cryptography and more like infrastructure planning. The protocol can create a path. It cannot force the crowd to walk it.

## What the sources suggest without settling

The best recent material does not give a final answer. It suggests a split view: protocol people are trying to widen Bitcoin's future design space, while deployment reality keeps dragging the discussion back to incentives, UX, and timing.

That is probably the right place to leave the question for now. Quantum migration is not one decision. It is a chain of decisions, and the order may matter as much as the endpoint.

---

The leaders in thinking about quantum-proofing Bitcoin are coming to the 2026 MIT Bitcoin Expo. 4 out of 5 people who didn't get early bird tickets regret their decision.

[See the speakers →](https://mitbitcoinexpo.org/speakers)

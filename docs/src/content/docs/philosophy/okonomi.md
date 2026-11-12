---
title: Okonomi and Okimari
description: How Marchy balances user choice with a safe floor.
---

# Okonomi and Okimari

Marchy's design rule is simple:

> Okonomi for taste. Okimari for safety.

## Okonomi: as you like it

Okonomi is the "choose your own" path. The installer asks; it does not decide for you.

- No pre-selected browser, office suite, AI tool, or desktop style.
- Every choice can be changed later.
- Every option documents what it changes and how to undo it.

## Okimari: the set menu

Okimari is the fixed-course path for people who want a known-good setup:

| Course | For | Shape |
|---|---|---|
| Nami | minimal | base system, browser, terminal |
| Jo | development | Nami + dev tools, containers, editors |
| Tokujo | full | Jo + media, office, AI, extras |
| Hardened | security | minimal + strict defaults and verification |

Presets are previewable and reversible. They are a starting point, not a lock-in.

## The safety floor

Some things are not taste. These stay on by default:

- firewall active, default deny
- full-disk encryption
- signed packages
- no passwordless sudo
- no telemetry

Advanced users can change safety settings only through an explicit path with warnings. The default is safe.

## Why not omakase?

Omakase means "leave it to the chef." That is a valid model, but it is not Marchy's default. Marchy keeps the chef's set menu available (Okimari) while letting you order what you want (Okonomi).

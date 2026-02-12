# Vorathex Learning

A daily build log while developing **Vorathex** — an exchange engine delivered as an API.

This repository documents the journey of building a deterministic, event-sourced exchange infrastructure from scratch.
Every commit represents a concept learned, a component built, or a system improved.

---

## What is Vorathex?

**Vorathex** is a headless exchange engine designed to power any market:

* Crypto
* Energy
* Carbon credits
* Equities
* In-game assets
* Any custom commodity

You define the market.
Vorathex handles the **matching, settlement, replay, and observability**.

---

## Core ideas behind the engine

* Deterministic matching engine remembering every state transition
* Event-sourced architecture with append-only logs
* Exactly-once order processing
* Time-travel replay for debugging and auditing
* Fully observable execution pipeline

Same inputs → same outputs.
Every time.

---

## This repository

This is **not the production engine**.
This is the **learning and experimentation ground** where:

* Concepts are tested
* Core components are prototyped
* Ideas are broken and rebuilt
* Distributed systems concepts are explored

Think of it as:

> “The workshop behind the engine.”

---

## Structure

Each file or folder typically represents:

```
Day XX → concept, experiment, or module
```

Examples:

* Type systems
* Matching logic
* Event handling
* Queue processing
* Replay mechanics

---

## Why this exists

Building an exchange is a multi-year engineering challenge involving:

* Concurrency
* Fault tolerance
* Event sourcing
* Deterministic state machines
* High-performance order matching

This repo is the **daily engineering log** of that journey.

---

## Main project

Official site:
**https://vorathex.com**

---

## Status

* Phase 1: Core engine (in development)
* First release target: **Late 2026**
* Open source planned after Phase 2

---

## Author

**Rehan Ahmed**
Backend & distributed systems
Building exchange infrastructure from first principles.

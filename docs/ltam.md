---
layout: page
title: Linear Transformations and Matrices
description: >
  This chapter shows how to upgrade Hydejack to a newer version. The method depends on how you've installed Hydejack.
hide_description: true
sitemap: false
---

| Chapter 2. Linear Transformations and Matrices

<!-- 0. this unordered seed list will be replaced by toc as unordered list
{:toc} -->

Download Study Guide!
[Formal.ver](/assets/img/linearalgebra/Chapter2_Study_Guide.pdf)
[Messsy Handwritten.ver](/assets/img/linearalgebra/Ch2.pdf)
{:.note.smaller}


**Chapter 2** 

2.1 [Linear Transformations, Null Spaces, and Range](#1-linear-transformations-null-spaces-and-range)

2.2 [Matrix Representation](#2-the-matrix-representation-of-a-linear-transformation) 

2.3 [Composition & Multiplication](#3-composition-of-linear-transformations-and-matrix-multiplication)

2.4 [Invertibility & Isomorphisms](#4-invertibility-and-isomorphisms)

2.5 [Change of Coordinate Matrix](#5-the-change-of-coordinate-matrix)


---

## 1. Linear Transformations, Null Spaces, and Range

### Definition — Linear Transformation

A function **T: V → W** between vector spaces is a **linear transformation** if for all **u, v ∈ V** and scalar **c**:

```
T(u + v) = T(u) + T(v)     (additivity)
T(c·v)   = c·T(v)          (homogeneity)
```

> **Consequence:** `T(0) = 0` and `T(au + bv) = aT(u) + bT(v)` for all scalars a, b.

### Definition — Null Space & Range

| Term | Symbol | Definition |
|------|--------|------------|
| **Null Space** (Kernel) | N(T) | `{ v ∈ V : T(v) = 0 }` |
| **Range** (Image) | R(T) | `{ T(v) : v ∈ V }` |

Both N(T) and R(T) are subspaces of V and W respectively.

### Theorem — Rank–Nullity (Dimension Theorem)

For a linear map **T: V → W** where V is finite-dimensional:

```
nullity(T) + rank(T) = dim(V)

i.e.  dim(N(T)) + dim(R(T)) = n
```

### Visual: How T Acts on the Plane (R² → R²)

```
Standard basis vectors          After transformation T
                                  (example: shear matrix)

  y                               y
  │  e₂=(0,1)                     │    T(e₂)=(1,1)
  │  ↑                            │    ↗
  │  │                            │   /
  │  └──→ e₁=(1,0)               │  /
  └─────────── x                  │ └──→ T(e₁)=(1,0)
                                  └──────────── x

  Unit square □                   Parallelogram ▱
  corners: (0,0)(1,0)(1,1)(0,1)   corners: (0,0)(1,0)(2,1)(1,1)
```

### Common Examples

| Transformation | Matrix A | Effect |
|----------------|----------|--------|
| Identity | `[[1,0],[0,1]]` | No change |
| Scale by k | `[[k,0],[0,k]]` | Uniform scaling |
| Rotation by θ | `[[cosθ,-sinθ],[sinθ,cosθ]]` | Rotates by angle θ |
| Horizontal shear | `[[1,k],[0,1]]` | Skews horizontally |
| Reflection (x-axis) | `[[1,0],[0,-1]]` | Flips over x-axis |
| Projection (x-axis) | `[[1,0],[0,0]]` | Collapses to x-axis |

---

## 2. The Matrix Representation of a Linear Transformation

### Setup

Let V and W be finite-dimensional vector spaces with ordered bases:
- **β = {v₁, …, vₙ}** for V
- **γ = {w₁, …, wₘ}** for W

The **matrix representation** `[T]ᵝᵞ` is the **m × n matrix** whose **j-th column** is the coordinate vector `[T(vⱼ)]ᵞ`.

```
         ┌                    ┐
         │ ↑     ↑       ↑   │
[T]ᵝᵞ =  │ [T(v₁)]ᵞ  …  [T(vₙ)]ᵞ │
         │ ↓     ↓       ↓   │
         └                    ┘
```

### Key Fact

> Once bases are chosen, every linear transformation **T: ℝⁿ → ℝᵐ** is uniquely determined by an **m × n matrix A**, and:
> ```
> T(x) = Ax   for all x ∈ ℝⁿ
> ```

### How to Find the Matrix

**Step 1.** Apply T to each basis vector: compute `T(v₁), T(v₂), …, T(vₙ)`

**Step 2.** Express each result in terms of the output basis γ

**Step 3.** Write those coordinate vectors as columns of A

### Example: T: ℝ² → ℝ² where T(x,y) = (2x+y, x−y)

```
T(e₁) = T(1,0) = (2, 1)   ← column 1
T(e₂) = T(0,1) = (1,−1)   ← column 2

        ┌ 2   1 ┐
A  =    │       │
        └ 1  −1 ┘
```

---

## 3. Composition of Linear Transformations and Matrix Multiplication

### Why Matrix Multiplication Works the Way It Does

If **T: V → W** and **U: W → X** are both linear, then the composition **UT: V → X** is also linear.

In matrix form:

```
[UT]ᵝᵟ  =  [U]ᵞᵟ · [T]ᵝᵞ
```

> **This is precisely why** matrix multiplication is defined as it is — it encodes **function composition**.

### Composition in Steps

```
         T              U
  ℝⁿ ─────→ ℝᵐ ─────→ ℝᵖ
  │                      ↑
  └─────── UT ───────────┘

  x  →  T(x)  →  U(T(x))
  x  →   Ax   →    B(Ax) = (BA)x
```

### Properties

| Property | Formula |
|----------|---------|
| Associativity | `(AB)C = A(BC)` |
| Distributivity | `A(B+C) = AB + AC` |
| **NOT commutative** | `AB ≠ BA` in general |
| Identity | `AI = IA = A` |

### Example: Rotation then Scaling

```
T₁ = rotate 45°        T₂ = scale x by 2

     [cos45  -sin45]        [2  0]
A₁ = [sin45   cos45]   A₂= [0  1]

Composed matrix A₂A₁:
  [2·cos45  -2·sin45]   ≈  [ 1.41  -1.41]
  [  sin45    cos45 ]      [ 0.71   0.71]

Note: Apply A₁ FIRST (rightmost), then A₂
```

---

## 4. Invertibility and Isomorphisms

### Definitions

A linear transformation **T: V → W** is **invertible** if there exists **T⁻¹: W → V** such that:

```
T⁻¹ ∘ T = Iᵥ    (identity on V)
T ∘ T⁻¹ = I_W   (identity on W)
```

An invertible linear map is called an **isomorphism**. If such a map exists, V and W are **isomorphic** (V ≅ W).

### Theorem — Invertibility Conditions

For a linear map **T: V → W** with dim(V) = dim(W) = n, these are equivalent:

1. T is invertible
2. T is injective (one-to-one): `N(T) = {0}`
3. T is surjective (onto): `R(T) = W`
4. `rank(T) = n`
5. `det(A) ≠ 0` (for the matrix representation A)

### The Determinant as a Scaling Factor

```
det(A) tells you how A transforms AREA (in 2D) or VOLUME (in 3D)

det > 0  →  orientation preserved, area scaled by |det|
det < 0  →  orientation reversed
det = 0  →  space collapses! NOT invertible
```

### Visual: Effect of det on Unit Square

```
det = 1          det = 2          det = 0
(no change)      (area doubled)   (collapsed!)

┌──┐             ┌────┐           /
│  │    →        │    │   →      /
└──┘             └────┘         /  ← just a line
area = 1         area = 2       area = 0
```

### Computing the 2×2 Inverse

```
    ┌ a  b ┐              1    ┌  d  -b ┐
A = │      │   A⁻¹ =  ─────── │       │
    └ c  d ┘            ad-bc  └ -c   a ┘

Valid only when det(A) = ad - bc ≠ 0
```

---

## 5. The Change of Coordinate Matrix

### Motivation

The same linear transformation can have *different* matrix representations depending on which **basis** you choose. A smart basis choice can reveal structure (e.g., make A diagonal).

### Definition

If **β** and **β'** are two ordered bases for V, the **change of coordinate matrix** from β' to β is the invertible matrix **Q** such that:

```
[v]_β  =  Q · [v]_β'    for all v ∈ V
```

### Relationship Between Representations

```
[T]_β'  =  Q⁻¹ · [T]_β · Q
```

Two matrices related by this formula are called **similar**.

### How to Compute Q

Let β = {u₁, u₂} and β' = {w₁, w₂}.

```
Step 1. Express each β'-basis vector in terms of β:
        write w₁ and w₂ as linear combinations of u₁, u₂

Step 2. The coordinate vectors [w₁]_β and [w₂]_β become
        the COLUMNS of Q

Step 3. Verify: Q is invertible (det ≠ 0)
```

### Example: Standard vs. Rotated Basis

```
Standard basis β:   e₁ = (1,0),  e₂ = (0,1)

Rotated basis β':   w₁ = (cos30°, sin30°)  ≈  (0.87, 0.50)
                    w₂ = (−sin30°, cos30°) ≈  (−0.50, 0.87)

       ┌ 0.87  −0.50 ┐
Q  =   │             │
       └ 0.50   0.87 ┘

A vector v = (1, 1):
  [v]_β  = (1, 1)   (standard coordinates)
  [v]_β' = Q⁻¹(1,1) ≈ (1.37, 0.37)   (rotated coordinates)
```

### Key Insight

> Choosing the **eigenvectors** of T as a basis makes `[T]_β` **diagonal** — the simplest possible representation. This is the core motivation for eigenvalue decomposition (Chapter 5).

---

## Summary

| Concept | Key Formula | Condition |
|---------|-------------|-----------|
| Linear map | `T(au+bv) = aT(u)+bT(v)` | Always |
| Rank–Nullity | `rank(T) + nullity(T) = dim(V)` | Finite dim |
| Matrix of T | Columns = `[T(vⱼ)]_γ` | Bases β, γ fixed |
| Composition | `[UT] = [U]·[T]` | Matching spaces |
| Invertibility | `det(A) ≠ 0` ↔ `N(T) = {0}` ↔ `R(T) = W` | Square matrix |
| Change of basis | `[T]_β' = Q⁻¹[T]_βQ` | Same V, diff bases |

---


Continue with [Elementary Matrix Operations and Systems of Linear Equations](/docs/emoasole/){:.heading.flip-title}
{:.read-more}

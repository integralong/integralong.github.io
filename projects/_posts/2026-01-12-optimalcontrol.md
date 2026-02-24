---
layout: post
title: DRP | Optimal Control
# image: 
#   path: /assets/img/blog/jeremy-bishop@0,5x.jpg
description: >
  "Direct Reading Program in Mathematics at University of Florida"
sitemap: false
hide_last_modified: true
---

<!-- Version 9 is the most complete version of Hydejack yet.
{:.lead} -->


```
Note: Use a desktop browser to view the interactive table of contents.
```
* toc
{:toc .large-only}



Directed Reading Program (DRP) is mentoring initiative designed to give motivated undergraduates an opportunity to explore advanced mathematics topics under the guidance of a graduate stduent mentor. 

[Click this to learn more about DRP](https://math.ufl.edu/drp/)


## How to mathematically optimize drug regimens using optimal control
> 🔬 Kyle Adams, Julia Bruner, Alexandra Haddad, Drew Nelson, **Lauren Song**, Kayla Adams

**Institution:** University of Florida

**Semester:** Spring 2026

## Reading Materials
* [DRP Reading.pdf](/assets/img/drp/DRP-Reading.pdf)
* [NIH Permalink](https://pubmed.ncbi.nlm.nih.gov/29411198/)

Meetings: Every Tuesday Period 7(1:55-2:45) in LIT 368


### Week 1
Reading
* "Introduction" Section of <i>How to mathematically optimize drug regimens using optimal control, referred to as "main paper."

* Guied Questions
1. Why is optimal control preferred to standard "guess-and-check" methods?
2. How "good" does a model have to be to apply optimal control to it?
3. What does QSP stand for? Compare optimal control systems to QSP models.
4. Take a look at the outline in figure 1. What questions or comments about it can you come up with?

***

### Week 2
Date: January 20th, 2026

1. **Optimal control theory**: Optimal control theory is a powerful tool in mathematical optimization that allows us to find control functions that optimize the trajectory of a PDE with respect to some payoff function. There are multiple approaches this theory utilizes to find such a control, from the calculs of variations approach, to the Pontryagin Maximum principle and dynamic programming.
[Optimal Control Theory](https://surim.stanford.edu/sites/g/files/sbiybj26191/files/media/file/optimal_control_surim_2025_0.pdf)

2. **Mechanistic (and semi-mechanistic) model**: describe systems (biological in our case) based on known laws/concepts. Semi-mechanistic describe systems based on known laws, but are flexible to mechanisms that aren't completely understood.

3. **QSP Model**: "Quantitative Systems Pharmacology" model: a mathematical model incorporates drug effects.
4. **In silico (and in vitro, in vivo, etc)**: In sillico = "performed via computer simulation." In vitro = “performed outside a living organism” (like a petri dish). In vivo = “performed within a living organism”

Here, we discussed comparing HIV Dosing Regimens
constant therapy (traditional) and optimal therapy (optimizes treatment)

In HIV, constant therapy is continous drug pressure to suppress viral replication
optimal control is time-varying, adaptive dosing that minimizes toxicity, resistance, and cost while maintaining control.

**Objective Functionals**: an objective functional allows researchers to summarize multiple goals such as maximizing healthy T cells whille minimizing infected cells and drug toxicity into one mathematical expresion to find the best possible treatment plan.

**Applications in Disease Treatment**: 
* HIV Dosing: simulations show that optimal therapy can lead to better outcomes, such as maintaining higher T cells counts and lower infection levels, even when the total drug exposure (Area Under the Curve) remains the same as traditional methods.

* Chronic Myeloid Leukemia (CML): a comparison of various drug regimens demonstrates that a constrained optimal regimjen achieves a better value (a lower objective functional score) over five years compared to standard constant-dose regimens.

***

### Week 4
Date: February 3rd, 2026

**Artificial Pancreas**: A real-world application of control theory
(closed-loop insulin delivery) automatically adjust dosage based on real-time glucose monitoring.
[Algorithms for a Closed-Loop Artificial Pancreas: The Case for Model Predictive Control](https://pmc.ncbi.nlm.nih.gov/articles/PMC3876342/)


![Semi-mechanistic dynamical systems models of diseases](/assets/img/drp/week4-image.png)



### Week 5
Date: Feburary 10th, 2026

**Practice drawing a model diagram, given the equations**

![equations to diagram](/assets/img/drp/week5-image.png)



**Ways to model growth**

Understanding Immune Dynamics in Liver Transplant Through Mahtematical Modeling

![figure 1](/assets/img/drp/weeek5-Model-Diagram-Dynamics-of-Graft-Rejection-in-Liver-Transplantation-a-Visualization-of.png)


This is the model diagram, dynamics of graft rejection in liver transplantation. 

[Click link to read full article](https://pmc.ncbi.nlm.nih.gov/articles/PMC12276165/)



**Equation 5 models**

{:.note}
Equation (5) models the rate of change of Tregs with respect to time. We assume a constant source rate of Tregs being recruited from outside of our model (pathway v). The factor z represents the natural loss of Tregs. The factor u, which is less than or equal to one, represents the lifespan-lengthening effect IL-2 has on tregs. We use a Michaelis-Menten term to ensure a bound on this effect size.



---
'
$$
\frac{dT_R}{dt}
=
\overbrace{\bar{s}_R}^{v}
-
\overbrace{\delta_R T_R}^{z}
\left(
1
-
\overbrace{\frac{\alpha_{IR} I}{\beta_{IR}+I}}^{u}
\right)
$$

---

### Week 6
Date: Feburary 17th, 2026





### Week 7
Date: February 24th, 2026

**Lagrange Multipliers** solve constrined optimization problems. That is, it's a technique for finding maximum or minium values of a function subject to some contraint.
While it has applications for beyond machine learning; it is used for several key derivations in machine learning.

[Lagrange Multipliers with Computer Science](https://www.cs.toronto.edu/~mbrubake/teaching/C11/Handouts/LagrangeMultipliers.pdf)

![diagram](/assets/img/drp/mindmap-LM.png)


1. The core idea: optimization with rules
Normally, to find the peack of a hill (your objective function, E(x)), you look for the spot where the ground is flat. However, if you are told you must stay on a specific path (your constrint, g(x) = 0), the peack of the hill might not be on that path.

The "easy way" to solve this is to look for the point on your path where the hill's slope and the path's direction align in a specific way.

2. The trick: parallel gradients
imagine the path you must follow is a circle on a map.


* ∇ E (The Hill's Slope): this is the direction that takes you most steeply uphill.
* ∇ g (The Path's Direction): This is the direction perpendicular to your path


At the best possible point on your path, the gradient of the hill and the gradient of the path must be parallel. This means that any move you make that stays on the path won't change your height on the hill.

Mathematically, ∇ E + λ ∇ g = 0

where lambda(λ) is arbitrary number called the Lagrange Miltiplier.

3. The Lagrangian
Instead of dealiing with the hill an dthe path separately, you combine them into one single formula called the Lagrangian.

L(x,λ)=E(x) + λg(x), by creating this new function, you turn a "constrained" problem into a standard "unconstrained" problem.

4. How to solve it?
To find the answer, you simply find where this new function L is "flat" by taking derivatives and setting them to zero.

* with respect to x: this ensures the slopes are parallel.
* with respect to λ: this ensures you are actually standing on the path (g(x) = 0).

5. Example: Minimizing on a circle
if you want to find the lowest point on the plane x + y while staying on the circle  x^2 + y^2 = 1, you create the Lagrangian:

L = x + y + λ(x^2+y^2-1)

By settig the derivatives to zero, the math naturally reveals that the best points are where x = y (specifically at x = y = -1sqrt(2) for the minimum).

> E(x,y) = x + y : this is your objective function. In this specific geometric example, the goal is to find the minimum (the lowest point) of this function.
> g(x,y) = x^2+y^2-1 : this is your constraint. it represents the requirement that any solution must stay on the unit circle (where x^2+y^2 = 1)


6. Why use this?
In machine learning, this "easy way" is used for complex tasks like Principal Component Analysis (PCA) to find the direction of maximum variance while keeping the scale of the vectors concistent, or for estimating probability distributions where all probabilities must add up to exactly 1.

​	
  


[Lagrange Multipliers with Biomathematics](https://www.sciencedirect.com/topics/engineering/lagrange-multiplier-method)
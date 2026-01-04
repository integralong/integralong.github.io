---
layout: post
title: Telehealth
description: >
  Hi! This is my first research at the University of South Florida with Undergraduate Research Society.
sitemap: false
hide_last_modified: true
---

**The Potential Role and Effectiveness of Telehealth for Healthcare-deprived or Low-resource Communities Globally.**

> 🔬 Maribel Serracin, Giang Ha, Chelsea Gabarron, Maria Hanna, Maddie Jarzabek, Archana Rao, **Lauren Song**, Gayathri Mannem

**Presented at:**  <a href="#">Undergraduate Research Conference at the University of South Florida</a>.

**Timeline:** Oct 2023 - April 2024

**Key Tools:** Rayyan

**Quick Links:** [View Poster](/assets/img/logo/URS-Telehealth-Poster.jpg)



```
Note: Use a desktop browser to view the interactive table of contents.
```
* toc
{:toc .large-only}


## Research Overview

### Abstract 
During and following the COVID-19 pandamic, the use of telehealth has been greatly increased due to its effectiveness in providing contactless healthcare. Telehealth has particularly shown promise in reaching people who cannot access in-person healthcare due to reasons incuding but not limited to scarcity of neaby medical centers, lack of transportion, and lack of finances.

This systematic review evaluates experimental and review articles to determine the global impact and effectiveness of telehealth practices. The results of this review demonstrated that telehealth has greatly improved accessbility and facilitating easy access to information through e-record systems.

Telehealth has also made improvements in quality of care for underserved populations and in closing the healthcare gap between urban and rural patients. Telehealth has been particularly beneficial in areas such as cancer screenings, chronic condition management, addressing acute medical emergencies, and pediatric care.

However, research has also found that while telehealth can close mobility and transportation gaps, disparities due to insufficient internet, lack of access to devices, and language barriers continue to persis. 

Overall, this review has determined that telehealth has significant benefits for improving access to and quality of medical care, especially for people in rural or underserved areas. However, it is important to address continuing disparities through further research such as by exploring training for healthcare professionals and investigatin how to close telehealth-related barriers for certain demographics such as older adults and racial and ethnic minorities.

### Introduction
The COVID-19 pandemic has changed the landscape of healthcare delivery worldwide, fostering the expansion of telehealth. Telehealth utilization represents an adaptation to the challenges of providing continous healthcare admist restrctions on physical mobility and social distancing. The pandemic have thrust telehealth to the forefront, showcasing its potential to bridge gaps in access to healthcare services. The shift towards telehealth opened new avenues for patient care, extending reach of medical services to populations that previously faced substantial barriers to access.

This review aims to assess the global impact and effectiveness of telehealth practices during and follwong the pandemic, evaluating its role in enhancing accessbility, quality of care, and its potential in mitigating healthcare disparities.

By analyzing scholarly articles, it seeks to understand how telehealth has improved healthcare accessbility and quality, especially for those previously hindered by distance, transportation issues, or financial limitations, while also acknowledging ongoing disparities such as internet access, device availability, and language barriers. The review intends to offer insights into telehealth's benefits and areas requiring further research to enhance its equity and effectiveness across all demographics.

### Methods and Materials
Articles discussing the effects of telehealth on healthcare-deprived and low-resource communities were collected and screened throguh Rayyan. A systematic review was then conducted to filter through various study methods and variables to determine relevancy to the research topic.


<br>


<div style="width: 100%;"><div style="position: relative; padding-bottom: 56.25%; padding-top: 0; height: 0;"><iframe title="Identification" frameborder="0" width="1200" height="675" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;" src="https://view.genially.com/695a2506838daacff3cc57fd" type="text/html" allowscriptaccess="always" allowfullscreen="true" scrolling="yes" allownetworking="all"></iframe> </div> </div>

### Results
<br>

<link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.11.5/css/jquery.dataTables.css">
<script type="text/javascript" charset="utf8" src="https://code.jquery.com/jquery-3.5.1.js"></script>
<script type="text/javascript" charset="utf8" src="https://cdn.datatables.net/1.11.5/js/jquery.dataTables.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

<div style="overflow-x: auto; margin-top: 20px;">
    <table id="studyTable" class="display" style="width:100%"></table>
</div>

<script>
$(document).ready(function() {
    Papa.parse("/assets/img/logo/telehealth-studies.csv", {
        download: true,
        header: true,
        complete: function(results) {
            $('#studyTable').DataTable({
                data: results.data,
                columns: [
                    { data: 'Authors', title: 'Authors' },
                    { data: 'Year', title: 'Year' },
                    { data: 'Title', title: 'Title' },
                    { data: 'Journal', title: 'Journal' },
                    { data: 'Type of Study', title: 'Type' },
                    { data: 'Main Findings', title: 'Main Findings' }
                ],
                pageLength: 5, // 한 번에 보여줄 논문 개수
                language: { search: "Search Articles:" }
            });
        }
    });
});
</script>


### Discussion
The latest study underscores the positive impacts of telehealth utilization within communities, especially those catering to healthcare-deprived or low-resource demographics. However, it also brings attention to pertinent issues, particularly from an economic standpoint, as the costs of essential telehealth equipment pose a significant challenge.

By addressing these challenges directly, it can be ensured that telehealth's influential promise is fulfilled, resulting in more equitable access to healthcare services for all individuals, regardless of geographical location or socioecnomic status.


### Conclusions
Telehealth initiatives have demonstrated significant strides in extending their reach to underserved populations, including within developing nations where technology adoption remains sparse. Health care professionals advocate for Telehealth, asserting that the caliber of care delivered via this digital platform is commensurate with that of traditional in-person consultations. Its applicability ranges from chronic disease management to acute emergency situations, enhancing accessibility and quality of healthcare services. Moreover, with the improved accessbility of medical information through research programs like INvest clinical trials and initiatives like GIVE, remote healthcare services are expanding. For example, a study conducted revealed that more than half of children who suffer from asthma fail to attend their in-person medical appointments due to transportation difficulties. 

Telehealth has played a crucial role in overcoming these financial and logistical obstacles, enabling families globally to access medical care from a physician without the burdens that traditionally hinder patient care. The findings from scholarly articles provide insightful and quantitative evidence on Telehealth's positive effect on various communities, such as low-income families and the elderly.

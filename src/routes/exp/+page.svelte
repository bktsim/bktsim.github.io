<script>
    import { PFP_2 } from "../../resource.js";
    import Navbar from "$lib/Navbar.svelte";
    import Job from "$lib/Job.svelte";
</script>

<main>
    <Navbar />
    <div class="grid grid-cols-7 gap-6">
        <div
            class="col-span-7 flex border-2 border-dotted justify-center overflow-clip"
        >
            <pre class="text-[0.1rem]/[0.125rem] p-4">{PFP_2}</pre>
        </div>
        <div class="col-span-7 mt-2">
            <h5 class="mb-0 pb-0">Full-time</h5>
        </div>
        <Job
            company={"Google - SWE"}
            companyColor={"#3C4043"}
            timeFrame={"03.2025 - Present"}
            technologies={[
                "Python, Java, TypeScript, Angular",
                "Bunch of Google stuff",
            ]}
            location={"Kirkland, United States"}
            bulletPoints={[
                "Designing and improving cloud security infrastructure for developers.",
            ]}
        />
        <Job
            company={"Sales Marker - SWE"}
            companyColor={"#0766f4"}
            timeFrame={"11.2024 - 02.2025"}
            technologies={["TypeScript", "React", "Express", "SQL", "Datadog"]}
            location={"Tokyo, Japan"}
            bulletPoints={[
                "Full stack application development on Sales Marker, the company's flagship product with React, TypeScript, Express and SQL.",
                "Collaborated cross-team & led full-stack implementation for migration to a more reliable data source for company filtering, achieving 96.8% feature opt-in.",
                "Increased user engagement, success on platform and feature adoption rate by 500% in 3 months through rapid iterations based on user activity data & feedback.",
                "Increased time-on-task of analysis feature by 61.3% by identifying, linking and enabling additional data useful for users to understand platform effectiveness.",
            ]}
        />
        <div class="col-span-7 mt-2">
            <h5 class="mb-0 pb-0">Internships</h5>
        </div>
        <Job
            company={"Arista Networks - SWE Intern"}
            companyColor={"#002d60"}
            timeFrame={"09.2023 - 12.2023"}
            technologies={["Python", "C++", "Redis", "Linux & Friends"]}
            location={"Vancouver, Canada"}
            bulletPoints={[
                "Contributed to multi-asic support on SONiC, an open-source network operating system under the Linux Foundation for network switches.",
                "Prototyped new drop-counters feature to increase system observability.",
            ]}
        />
        <Job
            company={"Alida - SWE Intern"}
            companyColor={"#ffaf4e"}
            timeFrame={"01.2022 - 08.2022"}
            technologies={["TypeScript", "React", "Jest", "C#", "SQL"]}
            location={"Vancouver, Canada"}
            bulletPoints={[
                "Full-stack development on Surveys app using TypeScript, React and C#.",
                "Created and maintained web-accessible (A11Y Compliant) questions across Surveys. One of them got into the Q2 call for customers & stakeholders.",
                "Designed and built backend architecture for backend API migration.",
            ]}
        />
        <Job
            company={"Kai Shing - SWE Intern"}
            companyColor={"#d2bd60"}
            timeFrame={"05.2021 - 07.2021"}
            technologies={["Java", "Python", "Spring Boot", "SQL", "Liquid"]}
            location={"Hong Kong SAR"}
            bulletPoints={[
                "Automated and improved existing processes taking up to ~2 days by building dashboards & data pipelines against identified bottlenecks.",
                "Processed IoT data and built API endpoints for smart building mgmt.",
                "Created API endpoints for data processing using Azure APIM and Liquid.",
            ]}
        />
    </div>
</main>

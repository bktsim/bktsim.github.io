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
            technologies={["Python, Java, TypeScript, Angular", "Google Tech"]}
            location={"Kirkland, United States"}
            sectionedBulletPoints={[
                {
                    title: "Cloud Security, Infrastructure",
                    points: [
                        "Served as owner in test authoring on compliance & testing platform, planning roadmaps, triaging & resolving production issues and customer escalations.",
                        "Increased issue resolution rate by 41% & decreased resolution time by 76% by planning & executing multi-quarter roadmaps improving the onboarding experience.",
                        "Reduced onboarding time by ~3 weeks/mo by identifying, analyzing and designing solutions (Web UI, MCP, Agent Orchestrations) to solve user pains & bottlenecks.",
                        "Enabled automations saving ~6 days/team & protected against $XXXk/mo resource leaks by designing & implementing a registry to manage test environments.",
                    ],
                },
            ]}
        />
        <Job
            company={"Sales Marker - SWE"}
            companyColor={"#0766f4"}
            timeFrame={"11.2024 - 02.2025"}
            technologies={[
                "TypeScript",
                "React",
                "Express",
                "SQL",
                "AWS",
                "Datadog",
            ]}
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
            technologies={[
                "Java",
                "Python",
                "Spring Boot",
                "SQL",
                "Azure",
                "Liquid",
            ]}
            location={"Hong Kong SAR"}
            bulletPoints={[
                "Automated and improved existing processes taking up to ~2 days by building dashboards & data pipelines against identified bottlenecks.",
                "Processed IoT data and built API endpoints for smart building mgmt.",
                "Created API endpoints for data processing using Azure APIM and Liquid.",
            ]}
        />
        <div class="col-span-7 mt-2">
            <h5 class="mb-0 pb-0">Education</h5>
        </div>
        <Job
            company={"The University of British Columbia"}
            companyColor={"#002145"}
            timeFrame={"09.2020 - 05.2024"}
            technologies={["BSc Computer Science"]}
            location={"Vancouver, Canada"}
            bulletPoints={[
                "Teaching Assistant in systems courses for 1 year, including Computer Hardware & Operating Systems (01/24 - 04/24), Computer Systems (09/22 - 12/22) and Models of Computation (09/21 - 12/21).",
                "Received Faculty of Science International Student Scholarship and Trek Excellence Scholarship for strong academic achivement.",
            ]}
        />
        <Job
            company={"Waseda University"}
            companyColor={"#911D22"}
            timeFrame={"04.2023 - 06.2023"}
            technologies={["Exchange Term"]}
            location={"Tokyo, Japan"}
            bulletPoints={[
                "Pitched to the class on why you should watch VTubers in Japanese. Rated #1 presentation in class, tied with another presenter.",
            ]}
        />
    </div>
</main>

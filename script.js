const testimonials = [
    {
        name: "Benjamin Ngyema, Course Mate",
        text: "Working with Peter is very efficient and time-consuming when building up web pages and he is able to help when an issue occurs."
    },
    {
        name: "Abdullahi Mohammed, Team mate",
        text: "When given an assignment he is able to come up with problem-solving methods on how we can manage and find solution to the given task."
    },
    {
        name: "Peter Muturi, Course mentor",
        text: "Peter is a very hardworking and dedicated person who is able to complete his tasks on time and he is able to work with his team mates to achieve the best results."
    }
];
const projects
    {
        title: "portfolio project",
        description: "This is a portfolio project that I have built and it is a responsive website that showcases my skills and projects.",
        technologies: ["HTML", "CSS"]
    },
    {
        title: "webpage project",
        description: "i created a webpage that has enabled learn new skills and i had to apply the skills that i have learned in order to create a webpage that is responsive and has a good user experience.",
        technologies: ["HTML", "CSS", "JavaScript"]
    }

];
const testimonialList = document.getElementById("testimonial-list");
for(const t of testimonials) {
    const testimonialDiv = document.createElement("div");
    testimonialDiv.className = "testimonial";
    testimonialDiv.innerHTML = `
        <h1>${t.name}</h1>
        <p>${t.text}</p>
    `;
    testimonialList.appendChild(testimonialDiv);
}
const projectList = document.getElementById("project-list");
for(const p of projects) {
    const projectDiv = document.createElement("div");
    projectDiv.className = "project";
    projectDiv.innerHTML = `
        <h1>${p.title}</h1>
        <p>${p.description}</p>
        <p>Technologies: ${p.technologies.join(", ")}</p>
    `;
    projectList.appendChild(projectDiv);
}

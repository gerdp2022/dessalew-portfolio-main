import experience from './experience.js'
import education from './education.js'
import skills from './skills.js'
import certifications from './certifications.js'
import projects from './projects.js'

const currentRole = experience[0]
const totalCerts = certifications.reduce((sum, group) => sum + group.items.length, 0)

const topics = [
  {
    id: 'about',
    keywords: ['about', 'who are you', 'who is', 'introduce', 'background', 'summary'],
    answer:
      "I'm Dessalew Yeshiwas, an Ethiopian IT professional with 13+ years of experience keeping infrastructure reliable — from Active Directory and Exchange to hypervisors, backups, and cloud-managed networks. Most of that time was spent as IT Administrator at the Grand Ethiopian Renaissance Dam Project, one of Africa's largest construction sites.",
  },
  {
    id: 'experience',
    keywords: ['experience', 'work', 'job', 'career', 'employ', 'current role', 'currently'],
    answer: `Currently: ${currentRole.role} at ${currentRole.org} (${currentRole.range}), plus part-time Infrastructure Management Lead work for Florida University Southeast. Before that, I spent 13 years at Webuild S.p.A on the Grand Ethiopian Renaissance Dam Project, progressing from IT Engineer & HelpDesk Coordinator to IT Administrator — managing VMware, Windows Server, Active Directory, Cisco Meraki networking, and disaster recovery for a workforce that couldn't afford downtime. Check the Experience section for the full timeline.`,
  },
  {
    id: 'skills',
    keywords: ['skill', 'tech stack', 'technologies', 'tools', 'know how to', 'expertise', 'proficient'],
    answer: `My core skills span ${skills.map((s) => s.category.toLowerCase()).join(', ')}. Highlights include VMware vSphere, Windows Server, Active Directory, Cisco Meraki, Microsoft 365/Intune/Entra ID, and Veeam backup & disaster recovery. Full breakdown is in the Skills section.`,
  },
  {
    id: 'education',
    keywords: ['education', 'degree', 'university', 'study', 'studied', 'school', 'college', 'msc', 'mba'],
    answer: `I'm currently pursuing an MSc in Information Technology at Florida University Southeast (started Feb 2024). I hold an MBA from Yardstick International College (CGPA 3.97/4.00, Very Great Distinction), a Bachelor's in Management from Alpha University College, and a B.Sc. in Business Education (ICT) from Addis Ababa University.`,
  },
  {
    id: 'certifications',
    keywords: ['certificat', 'certified', 'training', 'course'],
    answer: `I've completed ${totalCerts}+ certifications and training programs across IT & networking, business & emerging tech, software development, and humanitarian & safety — including Cisco Meraki cloud switching, ITIL V4, cybersecurity fundamentals, AI foundations, Odoo training for manufacturing, and International Humanitarian Law via ICRC. I'm also currently studying AI-Powered Fullstack Application Development. See the Certifications section for the full list.`,
  },
  {
    id: 'projects',
    keywords: ['project', 'built', 'clone', 'portfolio piece', 'netflix', 'chatgpt', 'evangadi', 'coding'],
    answer: `Alongside infrastructure work, I've been building full-stack projects: a Netflix clone, a ChatGPT clone, and an Evangadi Forum full-stack Q&A platform (all completed). Details and links are in the Projects section.`,
  },
  {
    id: 'location',
    keywords: ['location', 'based', 'live', 'where are you', 'country', 'city', 'remote'],
    answer:
      "I'm based in Addis Ababa, Ethiopia, and I'm open to both remote and on-site infrastructure or IT administration roles.",
  },
  {
    id: 'languages',
    keywords: ['language', 'speak', 'amharic', 'english fluency'],
    answer: 'I speak Amharic natively and English at a C1 (advanced professional) level.',
  },
  {
    id: 'contact',
    keywords: ['contact', 'email', 'reach', 'hire', 'phone', 'linkedin', 'get in touch'],
    answer:
      "You can reach me at desuy26@gmail.com, by phone at (+251) 940 216 092, or on LinkedIn at linkedin.com/in/dessalew-yeshiwas-a16a1a95. I'm open to infrastructure & IT administration roles, remote or on-site.",
  },
  {
    id: 'currently-studying',
    keywords: ['studying', 'currently learning', 'odoo', 'ai powered fullstack', 'ai-powered fullstack', 'what are you studying'],
    answer:
      "Right now I'm studying AI-Powered Fullstack Application Development, and I've completed Odoo training focused on the Manufacturing module. It's part of a shift toward blending my infrastructure background with hands-on full-stack and AI-driven development.",
  },
  {
    id: 'gerd',
    keywords: ['gerd', 'dam', 'renaissance dam', 'webuild'],
    answer:
      "I spent nearly 13 years at the Grand Ethiopian Renaissance Dam Project with Webuild S.p.A — running the server room and network infrastructure for a workforce that couldn't afford downtime. That covered VMware, Windows Server, Active Directory, Cisco Meraki, drone calibration, and even an FM radio broadcast setup for site morale.",
  },
]

const fallback =
  "I don't have a canned answer for that yet — try asking about my experience, skills, education, certifications, projects, or how to get in touch. Or email me directly at desuy26@gmail.com."

const suggestions = [
  'What do you currently do?',
  'What are your top skills?',
  'What projects have you built?',
  'How can I contact you?',
]

export function findAnswer(question) {
  const q = question.toLowerCase()
  for (const topic of topics) {
    if (topic.keywords.some((kw) => q.includes(kw))) {
      return topic.answer
    }
  }
  return fallback
}

export const botSuggestions = suggestions


export default function Terms() {
  const sections = [
    {
      title: "1. Our Services",
      content: "Celltek Studios provides professional digital visualization and creative production services, including but not limited to:",
      list: [
        "Architectural visualization",
        "3D rendering",
        "Product rendering and visualization",
        "Interior and exterior visualization",
        "3D animation",
        "Virtual tours",
        "CGI imagery",
        "Marketing and presentation assets",
        "3D modeling",
        "Post-production and image compositing",
        "Other related digital and creative services",
      ],
      footer: "The exact services and deliverables for each project will be defined in the applicable quotation, proposal, project brief, statement of work, or other written agreement.",
    },
    {
      title: "2. Project Scope",
      content: "Each project is undertaken based on the information, requirements, and deliverables agreed upon with the Client.",
      list: [
        "Architectural drawings",
        "CAD or BIM files",
        "3D models",
        "Product specifications",
        "Dimensions and measurements",
        "Reference images",
        "Materials and textures",
        "Brand guidelines",
        "Logos and other visual assets",
        "Creative direction and project requirements",
      ],
      footer: "The Client is responsible for providing accurate and complete information required for production. Any work requested outside the agreed scope may be considered additional work and may result in additional fees and/or changes to the delivery schedule.",
    },
    {
      title: "3. Quotations and Pricing",
      content: "All quotations are based on the project information available at the time of preparation. Unless otherwise stated, quotations are valid for 30 days from the date issued.",
      list: [
        "The Client changes the project scope.",
        "Additional deliverables are requested.",
        "Additional revisions are required.",
        "New information or assets are introduced after production begins.",
        "The Client requests significant changes to an approved direction.",
        "Third-party assets, licenses, or services are required.",
        "Expedited production is requested.",
      ],
      footer: "Additional costs will be communicated to the Client where reasonably practicable before the additional work is undertaken.",
    },
    {
      title: "4. Payment Terms",
      content: "Payment terms will be specified in the applicable quotation or project agreement. Unless otherwise agreed in writing:",
      list: [
        "A 50% deposit is required before production begins.",
        "The remaining balance is due upon completion and before final deliverables are released.",
        "Production may be paused if payments are overdue.",
        "Final high-resolution or production-ready files may be withheld until all outstanding amounts have been paid.",
      ],
      footer: "Payments for completed work and approved third-party expenses are non-refundable except where otherwise required by applicable law or expressly agreed in writing.",
    },
    {
      title: "5. Project Timeline",
      content: "Celltek Studios will provide an estimated production timeline based on the agreed scope. Delivery dates are estimates unless a specific deadline has been expressly agreed in writing.",
      list: [
        "Delayed client feedback",
        "Delayed approvals",
        "Missing or incomplete project information",
        "Changes to the project scope",
        "Additional revision requests",
        "Technical issues",
        "Third-party dependencies",
        "Circumstances outside our reasonable control",
      ],
      footer: "Where delays are caused by the Client, the delivery schedule may be adjusted accordingly.",
    },
    {
      title: "6. Revisions",
      content: "The number of revisions included in a project will be specified in the applicable quotation or agreement. A standard revision may include reasonable changes such as:",
      list: [
        "Material or color adjustments",
        "Lighting adjustments",
        "Minor styling changes",
        "Minor composition changes",
        "Reasonable modifications to visual elements",
      ],
      footer: "A complete change of concept, camera angle, environment, composition, modeling requirements, or previously approved direction may be considered a new production request rather than a standard revision. Additional revisions beyond the agreed allowance may be charged separately.",
    },
    {
      title: "7. Client Review and Approval",
      content: "The Client is responsible for reviewing drafts and providing clear and consolidated feedback.",
      footer: "Once a draft, scene, camera angle, design direction, or other project stage has been approved, subsequent changes to that approved work may be treated as additional work. The Client is responsible for ensuring that all supplied and approved information, including dimensions, product specifications, branding, text, and other technical details, is accurate. Celltek Studios is not responsible for errors resulting from inaccurate or incomplete information supplied or approved by the Client.",
    },
    {
      title: "8. Client-Supplied Materials",
      content: "The Client confirms that they have the necessary rights, permissions, and licenses to provide any materials supplied to Celltek Studios.",
      list: [
        "Product designs",
        "Architectural drawings",
        "Photographs",
        "Logos",
        "Fonts",
        "Artwork",
        "3D models",
        "CAD files",
        "Textures",
        "Brand materials",
        "Reference materials",
      ],
      footer: "The Client is responsible for claims, disputes, or liabilities resulting from materials supplied by the Client that infringe the intellectual property or other rights of third parties.",
    },
    {
      title: "9. Technical Accuracy",
      content: "Unless specifically agreed otherwise, Celltek Studios creates visualizations for artistic, presentation, marketing, and communication purposes.",
      footer: "3D renders, animations, virtual tours, and other visualizations should not automatically be considered technical, engineering, architectural, manufacturing, or construction documentation. The Client remains responsible for independently verifying measurements, dimensions, specifications, materials, structural information, and other technical details before using a visualization for technical, construction, manufacturing, or engineering purposes.",
    },
    {
      title: "10. Final Deliverables",
      content: "Final deliverables will be provided in the formats, resolutions, and specifications agreed upon in the quotation or project agreement. Unless specifically included in the scope, final deliverables do not include:",
      list: [
        "Editable source files",
        "3D scene files",
        "Working files",
        "Raw renders",
        "Layered project files",
        "Textures",
        "Materials",
        "Production assets",
        "Scripts",
        "Internal tools or workflows",
      ],
      footer: "Source or working files may be provided separately subject to additional fees and licensing or ownership terms.",
    },
    {
      title: "11. Intellectual Property",
      content: "Unless otherwise agreed in writing, Celltek Studios retains ownership of its underlying production materials and creative processes, including:",
      list: [
        "3D models created by Celltek Studios",
        "Scene files",
        "Lighting setups",
        "Materials and shaders",
        "Textures created by Celltek Studios",
        "Working files",
        "Templates",
        "Scripts",
        "Internal tools",
        "Unused concepts",
        "Development and production materials",
      ],
      footer: "Upon full payment, the Client receives the agreed rights to use the final deliverables for the purposes specified in the applicable quotation or project agreement. Payment for a final render or other deliverable does not automatically transfer ownership of the underlying working files or production assets.",
    },
    {
      title: "12. Third-Party Assets",
      content: "Projects may use third-party assets or technologies, including stock imagery, fonts, 3D models, textures, plugins, software, or other licensed materials.",
      footer: "Such materials remain subject to the terms and licensing conditions imposed by their respective owners or providers. The Client is responsible for complying with applicable third-party licensing restrictions when using the final deliverables, where such restrictions apply.",
    },
    {
      title: "13. Portfolio and Marketing Rights",
      content: "Unless otherwise agreed in writing, Celltek Studios may display completed work produced by the Studio in its:",
      list: [
        "Website portfolio",
        "Social media",
        "Presentations",
        "Marketing materials",
        "Case studies",
        "Industry publications",
        "Award submissions",
      ],
      footer: "We will make reasonable efforts not to disclose confidential information associated with a project. Where an NDA, confidentiality agreement, or written client instruction prohibits public disclosure, those restrictions will take precedence.",
    },
    {
      title: "14. Confidentiality",
      content: "Both Celltek Studios and the Client agree to treat confidential information received from the other party as confidential and to use such information only for legitimate purposes related to the project or business relationship. Confidential information may include:",
      list: [
        "Unreleased products",
        "Designs",
        "Architectural information",
        "Technical information",
        "Business information",
        "Commercial information",
        "Project files",
        "Marketing plans",
        "Proprietary materials",
      ],
      footer: "Confidentiality obligations do not apply to information that:",
      extraList: [
        "Is publicly available through no breach of these Terms",
        "Was already lawfully known to the receiving party",
        "Is independently developed without use of confidential information",
        "Is lawfully obtained from another source",
        "Must be disclosed by law or legal authority",
      ],
    },
    {
      title: "15. Cancellation and Termination",
      content: "Either party may request cancellation of a project. If a Client cancels a project after work has commenced, the Client remains responsible for:",
      list: [
        "Work completed up to the cancellation date",
        "Approved additional work",
        "Third-party costs",
        "Non-refundable expenses",
        "Other agreed project commitments",
      ],
      footer: "Any deposit may be applied against these amounts. Celltek Studios may suspend or terminate a project where:",
      extraList: [
        "Payments are overdue",
        "Required information or materials are not provided",
        "The Client materially changes the agreed scope without approval",
        "The project requires unlawful or infringing activity",
        "Continuing the project becomes technically or operationally impractical",
      ],
    },
    {
      title: "16. Delayed Feedback and Project Inactivity",
      content: "The Client is expected to provide feedback, approvals, and required materials within a reasonable timeframe.",
      footer: "If a project is significantly delayed because of missing feedback, approvals, information, or materials, Celltek Studios may reschedule the project based on current production availability. If a project remains inactive for an extended period, Celltek Studios may require the project to be re-quoted where the scope, resources, production requirements, software, or pricing have materially changed.",
    },
    {
      title: "17. Website Content",
      content: "All content available on the Celltek Studios Website, including text, graphics, photographs, renders, animations, videos, logos, branding, and other materials, is owned by or licensed to Celltek Studios unless otherwise stated.",
      footer: "You may not reproduce, modify, distribute, publish, sell, or commercially exploit Website content without prior written permission.",
    },
    {
      title: "18. Disclaimer",
      content: "We make reasonable efforts to provide professional, accurate, and high-quality services. However, Celltek Studios does not guarantee that:",
      list: [
        "The Website will always be available or error-free",
        "Services will always be uninterrupted",
        "Third-party software or platforms will always operate without interruption",
        "Visualizations will satisfy subjective expectations that were not included in the agreed project brief",
        "Website content will always be completely current or free from errors",
      ],
      footer: "Our services are provided according to the agreed scope, brief, and specifications.",
    },
    {
      title: "19. Limitation of Liability",
      content: "To the maximum extent permitted by applicable law, Celltek Studios will not be liable for indirect, incidental, consequential, special, or loss-of-profit damages arising from the use of our Website, services, or deliverables.",
      footer: "Where legally permitted, Celltek Studios' total liability relating to a specific project will be limited to the amount actually paid by the Client for the specific services giving rise to the claim. Nothing in these Terms excludes or limits liability that cannot legally be excluded or limited under applicable law.",
    },
    {
      title: "20. Force Majeure",
      content: "Celltek Studios will not be responsible for delays or failure to perform caused by circumstances beyond our reasonable control. Such circumstances may include:",
      list: [
        "Natural disasters",
        "Power or internet outages",
        "Hardware or software failures",
        "Cybersecurity incidents",
        "Government actions",
        "Third-party service interruptions",
        "Labor disputes",
        "Infrastructure failures",
        "Other unforeseen events beyond our reasonable control",
      ],
      footer: "We will make reasonable efforts to resume services as soon as practicable.",
    },
    {
      title: "21. Changes to These Terms",
      content: "Celltek Studios may update these Terms from time to time to reflect changes in our services, business practices, technology, or applicable legal requirements.",
      footer: 'The latest version will be published on this page with a revised "Last Updated" date.',
    },
    {
      title: "22. Governing Law",
      content: "These Terms shall be governed by and interpreted in accordance with the laws of [Applicable Jurisdiction].",
      footer: "Any dispute arising from these Terms or our services shall be subject to the jurisdiction of the competent courts of [City, Country], unless otherwise required by applicable law.",
    },
    {
      title: "23. Contact Us",
      content: "If you have any questions regarding these Terms & Conditions, please contact us:",
      list: [
        "Celltek Studios",
      ],
      footer: "Mail: hello@celltekstudios.com",
    },
  ];

  return (
    <main className="min-h-screen bg-black px-5 md:px-12 lg:px-24 py-24 md:py-32">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="mb-16 md:mb-24">
          <p className="text-[#5B8CFF] text-sm md:text-base tracking-[0.25em] uppercase mb-5">
            Legal Information
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-[#E6E9EF] leading-tight">
            Terms &{" "}
            <span className="text-[#5B8CFF]">Conditions</span>
          </h1>

          <p className="text-[#9299A8] mt-6 text-sm md:text-base">
            Last Updated: September 1, 2026
          </p>

          <div className="w-full h-px bg-white/10 mt-10" />
        </div>

        {/* Introduction */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E6E9EF] mb-5">
            Welcome to Celltek Studios.
          </h2>

          <p className="text-[#A5ADBB] leading-8 text-base md:text-lg">
            These Terms & Conditions (“Terms”) govern your use of the
            Celltek Studios website at celltekstudios.com (the “Website”)
            and the provision of creative and visualization services by
            Celltek Studios (“Celltek Studios,” “we,” “us,” or “our”).
          </p>

          <p className="text-[#A5ADBB] leading-8 text-base md:text-lg mt-4">
            By using our Website, requesting our services, approving a
            quotation, making a payment, or proceeding with a project,
            you agree to these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <section
              key={index}
              id={`section-${index + 1}`}
              className="scroll-mt-24"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#5B8CFF] mb-5">
                {section.title}
              </h2>

              <p className="text-[#A5ADBB] text-base md:text-lg leading-8">
                {section.content}
              </p>

              {section.list && (
                <ul className="mt-5 space-y-3 pl-5">
                  {section.list.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#A5ADBB] text-base md:text-lg leading-7 list-disc marker:text-[#5B8CFF]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.footer && (
                <p className="text-[#A5ADBB] text-base md:text-lg leading-8 mt-5">
                  {section.footer}
                </p>
              )}

              {section.extraList && (
                <ul className="mt-5 space-y-3 pl-5">
                  {section.extraList.map((item, i) => (
                    <li
                      key={i}
                      className="text-[#A5ADBB] text-base md:text-lg leading-7 list-disc marker:text-[#5B8CFF]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-24 pt-10 border-t border-white/10">
          <p className="text-[#9299A8] text-sm md:text-base">
            © {new Date().getFullYear()} Celltek Studios. All rights reserved.
          </p>
        </div>

      </div>
    </main>
  );
}

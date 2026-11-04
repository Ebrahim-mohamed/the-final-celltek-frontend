
export default function Privacy() {
  const sections = [
    {
      title: "1. Privacy Commitment",
      content:
        "We are committed to safeguarding your privacy and managing your data responsibly.",
    },
    {
      title: "2. Acceptance of This Policy",
      content:
        "By using our website, you agree to the practices outlined in this Privacy Policy.",
    },
    {
      title: "3. Data Controller",
      content:
        "Our company acts as the data controller responsible for your personal information.",
    },
    {
      title: "4. Contact Information",
      content:
        "You can contact us anytime through our official support email.",
    },
    {
      title: "5. Personal Information We Collect",
      content:
        "We collect personal information you provide when filling out forms or communicating with us.",
    },
    {
      title: "6. Technical Information",
      content:
        "We also collect technical data such as IP address, browser type, and device details.",
    },
    {
      title: "7. Website Usage Information",
      content:
        "Information about your visit, including pages viewed and on-site interactions, may be recorded.",
    },
    {
      title: "8. How We Use Your Information",
      content:
        "We use your data to manage accounts, process requests, and provide customer support.",
    },
    {
      title: "9. Service Improvement and Security",
      content:
        "Your information helps us improve our services and maintain website security.",
    },
    {
      title: "10. Marketing Communications",
      content:
        "We only use your data for marketing purposes if we have your explicit consent.",
    },
    {
      title: "11. Legal Obligations",
      content:
        "Data may also be processed when required to meet legal obligations.",
    },
    {
      title: "12. Legal Basis for Processing (EEA Users)",
      content:
        "For users in the EEA, data processing is based on contract, consent, legitimate interest, or legal compliance.",
    },
    {
      title: "13. International Data Transfers",
      content:
        "Your information may be transferred internationally as part of our business operations.",
    },
    {
      title: "14. International Data Protection",
      content:
        "We take all reasonable measures to ensure the safe handling of internationally transferred data.",
    },
    {
      title: "15. Sharing with Service Providers",
      content:
        "We may share your information with trusted service providers that support our operations.",
    },
    {
      title: "16. Legal Disclosure",
      content:
        "Information may be disclosed if required by law or governmental authorities.",
    },
    {
      title: "17. Business Transfers",
      content:
        "Data may be shared during mergers, acquisitions, or business restructuring.",
    },
    {
      title: "18. Sale of Personal Information",
      content:
        "We do not sell your personal information to any third parties.",
    },
    {
      title: "19. Data Security",
      content:
        "We implement appropriate security measures to protect your personal data.",
    },
    {
      title: "20. Security Limitations",
      content:
        "However, no method of transmitting data over the internet is fully guaranteed to be secure.",
    },
    {
      title: "21. Transmission of Information",
      content:
        "Any data you send to our website is transmitted at your own risk.",
    },
    {
      title: "22. Data Retention",
      content:
        "We retain personal data only as long as necessary for legal, operational, or business purposes.",
    },
    {
      title: "23. Access, Correction, and Deletion Rights",
      content:
        "You may have the right to access, correct, delete, or restrict the processing of your personal information.",
    },
    {
      title: "24. Right to Object",
      content:
        "You may object to certain types of data processing where applicable.",
    },
    {
      title: "25. Data Portability",
      content:
        "You may request the transfer of your data to another organization.",
    },
    {
      title: "26. Identity Verification",
      content:
        "We may ask for identity verification before processing your request.",
    },
    {
      title: "27. Privacy Complaints",
      content:
        "You can file complaints with us regarding the handling of your data.",
    },
    {
      title: "28. Data Protection Authority (EEA Users)",
      content:
        "EEA users may also submit complaints to their local data protection authority.",
    },
    {
      title: "29. External Websites",
      content:
        "We are not responsible for the privacy practices of those external websites.",
    },
    {
      title: "30. Changes to This Privacy Policy",
      content:
        "We may update this Privacy Policy from time to time.",
    },
    {
      title: "31. Policy Updates",
      content:
        "Any changes will be posted on this page and communicated when appropriate.",
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
            <span className="text-[#5B8CFF]">Privacy</span>{" "}
            Policy
          </h1>

          <div className="w-full h-px bg-white/10 mt-10" />
        </div>

        {/* Introduction */}
        <div className="mb-14">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#E6E9EF] mb-5">
            Your Privacy Matters
          </h2>

          <p className="text-[#A5ADBB] leading-8 text-base md:text-lg">
            At Celltek Studios, we are committed to safeguarding your
            privacy and managing your personal information responsibly.
            This Privacy Policy explains how information is collected,
            used, shared, and protected when you visit our website.
          </p>
        </div>

        {/* Policy Sections */}
        <div className="space-y-12 md:space-y-16">
          {sections.map((section, index) => (
            <section
              key={index}
              id={`privacy-${index + 1}`}
              className="scroll-mt-24"
            >
              <h2 className="text-xl md:text-2xl font-semibold text-[#5B8CFF] mb-5">
                {section.title}
              </h2>

              <p className="text-[#A5ADBB] text-base md:text-lg leading-8">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-20 pt-10 border-t border-white/10">
          <h2 className="text-xl md:text-2xl font-semibold text-[#5B8CFF] mb-5">
            Contact Celltek Studios
          </h2>

          <p className="text-[#A5ADBB] text-base md:text-lg leading-8">
            If you have any questions regarding your privacy or
            this Privacy Policy, you can contact us through our
            official support email.
          </p>

          <a
            href="mailto:hello@celltekstudios.com"
            className="inline-block mt-5 text-[#5B8CFF] hover:text-white transition-colors"
          >
            hello@celltekstudios.com
          </a>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <p className="text-[#9299A8] text-sm md:text-base">
            © {new Date().getFullYear()} Celltek Studios. All rights reserved.
          </p>
        </div>

      </div>
    </main>
  );
}

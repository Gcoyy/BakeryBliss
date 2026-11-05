const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-patisserie-vanilla relative overflow-hidden py-10">


    <main class="max-w-4xl mx-auto p-6 sm:p-10 bg-white shadow-lg rounded-2xl">
      <h1 class="text-3xl sm:text-4xl font-bold text-center text-patisserie-cocoa mb-2">
        Privacy Policy – Connie de Café
      </h1>
      <p class="text-center text-sm text-gray-500 mb-8">Last Updated: October 6, 2025</p>

      <p class="mb-6">
        At <span class="font-semibold">Connie de Café</span>, we value your trust and are committed to protecting your
        personal information. This Privacy Policy explains how we collect, use, and safeguard the information you
        provide when ordering our cakes or using our online services.
      </p>

      {/* <!-- 1 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">1. Information We Collect</h2>
        <p class="mb-3">When you place an order or contact us, we may collect the following information:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>
            <span class="font-semibold">Personal Information:</span> Your full name, contact number, email address, and
            delivery or pickup details.
          </li>
          <li>
            <span class="font-semibold">Order Information:</span> Cake design preferences, flavors, size, event date,
            and payment details.
          </li>
          <li>
            <span class="font-semibold">Online Interaction Data:</span> Messages, inquiries, and feedback sent through
            our website, social media, or messaging apps (such as Facebook Messenger or Instagram).
          </li>
        </ul>
      </section>

      {/* <!-- 2 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">2. How We Use Your Information</h2>
        <p class="mb-3">We use your information to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Process and confirm your orders.</li>
          <li>Communicate regarding your cake design, delivery, or inquiries.</li>
          <li>Send updates or confirmations about your orders.</li>
          <li>Improve our products, services, and customer experience.</li>
          <li>Maintain records for business and accounting purposes.</li>
        </ul>
        <p class="mt-3">
          We do not sell, rent, or trade your information with any third party.
        </p>
      </section>

      {/* <!-- 3 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">3. Data Storage and Protection</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>
            All personal data is stored securely in our records or trusted online systems (e.g., email or messaging
            platforms).
          </li>
          <li>We take reasonable steps to prevent unauthorized access, loss, or misuse of your data.</li>
          <li>Only authorized Connie de Café personnel have access to customer information.</li>
        </ul>
      </section>

      {/* <!-- 4 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">4. Sharing of Information</h2>
        <p class="mb-3">We only share your information when necessary to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Fulfill your order (e.g., with delivery couriers).</li>
          <li>Comply with legal obligations under Philippine law.</li>
        </ul>
        <p class="mt-3">
          We ensure that any third parties we work with handle your data securely and only for the intended purpose.
        </p>
      </section>

      {/* <!-- 5 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">5. Cookies and Online Tools</h2>
        <p class="mb-3">
          If you visit our website, small text files called cookies may be used to improve your browsing experience.
          Cookies help us remember your preferences and enhance site functionality.
        </p>
        <p>
          You can disable cookies through your browser settings, but some parts of the website may not function properly
          as a result.
        </p>
      </section>

      {/* <!-- 6 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">6. Your Rights</h2>
        <p class="mb-3">Under the Data Privacy Act of 2012, you have the right to:</p>
        <ul class="list-disc list-inside space-y-2">
          <li>Access and request a copy of your personal data.</li>
          <li>Correct or update your information.</li>
          <li>
            Withdraw your consent or request data deletion (subject to legal or business record requirements).
          </li>
        </ul>
        <p class="mt-3">
          To exercise your rights, you may contact us through the details below.
        </p>
      </section>

      {/* <!-- 7 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">7. Data Retention</h2>
        <p>
          We retain your personal information only as long as necessary to fulfill the purpose it was collected for —
          such as completing your order or complying with legal obligations — after which it will be securely deleted.
        </p>
      </section>

      {/* <!-- 8 --> */}
      <section class="mb-6">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">8. Policy Updates</h2>
        <p>
          Connie de Café may update this Privacy Policy from time to time. Changes will be posted on our website or
          social media page with the updated date. Continued use of our services means you accept the revised policy.
        </p>
      </section>

      {/* <!-- 9 --> */}
      <section class="mb-2">
        <h2 class="text-xl font-semibold text-patisserie-cocoa mb-2">9. Contact Us</h2>
        <p class="mb-2">
          If you have any questions or requests regarding your personal data, please contact us:
        </p>
        <p class="font-medium">
          📞 +63 917 629 2377<br />
          📧
          <a href="mailto:dejesus.connie@gmail.com" class="text-amber-700 underline hover:text-amber-900">
            dejesus.connie@gmail.com
          </a>
        </p>
      </section>
    </main>
  </div>
  )
}

export default PrivacyPolicy
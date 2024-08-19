import React from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../styles/PrivacyPolicy.module.css";

function PrivacyPolicy() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showNav = queryParams.get("navbar") === "true";

  return (
    <>
      {showNav ? <Navbar /> : null}
      <div className={styles.ctn}>
        <h1>Privacy Policy</h1>
        <p>
          Live Lyrics is committed to protecting the privacy and security of our
          users. This Privacy Policy outlines how we collect, use, store, and
          disclose information when you use our Live Lyrics mobile application
          (the "App").
        </p>

        <h2>Information Collection and Use</h2>

        <h3>Personal Information:</h3>
        <p>
          We only collect the necessary personally identifiable information
          (PII) when you use the App, such as when you are creating an account
          or logging in.
        </p>

        <h3>Usage Information:</h3>
        <p>
          We may collect certain non-personal information about your use of the
          App, such as device information, application usage data, and technical
          diagnostics. This information is used to analyze and improve the
          performance and functionality of the App.
        </p>

        <h3>Cookies and Similar Technologies:</h3>
        <p>The App does not use cookies or similar tracking technologies.</p>

        <h2>Data Security:</h2>
        <p>
          We take appropriate measures to protect the information collected
          through the App from unauthorized access, disclosure, alteration, or
          destruction. However, please note that no method of transmission over
          the internet or electronic storage is completely secure, and we cannot
          guarantee absolute security.
        </p>

        <h2>Changes to this Privacy Policy:</h2>
        <p>
          We reserve the right to update or modify this Privacy Policy at any
          time. Any changes will be effective immediately upon posting the
          updated Privacy Policy within the App. We encourage you to review this
          Privacy Policy periodically for any updates.
        </p>

        <h2>Contact Us:</h2>
        <p>
          If you have any questions or concerns about this Privacy Policy or our
          data practices, please contact us at{" "}
          <a href="mailto:chargertech.help@gmail.com">
            chargertech.help@gmail.com
          </a>
          .
        </p>

        <p>
          By using Live Lyrics, you agree to the terms and conditions of this
          Privacy Policy.
        </p>
      </div>
    </>
  );
}

export default PrivacyPolicy;

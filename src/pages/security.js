import React from "react";
import { Heading } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column from "../components/Column";
import { MailLink, ExternalLink } from "../components/Links";

const SecurityPage = () => (
  <Layout>
    <SEO />
    <Container>
      <Grid justify="center">
        <Column justifySelf="center" span={{ medium: 8, large: 8 }}>
          <Heading level={1} lined>
            Security Vulnerability Disclosure
          </Heading>
          <p>
            No technology is perfect or perfectly secure. Centrifuge believes 
            that working with skilled security researchers across the globe is 
            crucial in identifying weaknesses in any technology. We welcome 
            the contribution of external security researchers and look forward 
            to awarding them for their invaluable contribution to the security 
            of all our users.
          </p>
          <p>
            If you believe you've found a security issue in our product or 
            service, we encourage you to notify us. The disclosure of security 
            vulnerabilities helps us ensure the security and privacy of our 
            users and we will reward valid, in-scope submissions with a bounty.
          </p>
          <p>
            <strong>Guidelines</strong>
          </p>
          <p>
            We require that all researchers:
          </p>
          <ul>
            <li>
              Make every effort to avoid privacy violations, degradation of 
              user experience, disruption to production systems, and destruction 
              of data during security testing;
            </li>
            <li>
              Perform research only within the scope set out below;
            </li>
            <li>
              Use the identified communication channels to report vulnerability 
              information to us; and
            </li>
            <li>
              Keep information about any vulnerabilities you’ve discovered 
              confidential between yourself and Centrifuge until we’ve had 90 
              days to resolve the issue.
            </li>
          </ul>
          <p>
            If you follow these guidelines when reporting an issue to us, we commit to:
          </p>
          <ul>
            <li>
              Not pursue or support any legal action related to your research;
            </li>
            <li>
              Work with you to understand and resolve the issue quickly (including 
              an initial confirmation of your report within 72 hours of submission);
            </li>
            <li>
              Recognize your contribution on our Security Researcher Hall of Fame, 
              if you are the first to report the issue and we make a code or 
              configuration change based on the issue.
            </li>
            <li>
              Reward valid submissions with the payout of a bounty.
            </li>
          </ul>
          <p>
            <strong>Scope</strong>
          </p>
          <p>
            Centrifuge builds and runs a number of products and services but only 
            submissions under the following scope are eligible for rewards. Any 
            Centrifuge-owned, developed, or operated products and services that 
            are not listed below and any 3rd-party service/product/library are not 
            in-scope, not eligible for rewards and not covered by our legal safe harbor.
          </p>
          <p>
            We welcome the submission of in-scope bugs and issues including exploits, 
            vulnerabilities, and information about ongoing attacks against Centrifuge’s 
            software and systems.            
          </p>
          <p>In-scope repositories</p>
          <ul>
            <li>
              <ExternalLink href="https://github.com/centrifuge/go-centrifuge">
                https://github.com/centrifuge/go-centrifuge
              </ExternalLink>              
            </li>
            <li>
              <ExternalLink href="https://github.com/centrifuge/precise-proofs">
                https://github.com/centrifuge/precise-proofs
              </ExternalLink>              
              </li>
            <li>
              <ExternalLink href="https://github.com/centrifuge/centrifuge-protobufs">
                https://github.com/centrifuge/centrifuge-protobufs
              </ExternalLink>              
            </li>
            <li>
              <ExternalLink href="https://github.com/centrifuge/centrifuge-ethereum-contracts">
                https://github.com/centrifuge/centrifuge-ethereum-contracts
              </ExternalLink>              
            </li>

          </ul>
          
          <p>
            In order to be in-scope and to qualify for a bounty, a submission must be
          </p>
          <ul>
            <li>
              Software & Infrastructure – Only bugs in Centrifuge’s software or 
              infrastructure are eligible for a bounty.
            </li>
            <li>
              Relevant – Only security issues qualify for this bounty. A qualifying 
              bug has to be a danger to user funds, privacy or the operation of the 
              Centrifuge network.
            </li>
            <li>
              Original – Nobody has reported the issue before.
            </li>
            <li>
              Unknown – Bugs that are already known and discussed in public do not 
              qualify.  Previously reported bugs (including those with active tickets) 
              are not eligible.
            </li>
            <li>
              Specific – We welcome general security advice or recommendations, but we cannot pay bounties for that.              
            </li>
            <li>
              Unused – If you use the exploit to attack us or our users first, you do 
              not qualify for a bounty and the submission is out of scope. If you 
              report a vulnerability used in an ongoing or past attack and we have 
              specific, concrete evidence that suggests you are the attacker we 
              reserve the right not to pay a bounty and define this submission out 
              of scope.              
            </li>
          </ul>
          <p>
            Application-level Denial of Service style vulnerabilities will be considered 
            in scope provided that the attack is effective due to specific code in the 
            Centrifuge repository (the above in scope repositories), and no public 
            mainnets or production networks are used for PoC. You may not use public 
            mainnets to prove out DoS attacks, nor any Centrifuge production infrastructure. 
            All PoC's must be done against a testnet with the permission of those running 
            said testnet.            
          </p>
          <p>
            In-scope services, products            
          </p>
          <ul>
            <li>
              Centrifuge-operated bootnodes for Centrifuge OS
            </li>
          </ul>
          <p>
            <strong>
              Out of Scope
            </strong>
          </p>
          <p>
            Any services or products hosted, or developed by 3rd party providers and services 
            are excluded from scope. These services include but are not limited to:
          </p>
          <ul>
            <li>Ethereum</li>
            <li>libp2p</li>
            <li>Protobuf</li>
            <li>Swagger</li>
            <li>Google Compute Cloud</li>
            <li>Amazon Web Services</li>
            <li>Netlify</li>
            <li>Github</li>
            <li>Slack</li>
            <li>TravisCI</li>
            <li>www.centrifuge.io</li>
            <li>...</li>      
          </ul>
          <p>
            In the interest of the safety of our users, staff, the Internet at large and you as 
            a security researcher, the following test types are excluded from scope:
          </p>
          <ul>
            <li>Findings from physical testing such as office access (e.g. open doors, tailgating)</li>
            <li>Findings derived from social engineering (e.g. phishing, vishing)</li>
            <li>Findings from applications or systems not listed in the ‘Scope’ section</li>
            <li>UI and UX bugs and spelling mistakes</li>
            <li>Network level Denial of Service (DoS/DDoS) vulnerabilities</li>
          </ul>
          <p>
            Things we do not want to receive:
          </p>
          <ul>
            <li>Private keys of users</li>
            <li>Personally identifiable information (PII)</li>
          </ul>
          <p>
            <strong>How to report a security vulnerability?</strong>
          </p>
          <p>
            If you believe you’ve found a security vulnerability in one of our products 
            or platforms please send it to us by emailing {" "}
            <MailLink email="security@centrifuge.io">security@centrifuge.io</MailLink>. 
            Please include the following details with your report:
          </p>
          <ul>
            <li>
              Description of the location and potential impact of the vulnerability;
            </li>
            <li>
              A detailed description of the steps required to reproduce the vulnerability (POC 
              scripts, screenshots, and compressed screen captures are all helpful to us); and
            </li>
            <li>
              Your name/handle and a link for recognition in our Hall of Fame.
            </li>
          </ul>

          <p>
            We encourage (but don’t require) you to encrypt the information, with our [PGP key].
          </p>
        </Column>
      </Grid>
    </Container>
  </Layout>
);

export default SecurityPage;

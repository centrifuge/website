---
title: Security
---

<Section>
<Row>
<Col span={8}>

# Security Vulnerability Disclosure

No technology is perfect or perfectly secure. Centrifuge believes that working with skilled security researchers across the globe is crucial in identifying weaknesses in any technology. We welcome the contribution of external security researchers and look forward to awarding them for their invaluable contribution to the security of all our users.

If you believe you've found a security issue in our product or service, we encourage you to notify us. The disclosure of security vulnerabilities helps us ensure the security and privacy of our users and we will reward valid, in-scope submissions with a bounty.

### Guidelines

We require that all researchers:

- Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction of data during security testing;
- Perform research only within the scope set out below;
- Use the identified communication channels to report vulnerability information to us; and
- Keep information about any vulnerabilities you’ve discovered confidential between yourself and Centrifuge until we’ve had 90 days to resolve the issue.

If you follow these guidelines when reporting an issue to us, we commit to:

- Not pursue or support any legal action related to your research;
- Work with you to understand and resolve the issue quickly (including an initial confirmation of your report within 72 hours of submission);
- Recognize your contribution on our Security Researcher Hall of Fame, if you are the first to report the issue and we make a code or configuration change based on the issue.
- Reward valid submissions with the payout of a bounty.

### Rewards

The rewards range from 100 DAI to 50'000 DAI and depends on the vulnerability severity and ease of exploit.

Payments are made Rewards will only be granted for the first submission of a valid in-scope vulnerability.

### Scope

Centrifuge builds and runs a number of products and services but only submissions under the following scope are eligible for rewards. Any Centrifuge-owned, developed, or operated products and services that are not listed below and any 3rd-party service/product/library are not in-scope, not eligible for rewards and not covered by our legal safe harbor.

We welcome the submission of in-scope bugs and issues including exploits, vulnerabilities, and information about ongoing attacks against Centrifuge’s software and systems.

In-scope repositories:

- https://github.com/centrifuge/tinlake
- https://github.com/centrifuge/tinlake-erc20
- https://github.com/centrifuge/tinlake-math
- https://github.com/centrifuge/tinlake-auth
- https://github.com/centrifuge/tinlake.js
- https://github.com/centrifuge/cent-chain
- https://github.com/centrifuge/go-centrifuge
- https://github.com/centrifuge/precise-proofs
- https://github.com/centrifuge/centrifuge-protobufs
- https://github.com/centrifuge/centrifuge-ethereum-contracts

In order to be in-scope and to qualify for a bounty, a submission must be

- Software & Infrastructure – Only bugs in Centrifuge’s software or infrastructure are eligible for a bounty.
- Relevant – Only security issues qualify for this bounty. A qualifying bug has to be a danger to user funds, privacy or the operation of the Centrifuge network.
- Original – Nobody has reported the issue before.
- Unknown – Bugs that are already known and discussed in public do not qualify. Previously reported bugs (including those with active tickets) are not eligible.
- Specific – We welcome general security advice or recommendations, but we cannot pay bounties for that.
- Unused – If you use the exploit to attack us or our users first, you do not qualify for a bounty and the submission is out of scope. If you report a vulnerability used in an ongoing or past attack and we have specific, concrete evidence that suggests you are the attacker we reserve the right not to pay a bounty and define this submission out of scope.

Application-level Denial of Service style vulnerabilities will be considered in scope provided that the attack is effective due to specific code in the Centrifuge repository (the above in scope repositories), and no public mainnets or production networks are used for PoC. You may not use public mainnets to prove out DoS attacks, nor any Centrifuge production infrastructure. All PoC's must be done against a testnet with the permission of those running said testnet.

In-scope services, products

- Centrifuge-operated bootnodes for Centrifuge OS

### Out of Scope

Any services or products hosted, or developed by 3rd party providers and services are excluded from scope. These services include but are not limited to:

- Ethereum
- libp2p
- Protobuf
- Swagger
- Google Compute Cloud
- Amazon Web Services
- Netlify
- Github
- Slack
- TravisCI
- www.centrifuge.io
- ...

In the interest of the safety of our users, staff, the Internet at large and you as a security researcher, the following test types are excluded from scope:

- Findings from physical testing such as office access (e.g. open doors, tailgating)
- Findings derived from social engineering (e.g. phishing, vishing)
- Findings from applications or systems not listed in the ‘Scope’ section
- UI and UX bugs and spelling mistakes
- Network level Denial of Service (DoS/DDoS) vulnerabilities

Things we do not want to receive:
 
- Private keys of users
- Personally identifiable information (PII)

### How to report a security vulnerability?

If you believe you’ve found a security vulnerability in one of our products or platforms please send it to us by emailing security@centrifuge.io. Please include the following details with your report:

- Description of the location and potential impact of the vulnerability;
- A detailed description of the steps required to reproduce the vulnerability (POC scripts, screenshots, and compressed screen captures are all helpful to us); and
- Your name/handle and a link for recognition in our Hall of Fame.

For time sensitive requests, please join [our slack](https://centrifuge.io/slack) and reach out to one of our team members.

</Col>
</Row>
</Section>

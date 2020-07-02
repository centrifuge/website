import React from "react";
import { Heading } from "grommet";

import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column from "../components/Column";
import { MailLink } from "../components/Links";

const ImprintPage = () => {
  const metadata = {
    title: "Imprint",
    description: null
  };

  return (
    <Layout>
      <SEO {...metadata} />
      <Container>
        <Grid justify="center">
          <Column justifySelf="center" span={{ medium: 8, large: 8 }}>
            <Heading level={1} lined>
              Imprint
            </Heading>
            <p>
              <strong>Centrifuge Inc.</strong>
              <br />
              548 Market Street #67433
              <br />
              San Francisco, CA 94104
              <br />
              USA
            </p>

            <p>CEO Lucas Vogelsang</p>

            <p>
              <strong>Centrifuge GmbH</strong>
              <br />
              Glogauer Straße 6
              <br />
              10999 Berlin
              <br />
              Germany
            </p>

            <p>Managing Director Martin Quensel</p>

            <p>
              Content responsibility by names and addresses mentioned above.
            </p>

            <p>
              <MailLink unstyled={0} email="info@centrifuge.io">
                info@centrifuge.io
              </MailLink>
            </p>

            <p>
              Register of Companies: HRB 194474 Berlin-Charlottenburg local
              court
            </p>

            <p>
              Email communication can be susceptible to security gaps. For
              example, emails en route to employees in our company can be
              stopped and viewed by adept Internet users. If we receive an email
              from you, we presume that we are entitled to answer per email.
              Otherwise you must specifically stipulate another means of
              communication.
            </p>

            <p>
              <b>Rights of use to the contents</b>
            </p>

            <p>
              This website is subject to copy and other protection rights. Any
              duplication or distribution of layout or contents in part or in
              entirety, in changed or unchanged form, requires written consent.
              © 2018
            </p>

            <p>
              <b>Disclaimer</b>
            </p>

            <p>
              All here provided information has been carefully researched and
              checked. In spite of taking due care, Centrifuge does not accept
              any warranty for the information being correct, complete and up to
              date.
            </p>

            <p>
              <b>Links and frames</b>
            </p>

            <p>
              Centrifuge does not have any influence on contents of
              third-parties linked or framed here, nor Centrifuge can,
              therefore, assume any warranty for these external contents. It is
              always the third-parties providing or operating these linked
              websites who is responsible for the contents; this applies in
              particular to changes implemented in the linked sites after
              setting the links. The linked websites were reviewed at the point
              in time of setting the link for possible and apparent legal
              infringements. No illegal contents were apparent to us at this
              point in time. We shall immediately remove the links to sites as
              soon as we come to know about concrete signs for legal
              infringements on the linked sites.
            </p>
          </Column>
        </Grid>
      </Container>
    </Layout>
  );
};

export default ImprintPage;

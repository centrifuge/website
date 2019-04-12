import React from "react";
import { graphql } from "gatsby";
import { Image, Box, Text } from "grommet";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Container from "../components/Container";
import Grid from "../components/Grid";
import Column, { Spacer } from "../components/Column";
import Animation from "../components/Animation";
import { RichTextRenderer, lastInArray } from "../helpers";

import imgGrandEU from "../images/grand/grand_eu.png";
import imgGrandEUFlag from "../images/grand/grand_eu_flag.png";
const staticPage = {
  block1: {
    "contentAST": {
      "data": {},
      "content": [
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Centrifuge  is  partially  supported  by  the  European  Regional  Development Fund (ERDF) to develop a scalable blockchain for the financial supply chain.",
              "nodeType": "text"
            }
          ],
          "nodeType": "heading-1"
        },
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Centrifuge Forschungsprojekt dcosp (Decentralized Centrifuge OS Sidechain Project). Gefördert vom Pro FIT Programm der Investitionsbank Berlin erforscht und entwickelt Centrifuge ein dezentralisiertes Operating System für die Financial Supply Chain. Dieses Projekt wird kofinanziert durch den Europäischen Fonds für regionale Entwicklung (EFRE).",
              "nodeType": "text"
            }
          ],
          "nodeType": "paragraph"
        },
      ],
      "nodeType": "document"
    }
  },
  block2: {
    "contentAST": {
      "data": {},
      "content": [
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Projektbeschreibung",
              "nodeType": "text"
            }
          ],
          "nodeType": "heading-1"
        },
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Das Centrifuge OS ist eine dezentrale Plattform, die eine neue Generation von Anwendungen für die Financial Supply Chain unterstützt. Sie fungiert einerseits als digitales und manipulationssicheres System für Unternehmen zum Austausch von Geschäftsdokumenten (z. B. Rechnungen, Bestellungen) und bietet gleichzeitig die Möglichkeit, dokumentierte Unternehmensbeziehungen neutral zu evaluieren. Die dezentrale Datenschicht gepaart mit öffentlicher Verifizierbarkeit und nachweisbaren Geschäftsbeziehungen bildet die Grundlage, die Art und Weise wie Unternehmen in der globalen Lieferkette miteinander interagieren zu revolutionieren.",
              "nodeType": "text"
            }
          ],
          "nodeType": "paragraph"
        }
      ],
      "nodeType": "document"
    }
  },    
  block3: {
    "contentAST": {
      "data": {},
      "content": [
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Projektziele und -ergebnisse:",
              "nodeType": "text"
            }
          ],
          "nodeType": "heading-1"
        },
        {
          "data": {},
          "content": [
            {
              "data": {},
              "marks": [],
              "value": "Ziel des Projekts ist es, die Financial Supply Chain auf die Blockchain zu bringen, damit Ineffizienzen beseitigt, unnötigen Mittelsmännern zuvorgekommen und eine uneingeschränkte Datensouveränität geschaffen wird. Als Ergebnis liegt eine dezentrale Plattform vor, die durch ein Netzwerk von Centrifuge Nodes den Datenaustausch auf P2P-Ebene verwaltet und Daten in der öffentlichen Blockchain verankert. Die Centrifuge Sidechain garantiert dabei einen schnellen Durchsatz zu niedrigen Kosten und der neuartige Einsatz von zk-SNARKs ermöglicht die kenntnisfreie Verifizierung von Transaktionen",
              "nodeType": "text"
            }
          ],
          "nodeType": "paragraph"
        }
      ],
      "nodeType": "document"
    }
  },      
  }

const GrandPage = ({ data }) => {
  //const page = data.allContentfulPageTechnology.edges[0].node;
  const page = staticPage;
  return (
    <Layout>
      <SEO {...page.seo} />
      <Container>
        {/* Block 1 */}
        <Grid>
          <Column mediumSpaced span={{ medium: 9, large: 6 }} mediumOrder={1}>
            <RichTextRenderer block={page.block1} />
          </Column>
          
          <Column span={{ medium: 3, large: 1 }} mediumOrder={2}/>
          <Column justifySelf="stretch" span={{ medium: 6, large: 4 }} mediumOrder={4}>
            {/* <Animation file={block1Animation} loop={false} /> */}
            <Image style={{width: '100%'}} src={imgGrandEU}/>
          </Column>
          <Column span={{ medium: 3, large: 1 }} mediumOrder={3}/>
          <Spacer />
        </Grid>

        {/* Block 2 */}
        <Grid>
          <Column mediumSpaced span={{ medium: 10, large: 4 }} mediumOrder={2}>
            <RichTextRenderer block={page.block2} />
          </Column>
          <Column mediumSpaced justifySelf="center" span={{ medium: 10, large: 4 }} mediumOrder={5}>
            <Box style={{width: 150}}>
              <Image style={{width: '100%',maxWidth:106}} src={imgGrandEUFlag}/>
              <Text style={{lineHeight:"2px"}} weight={500} size="medium" >EUROPAISCHE UNION</Text>
              <Text style={{lineHeight:"2px"}} size="small">Europaishcer Fonds fur regionale Entwicklung</Text>
            </Box>
          </Column>
          <Column mediumSpaced span={{ medium: 10, large: 4 }} mediumOrder={8}>
            <RichTextRenderer block={page.block3} />
          </Column>
          <Column span={{medium:1}} mediumOrder={1} />
          <Column span={{medium:1}} mediumOrder={3} />
          <Column span={{medium:1}} mediumOrder={4} />
          <Column span={{medium:1}} mediumOrder={6} />
          <Column span={{medium:1}} mediumOrder={7} />
        </Grid>
      </Container>
    </Layout>
  );
};

export const GrandPageQuery = graphql`
  query {
    allContentfulPageTechnology {
      edges {
        node {
          seo {
            title
            description
          }
          block1 {
            contentAST
          }
          block2 {
            content {
              contentAST
            }
          }
          block3 {
            contentAST
          }
        }
      }
    }
  }
`;

export default GrandPage;

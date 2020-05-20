import React, { useState } from "react";
import { Button, Box, Layer } from "grommet";

import { Section } from "../../components/MDXLayout/shortcodes";

const ReactOutModal = ({ children, linkLabel, linkHref, targetBlank }) => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  return (
    <>
      <Section>
        <Box direction="row" gap="medium" justify="center">
          <Button onClick={toggleModal} label="Reach Out" />
          <Button
            primary
            href={linkHref}
            label={linkLabel}
            target={targetBlank && `_blank`}
            rel={targetBlank && `noopener noreferrer`}
          />
        </Box>
      </Section>
      {showModal && (
        <Layer onEsc={toggleModal} onClickOutside={toggleModal}>
          {children(toggleModal)}
        </Layer>
      )}
    </>
  );
};

export default ReactOutModal;

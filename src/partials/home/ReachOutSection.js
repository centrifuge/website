import React, { useState } from "react";
import { Button, Box, Layer, ResponsiveContext } from "grommet";

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
        <ResponsiveContext.Consumer>
          {(size) => {
            console.log(size);
            return (
              <Layer
                onEsc={toggleModal}
                onClickOutside={toggleModal}
                modal={size === "small" ? false : true}
              >
                {children(toggleModal)}
              </Layer>
            );
          }}
        </ResponsiveContext.Consumer>
      )}
    </>
  );
};

export default ReactOutModal;

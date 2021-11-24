import React from "react";
import { Box, Layer, Text } from "grommet";

type TermsAndConditionsModalProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
};
export const TermsAndConditionsModal: React.FC<TermsAndConditionsModalProps> = ({
  open,
  setOpen,
}) =>
  open ? (
    <Layer
      onEsc={() => setOpen(false)}
      onClickOutside={() => setOpen(false)}
      responsive={false}
    >
      <Box
        background="white"
        width="540px"
        gap="16px"
        pad="24px"
        style={{ borderRadius: "10px" }}
      >
        <Text size="18px" weight={600}>
          Terms and conditions
        </Text>
        <Text>
          By submitting the form your DOT will be locked on Polkadot for the
          Centrifuge parachain crowdloan. This means that your DOT will be
          locked for the duration of the parachain slot if Centrifuge wins the
          auction (48 weeks), or until the auction ends if Centrifuge does not
          win the auction. The initial transferrable amount of DOT reward is
          25%. The remaining vests over the lease period of 48 weeks. Proxy or
          multi-signature accounts are not able to receive rewards. Use of this
          page and the above staking function are at your own risk. Further,
          Centrifuge makes no warranties as to the outcome of the Centrifuge
          crowdloan. To the fullest extent allowed by applicable law, in no
          event shall Centrifuge or its affiliates, be liable to you or any
          third party for any damages of any kind.
        </Text>
      </Box>
    </Layer>
  ) : null;

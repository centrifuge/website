# TODO:

- `lambda/crowdloan/config.js`
  - Update the values of `configs.centrifuge.URL_CONTRIBUTIONS` and `configs.centrifuge.URL_CONTRIBUTOR` with the new web service URL.
- `src/components/ParachainCrowdloan/shared/const.ts`
  - **IMPORTANT:** After registering, update the value of `PARACHAIN_ID` with the ID of the Centrifuge chain (2006 is for Alstar!!)
  - After the end of the auction, update the `AUCTION_RESULTS` values to reflect the actual results

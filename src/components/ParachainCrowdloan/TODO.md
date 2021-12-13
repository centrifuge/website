# TODO:

- `lambda/crowdloan/config.js`
  - Update the values of `configs.centrifuge.URL_CONTRIBUTIONS` and `configs.centrifuge.URL_CONTRIBUTOR` with the new web service URL.
- `src/components/ParachainCrowdloan/shared/const.ts`
  - **IMPORTANT:** After registering, update the value of `PARACHAIN_ID` with the ID of the Centrifuge chain (2006 is for Alstar!!)
  - After the end of the auction, update the `CCL_RESULTS_TITLE` and `CCL_RESULTS_SUBTITLE` values to reflect the actual results
  - Update the FAQ link in `FAQ_URL`
  - Populate the Youtube video ID `HOW_TO_STAKE_VIDEO_ID`

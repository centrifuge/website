## Pipeline behavior
### Deployment strategy
#### Scenario 1: Pull requests
- When PR opens:
    - If there's changes to functions/: both web-deploy and functions-deploy will race and one will deploy a preview function.
    - Subsequent commits will only call deploy-functions if there's changes to the /functions/ directory
    - IF there are changes other than to the functions/ dir, website will always be deployed

- When PR closes: both GCS and functions created for the PR will be removed (see [cleanup-pr.yml](https://github.com/centrifuge/website/blob/d526de7ce0fc903915c486609a25877f37459cfc/.github/workflows/cleanup-pr.yml))

#### Scenario 2: main branch
- It will always deploy to staging.k-f.dev
- It will refresh functions only if the functions/ dir changed

#### Scenario 3: manual push to prod (from main branch)
- A user will have to trigger [website-deploy.yml](https://github.com/centrifuge/website/actions/workflows/website-deploy.yml) by clicking on "Run Workflow" and marking the deploy_prod setting
- If you select a branch other than main, the jobs should fail. (Ref: https://github.com/centrifuge/website/blob/d526de7ce0fc903915c486609a25877f37459cfc/.github/workflows/website-deploy.yml#L45-L49)


## Features and security

Auth and key protection:
- Use OCID to authenticate GH <-> Gcloud
- Restrict usage of Gcloud auth to isolated jobs
- Only run prod deployments from main branch
- Require approval before using prod Auth keys
- Try not to run bash or other interpreted code after using `google-github-actions/auth`
- Pin all versions of external libraries to an SHA commit
- 
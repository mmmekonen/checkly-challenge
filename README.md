# Deploy Playwright Tests to Checkly with a CI Pipeline

This example project repository shows how you can use the Checkly CLI in a monitoring as code (MaC) workflow with Playwright tests.

1. Write your Playwright tests and add them to a folder.
2. Add an email to the Alert Channel to be notified of failures.
3. Push new tests to your repository -> GitHub Actions will deploy them to Checkly.

## Project Structure

This project has examples of Playwright tests and one failing Playwright test. It also adds a GitHub Actions workflow and an Email Alert Channel.

- Playwright tests are located under the `src/__checks__/` directory. The `failingtest.spec.ts` is designed to fail on each run.

- The `browser.check.ts` file creates Checkly Browser Checks for each `.spec.ts` file in the `src/__checks__/` directory.

- Each check has an Email Alert associated with it, defined in `alert-channels.ts`. Here you can change the specified email to your own to get Checkly email notifications for failing tests.

- An example GitHub Actions workflow is in the `.github/workflows/workflow.yml` file. It is triggered on a push to the repository and deploys all the checks in `src/__checks__/`.

## Recreate This Project

To recreate this project in another repository, you can fork this repository or follow these steps:

1. Install Checkly CLI either with `npm create checkly` or [here](https://www.checklyhq.com/docs/cli/installation/#direct-download).
    - Select a location for the Checkly project.
    - Select template for project (any is fine but Typescript is preferred).
    - Install all NPM dependencies.
    - Initialize a git repo.
2. Setup email alerts in the `alert-channels.ts` file.
    - Only necessary alert channel is email and only alert needed is `sendFailure`.
    - Change the default email address to your desired email.
3. Create a `browser.check.ts` file in `src/__checks__/` similar to the one in this repo.
    - It should take all `.spec.ts` files in the `src/__checks__/` folder and create a Browser Check for each.
    - Each Browser Check should include an Email Alert Channel.
4. Add your Playwright checks to the `src/__checks__/` folder.
    - You can remove any unwanted checks the template created.
5. Setup a Github Actions CI pipeline to deploy to Checkly.
    - __Before creating your workflow file__: setup [secrets](https://docs.github.com/en/actions/security-for-github-actions/security-guides/using-secrets-in-github-actions#creating-secrets-for-a-repository) for your repository's Github Actions.
        - You will need your [CHECKLY_ACCOUNT_ID](https://app.checklyhq.com/settings/account/general) and a [CHECKLY_API_KEY](https://app.checklyhq.com/settings/user/api-keys).
    - Create a `.yml` file for your Github Action (if the template hasn't already made one) to deploy tests on a push to the git repository.
    - Make sure the file is in located in the `.github/worksflows/` folder.
6. (Optional) You can configure Checkly's [global configuration](https://www.checklyhq.com/docs/cli/constructs-reference/#project) for your checks in the `checkly.config.ts` file.

## CLI Commands

If you would like to test your checks before you push them to a repository, you can run the core CLI commands with `npx checkly <command>` 

| Command              | Action                                           |
|:---------------------|:-------------------------------------------------|
| `npx checkly test`   | Dry run all the checks in your project           |
| `npx checkly deploy` | Deploy your checks to the Checkly cloud          |
| `npx checkly login`  | Log in to your Checkly account                   |
| `npx checkly --help` | Show help for each command.                      |

[Check the docs for the full CLI reference](https://www.checklyhq.com/docs/cli/command-line-reference/).

## Questions?

Check [our CLI docs](https://www.checklyhq.com/docs/cli/), the [main Checkly docs](https://checklyhq.com/docs) or 
join our [Slack community](https://checklyhq.com/slack).

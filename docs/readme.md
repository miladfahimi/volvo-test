# volvo-cicd-e2e-test


### About the project
###### This is a simple project to practicing CI/CD environment to run e2e test on pushing each change in any branches.
Here in our stack we use [webdriver.io][wdio],  a progressive automation framework built to automate our application tests to simplifies the interaction with the app which provides a set of plugins that help us to create stable development environment. For reporting the result getting help Allure Framework which is a flexible lightweight multi-language test report tool that shows a very concise representation of what have been tested in a neat web report form would be a good idea.

## Install on devEnviroment
### Installation

volvo-cicd-e2e-test requires node version less than 15 to run.
Install the dependencies and devDependencies and run the test by doing:

```sh
git clone git@github.com:miladfahimi/volvo-test.git
cd /root_of_project
npm i
npx wdio
```
### For reporting
volvo-cicd-e2e-test requires Allure Framwork.
Allure package installed before as it saved in devDependencies, so just needs to be run when the test finished and some results shows on terminal, by doing:
```sh
allure generate [allure_output_dir] && allure open
```
In CI/CD environment github actions comes to help us by triggering a workflow to run test and shows the report on github pages

> GitHub Actions makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. Make code reviews, branch management, and issue triaging work the way you want.

To show the result of the test after pushing the code related workflow starts the steps to prepare the environment, running the test, and finally copy report folder in a folder which will serve by github.
For access to the link of result open [Github Actions][github-actions] page and click on latest running workflow related your branch and commits, then in the end of "Create reports step" find the link of report.
The links following a pattern as below:
"https://miladfahimi.github.io/volvo-test/test-results/<Branch_name>/<Date&Time>/"

Example: [https://miladfahimi.github.io/volvo-test/test-results/main/210908-15h55m21s/][example-report]


   [wdio]: <https://webdriver.io/>
   [example-report]: <https://miladfahimi.github.io/volvo-test/test-results/main/210908-15h55m21s/>
   [github-actions]: <https://github.com/miladfahimi/volvo-test/actions>
   [github-link]: <https://github.com/miladfahimi/volvo-test/>
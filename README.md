# clone-github-project
Clone Github repository project board from project name prefix.

# Development
Build package
```bash
$ npm run build

# watch debug
$ npm run watch
```

# Agument
Change these options in the workflow `.yml` file to meet your GitHub project needs.

|Setting|Description|Values|
|---|---|---|
|repo-token|The REPO_TOKEN secret can be passed in using `{{ secrets.REPO_TOKEN }}`.|`{{ secrets.REPO_TOKEN }}`|
|project_prefix|The name of the source GitHub Project prefix.|strings|

# Create a release branch
Users shouldn't consume the action from master since that would be latest code and actions can break compatibility between major versions.

Checkin to the v1 release branch
```bash
$ git checkout -b v1
$ git commit -a -m "v1 release"
$ git push origin v1
```

# Usage
You can now consume the action by referencing the v1 branch
```yaml
uses: tetsuuu/clone-github-project@v1
with:
  repo-token: {{ secrets.REPO_TOKEN }}
  project-prefix: 'Weekly Scrum 1'
```

# clone-github-project

# 基本的な考え方
 - 前プロジェクトのクローンを作成

 - 前プロジェクトのカラムIDをGET
 -> 各カラムに入っているカードをGET
 -> 各カードをプロジェクトにPUT
 -> 新しいプロジェクトのカラムIDをGET
 -> 各カードを適切なカラムにPUT

noteとcardで叩くAPI違うかも？


# Agument
Change these options in the workflow `.yml` file to meet your GitHub project needs.

|Setting|Description|Values|
|---|---|---|
|repo-token|The REPO_TOKEN secret can be passed in using `{{ secrets.REPO_TOKEN }}`.|`{{ secrets.REPO_TOKEN }}`|
|project_prefix|The name of the source GitHub Project prefix.|strings|


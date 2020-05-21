const { getInput, debug, setFailed } = require('@actions/core');
const { context, GitHub } = require('@actions/github');
const { moment } = require('moment');

const getRepositoriesQuery = require('./get_repositories_query');
const generateProjectMutation = require('./generate_project_mutation');

(async () => {
	try {
        console.log('first step');
        console.log(context);
		const token = getInput('repo-token');
		const project = getInput('project-prefix');
		const repoName = getInput('repo-name');
		const owner = getInput('owner');
        console.log('input values');
		console.log('token is ' + token);
		console.log('project is ' + project);
		console.log('repoName is ' + repoName);
		console.log('owner is ' + owner);

        // Create a method to query GitHub        
        console.log('second step');
        const octokit = new GitHub(token);
        
        // Get repository infomation from context
		const prevProject = getRepositoriesQuery(project, repoName, owner);

        debug(prevProject);

        const {originData} = await octokit.graphql(prevProject);

        debug(JSON.stringify(originData));

        // Generate Project board cloning mutation query from preview project
        const date = moment();
        const startDate = date.add(4, 'day').format('MM/DD');
        const endDate = date.add(9, 'day').format('MM/DD');
        const body = startDate + endDate;
        const prevNum = originData.repository.projects.nodes.name.replace(/[^0-9]/g, '');
        const number = int(prevNum) + 1;
        const name = `Openβ ${number}th batch`;
        const id = originData.data.repository.projects.nodes.id;
        const ownerId = originData.data.repository.projects.nodes.owner.id;

		const projectMutation = generateProjectMutation(body, name, id, ownerId);

		debug(projectMutation);

		const {newProject} = await octokit.graphql(projectMutation);

        console.log(newProject);

	} catch (error) {
		setFailed(error.message);
	}   
})();

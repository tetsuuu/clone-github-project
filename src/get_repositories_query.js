/**
 * Return to repository data { body, name, sourceId, targetOwnerId }
 * リポジトリ情報を返す { body, name, sourceId, targetOwnerId }
 * @param {object} githubContext - The current repository data
 * @param {string} project - The origin project board name prefix
 */
const getRepositoriesQuery = (githubContext, project) => {
    const repoName = githubContext.repository;
    const repoOwner = githubContext.repository_owner;
    const projectInfo = (
        `query {
            repository(owner:"${repoOwner}", name:"${repoName}") {
                projects(last:1, states:OPEN, search:"${project}", orderBy: {field:CREATED_AT, direction: ASC}) {
                    nodes {
                        name
                        id
                        body
                        owner {
                            id
                        }
                        columns(first: 2) {
                            nodes {
                                name
                                id
                                cards(first:100) {
                                    totalCount
                                    nodes{
                                        id
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }`
    );
    
    return projectInfo;
}

export default getRepositoriesQuery;

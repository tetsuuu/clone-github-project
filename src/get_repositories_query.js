/**
 * Return to repository data { body, name, sourceId, targetOwnerId }
 * リポジトリ情報を返す { body, name, sourceId, targetOwnerId }
 * @param {any} project - The origin project board name prefix
 * @param {any} repoName - The origin project board name prefix
 * @param {any} owner - The origin project board name prefix
 */
const getRepositoriesQuery = (project, repoName, owner) => (
    `query {
        repository(owner:"${owner}", name:"${repoName}") {
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
    
export default getRepositoriesQuery;

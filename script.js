const orgName = "Krypto-Hashers-Community";
const apiUrl = `https://api.github.com/orgs/${orgName}/repos`;
const membersApiUrl = `https://api.github.com/orgs/${orgName}/members`;


fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response for repos was not OK");
        }
        return response.json();
    })
    .then(repos => {
        let totalStars = 0;
        let totalForks = 0;

        repos.forEach(repo => {
            totalStars += repo.stargazers_count;
            totalForks += repo.forks_count;
        });

        document.getElementById("stars-count").textContent = totalStars;
        document.getElementById("forks-count").textContent = totalForks;
    })
    .catch(error => {
        console.error("Error fetching stars and forks:", error);
    });


fetch(membersApiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response for members was not OK");
        }
        return response.json();
    })
    .then(members => {
        const totalMembers = members.length;
        document.getElementById("members-count").textContent = totalMembers;
    })
    .catch(error => {
        console.error("Error fetching members:", error);
    });
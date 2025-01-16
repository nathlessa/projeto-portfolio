

async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/nathlessa/js-developer-portfolio/refs/heads/main/data/profile.json'
    fetch(url)
    const fetching = await fetch(url)
    return await fetching.json()
}






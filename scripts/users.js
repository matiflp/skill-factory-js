const URL_GET_USERS = "https://jsonplaceholder.typicode.com/users";

const showUsers = async () => {
    let body = ``;
    const data = await getData(URL_GET_USERS);
    console.log(data);
    data.map((user) => {
        return (body += `
            <tr>
                <td>${user.Id}</td>
                <td>${user.name}</td>
                <td>${user.phone}</td>
                <td>${user.address.city}</td>
                <td>${user.company.name}</td>
            </tr>
        `);
    });

    document.getElementById("users").innerHTML += body;
} 

showUsers();
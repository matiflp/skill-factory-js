const formData = () => {
    const name = document.getElementById('name').value;
    localStorage.setItem("name", name);

    const email = document.getElementById('email').value;
    localStorage.setItem("email", email);

    const comments = document.getElementById('comments').value;
    localStorage.setItem("comments", comments);

    showDataForm();
}

const showDataForm = () => {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");
    const comments = localStorage.getItem("comments");

    console.log(`name = ${name}`);
    console.log(`email = ${email}`);
    console.log(`comments = ${comments}`);

    let body = `
        <h4>Los datos ingresados en el formulario son</h4>
        <p>name = ${name}</p>
        <p>email = ${email}</p>
        <p>comments = ${comments}</p>
    `;

    document.getElementById("form").innerHTML = body;
}


// Task 3: addUser(first_name, last_name, email)
export async function addUser(first_name, last_name, email) {
    const res = await fetch("http://localhost:3088/users");
    const users = await res.json();

    const maxId = users.reduce((max, user) => Math.max(max, user.id), 0);
    const newId = maxId + 1;

    const newUser = {
        id: newId,
        first_name,
        last_name,
        email
    };

    await fetch("http://localhost:3088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newUser)
    });

    console.log("{");
    console.log(`  id: ${newUser.id},`);
    console.log(`  first_name: '${newUser.first_name}',`);
    console.log(`  last_name: '${newUser.last_name}',`);
    console.log(`  email: '${newUser.email}'`);
    console.log("}");
}
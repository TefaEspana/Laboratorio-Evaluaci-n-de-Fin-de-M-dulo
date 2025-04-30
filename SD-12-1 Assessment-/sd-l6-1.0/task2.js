// Task 2: listUsers()
export async function listUsers() {
        const res = await fetch("http://localhost:3088/users");
        const users = await res.json();
        console.log("[");
        for (let i = 0; i < users.length; i++) {
            const u = users[i];
            console.log("{");
            console.log(`  id: ${u.id},`);
            console.log(`  first_name: '${u.first_name}',`);
            console.log(`  last_name: '${u.last_name}',`);
            console.log(`  email: '${u.email}'`);
            console.log(i === users.length - 1 ? "}" : "},");
        }
        console.log("]");
}

console.log(listUsers())
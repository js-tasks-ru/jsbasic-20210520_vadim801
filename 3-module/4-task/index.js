function showSalary(users, age){
  return users
    .filter(user => user.age <= age)
    .map(user => `${user.name}, ${user.balance}`)
    .join('\n')
}


/*function showSalary(users, age){
  let filterAge = users.filter((user) => {
    return user.age <= age
  });
  let name = filterAge.map((userName) => {
    return `${userName.name}, ${userName.balance}`
  })
  return name.join("\n");
}*/

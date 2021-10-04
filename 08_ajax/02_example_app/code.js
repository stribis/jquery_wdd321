$.getJSON('https://jsonplaceholder.typicode.com/users', data => {
  // console.log(data)

  $.each(data, function (i, person) {
    // console.log(person)
    const template = `
    <div class="card">
      <img width="100" height="100" src="https://avatars.dicebear.com/api/human/${person.username}.svg" alt="Avatar of person" class="avatar">
      <p>${person.username}</p>
      <hr>
      <ul>
        <li>Name: ${person.name}</li>
        <li>Email: ${person.email}</li>
        <li>City: ${person.address.city}</li>
        <li><a href="http://${person.website}">${person.company.name}</a></li>
      </ul>
    </div>
    `
    $('.container').append(template)
  })
})

// https://avatars.dicebear.com/api/human/${person.username}.svg
// https://robohash.org/${person.username}?set=set4
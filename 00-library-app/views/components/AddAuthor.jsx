const React = require("react");

function AddAuthor(props) {
  return (
    <form action={`/authors/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>Name:</label>
      <input type="text" name="name" />
      <br />

      <label>Last Name:</label>
      <input type="text" name="lastName" />
      <br />

      <label>Nationality:</label>
      <input type="text" name="nationality" />
      <br />

      <label>Birthday:</label>
      <input type="text" name="birthday" />
      <br />

      <label>Picture URL:</label>
      <input type="text" name="pictureUrl" />
      <br />

      <button type="submit">ADD</button>
    </form>
  );
}

module.exports = AddAuthor;
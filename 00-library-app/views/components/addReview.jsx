const React = require("react");

function AddReview(props) {
  return (
    <form action={`/review/add?bookid=${props.idOfTheBook}`} method="POST">
      <label>Review:</label>
      <input type="text" name="review" />
      <br />

     
      <button type="submit">ADD</button>
    </form>
  );
}

module.exports = AddReview;
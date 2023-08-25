const newFormHandler = async function(event) {
  event.preventDefault();

  const postTitle = document.querySelector('input[name="post-title"]').value;
  const postContent = document.querySelector('textarea[name="post-body"]').value;

  console.log(postContent);

  await fetch(`/api/newpost`, {
    method: 'POST',
    body: JSON.stringify({
      postContent,
    }),
    headers: { 'Content-Type': 'application/json' },
  });
};

document
  .querySelector('#new-post-form')
  .addEventListener('submit', newFormHandler);
import "./Footer.css";

function Footer({ tasks }) {
  const completed = tasks.filter((task) => task.completed).length;

  return (
    <footer className="footer">
      <p>Total Tasks: {tasks.length}</p>
      <p>Completed: {completed}</p>
    </footer>
  );
}

export default Footer;
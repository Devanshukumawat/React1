function Hompage() {

    const divcss = {
        backgroundColor: "black",
        padding: "20px",
        marginBottom: "20px",
      }

    const ulcss = {
        listStyleType: "none",
      }  

  return (
    <>
      <div
        style={divcss}
      >
        <ul
          style={ulcss}
        >
          <li
            style={{
              textAlign: "center",
            }}
          >
            <a
              href="http://google.in"
              style={{
                color: "white",
                textDecoration: "none",
                fontSize: "30px",
              }}
            >
              Home Page
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Hompage;

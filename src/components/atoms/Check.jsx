import Form from "react-bootstrap/Form";

function Check() {
  return (
    <Form>
      {["checkbox"].map((type) => (
        <div key={`${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`${type}`}
            label={`Check ${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default Check;
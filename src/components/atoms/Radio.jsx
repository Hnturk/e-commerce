import Form from "react-bootstrap/Form";

function Radio() {
  return (
    <Form>
      {["radio"].map((type) => (
        <div key={`${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`${type}`}
            label={`Radio ${type}`}
          />
        </div>
      ))}
    </Form>
  );
}

export default Radio;
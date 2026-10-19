export default function Input() {
  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="">INITIAL INVESTMENT</label>
          <input type="number" require/>
        </p>
        <p>
          <label htmlFor="">ANNUAL INVESTMENT</label>
          <input  type="number" require/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="">EXPECTED RETURN</label>
          <input type="number" require />
        </p>
        <p>
          <label htmlFor="">DURATION</label>
          <input type="number" require />
        </p>
      </div>
    </div>
  );
}

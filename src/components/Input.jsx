export default function Input() {

 

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label >INITIAL INVESTMENT</label>
          <input type="number" require/>
        </p>
        <p>
          <label >ANNUAL INVESTMENT</label>
          <input  type="number" require/>
        </p>
      </div>
      <div className="input-group">
        <p>
          <label >EXPECTED RETURN</label>
          <input type="number" require />
        </p>
        <p>
          <label >DURATION</label>
          <input type="number" require />
        </p>
      </div>
    </div>
  );
}

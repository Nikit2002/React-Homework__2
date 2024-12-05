import './Form.css'
function Form() {
    function showFormData(e) {
        e.preventDefault();
        let nameInputValue = document.querySelector("#name").value;
        let emailInputValue = document.querySelector("#email").value;

        console.log(`Submitted name: ${nameInputValue}`);
        console.log(`Submitted email: ${emailInputValue}`);
    }
    return(
        <div className='form__container'>
            <h2 className="form__title">Form Title</h2>
            <form action="">
                <input type="text" name="name" id="name" placeholder='Enter your name'/>
                <br />
                <input type="email" name="email" id="email" placeholder='Enter your email'/>
                <br />
                <button onClick={showFormData} type="submit">Send Form</button>
            </form>
        </div>
    );
}

export default Form;
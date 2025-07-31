import { useState} from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        username: "",
        password: "",
    })

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value};
        });
    }

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            username: "",
            password: "",
        })
    }

    return (
  <form onSubmit= {handleSubmit}>
            <label htmlfor="fullName">username</label>
             <input placeholder="enter username " type= "text" value= {formData.fullName} id= "fullName" name= "fullName" onChange= {handleInputChange} />
        


        
            <label htmlFor="username">username</label>
             <input placeholder="enter username " type= "text" value= {formData.username} id= "username" name= "username" onChange= {handleInputChange} />
        

        
            <label htmlFor="password">Password</label>
             <input placeholder="enter password" type= "password" value= {formData.password} id= "password" name= "password"
              onChange= {handleInputChange} />
        <button> submit</button> </form>
    )
}

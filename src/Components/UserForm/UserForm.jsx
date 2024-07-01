import { useState } from 'react';
import './UserForm.css'

const UserForm = () => {

    const [users, setUsers] = useState([]);
    const [firstName, setFirstName] = useState(''); 
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState(''); 
    const [errorMessage, setErrorMessage] = useState('');
  
    // Function to handle adding a new user
    const handleAddUser = () => {
        // Simple email validation with regex
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
          setErrorMessage('Please enter a valid email address.');
          return;
        }
    
        const newUser = {
          id: users.length + 1,
          firstName,
          lastName,
          email
        };
        setUsers([...users, newUser]);
        setFirstName('');
        setLastName('');
        setEmail('');
        setErrorMessage('');
      };
  
    // Function to handle deleting a user based on ID
    const handleDeleteUser = (id) => {
      
      const updatedUsers = users.filter(user => user.id !== id);
      setUsers(updatedUsers); // Set the updated users array
    };  

  return (
    <div className='user-form'>
        <h1>User Form</h1>
        <div className="user-inputs">
            <form>
                <div className="user-input">
                    <label htmlFor='firstName'>First Name - </label>
                    <input type="text" required id='firstName' value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='Enter the First Name'/>
                </div>
                <div className="user-input">
                    <label htmlFor='lastName'>Last Name - </label>
                    <input type="text" required id='lastName' value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Enter the Last Name'/>
                </div>
                <div className="user-input">
                    <label htmlFor='email'>Email - </label>
                    <input type="email" required id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter the First Name'/>
                </div>
                <button onClick={handleAddUser} type='submit'>Add User</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
        <div className='user-display'>
            <h1>Users</h1>
            <h3>Users Will be display here</h3>
            <ul className='users-list'>
            {users.map(user => (
                <li key={user.id}>
                {user.firstName} {user.lastName} - {user.email} 
                <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
    </div>
  )
}

export default UserForm
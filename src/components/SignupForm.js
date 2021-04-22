import React from "react";

const SignupForm = () => {
  return (
    <form className="centered-form signup-form">
      <div class="form-group">
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          placeholder="Enter your first name"
        />
      </div>

      <div class="form-group">
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          placeholder="Enter your last name"
        />
      </div>

      <div class="form-group">
        <label htmlFor="email">First Name</label>
        <input
          type="email"
          name="email"
          placeholder="Enter your email"
        />
      </div>

      <div class="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
      </div>

      <div class="form-group">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm your password"
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignupForm;

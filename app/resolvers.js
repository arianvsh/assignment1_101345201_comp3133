const Employee = require("./models/EmployeeModel")
const User = require("./models/UserModel")

module.exports = {
  employees: async () => {
    try {
      const employeesFetched = await Employee.find()
      return employeesFetched.map(employee => {
        return {
          ...employee._doc,
          _id: employee.id,
          createdAt: new Date(employee._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  addEmployee: async args => {
    try {
      const { first_name, last_name, email, gender, salary } = args.employee
      const employee = new Employee({
        first_name,
        last_name,
        email,
        gender,
        salary
      })
      const newEmployee = await employee.save()
      return { ...newEmployee._doc, _id: newEmployee.id }
    } catch (error) {
      throw error
    }
  },

  users: async () => {
    try {
      const usersFetched = await User.find()
      return usersFetched.map(user => {
        return {
          ...user._doc,
          _id: user.id,
          createdAt: new Date(user._doc.createdAt).toISOString(),
        }
      })
    } catch (error) {
      throw error
    }
  },

  addUser: async args => {
    try {
      const { username, email, password } = args.user
      const user = new User({
        username,
        email,
        password,
      })
      const newUser = await user.save()
      return { ...newUser._doc, _id: newUser.id }
    } catch (error) {
      throw error
    }
  },
  login: async (args) => {
    try {
      const { username, password } = args;
      const user = await User.findOne({ username });
      if (!user) {
        throw new Error("User not found");
      }
        if (user.password !== password) {
            throw new Error("Incorrect Password");
        }
      return "Login successful";
    } catch (error) {
      throw error;
    }
  },

  updateEmployee: async ({ employee, id }) => {
    const employeeUpdated = await Employee.findByIdAndUpdate(id, {
      $set: employee
    }, { new: true })
    return employeeUpdated
  },

  deleteEmployee: async ({ id }) => {
    await Employee.findByIdAndDelete(id);
    return "Employee deleted";
  },

  searchAllEmployees: async () => {
    try {
      const employeesFetched = await Employee.find();
      return employeesFetched;
    } catch (error) {
      throw error;
    }
  },

  searchEmployeeById: async ({ id }) => {
    try {
      const employee = await Employee.findById(id);
      return employee;
    } catch (error) {
      throw error;
    }
  }




}
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userActions';

import ImageLight from '../assets/img/create-account-office.jpeg'
import ImageDark from '../assets/img/create-account-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Input, HelperText, Label, Select, Textarea, Button } from '@windmill/react-ui'

function CreateAccount(props) {

  const [profilefor, setProfileFor] = useState('Select one');
  const [gender, setGender] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePasswoprofileforrd, setRePassword] = useState('');

  const [isprofileforclicked, setIsProfileForClicked] = useState(false);
  const userRegister = useSelector(state => state.userRegister);
  const { loading, userInfo, error } = userRegister;
  const dispatch = useDispatch();

  const redirect = props.location.search ? props.location.search.split("=")[1] : '/app/dashboard';
  useEffect(() => {
    if (userInfo) {
      props.history.push(redirect);
      console.log(userInfo)
    }
    return () => {
      //
    };
  }, [userInfo]);

  const handleProfileForChange = (e) => {
    setProfileFor(e.target.value);
    setIsProfileForClicked(true);
    // if(profilefor == 'Myself'){
    //   setIsProfileForClicked(true);
    // }
    // if(profilefor == 'Relative'){
    //   setIsProfileForClicked(true);
    // }
    // if(profilefor == 'Friend'){
    //   setIsProfileForClicked(true);
    // } else {
    //   setIsProfileForClicked(false);
    // }
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password, profilefor, gender));
  }
  return (
    <form onSubmit={submitHandler} >
       <li>
          {loading && <div>Loading...</div>}
          {error && <div>{error}</div>}
        </li>
    <div className="flex items-center min-h-screen p-6 bg-gray-50 dark:bg-gray-900">
      <div className="flex-1 h-full max-w-4xl mx-auto overflow-hidden bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <div className="flex flex-col overflow-y-auto md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <img
              aria-hidden="true"
              className="object-cover w-full h-full dark:hidden"
              src={ImageLight}
              alt="Office"
            />
            <img
              aria-hidden="true"
              className="hidden object-cover w-full h-full dark:block"
              src={ImageDark}
              alt="Office"
            />
          </div>
          <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
                Create account
              </h1>
                <Label className="mt-4">
                  <span>Create matrimony profile for</span>
                  <Select className="mt-1" onChange={handleProfileForChange} value={profilefor}>
                  <option value='Myself'>Select one</option>
                    <option value='Myself'>Myself</option>
                    <option value='Daughter'>Daughter</option>
                    <option value='Son'>Son</option>
                    <option value='Sister'>Sister</option>
                    <option value='Brother'>Brother</option>
                    <option value='Relative'>Relative</option>
                    <option value='Friend'>Friend</option>
                  </Select>
                </Label>
                {
                  isprofileforclicked  && 
                  <Label className="mt-4">
                  <span>Gender</span>
                  <Select className="mt-1" onChange={handleGenderChange} value={gender}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                  </Select>
                </Label>
                }
                <Label>
                <span>Name</span>
                <Input className="mt-1" type="name" placeholder="john" onChange={(e) => setName(e.target.value)}/>
              </Label>
              <Label>
                <span>Email</span>
                <Input className="mt-1" type="email" placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)}/>
              </Label>
              <Label className="mt-4">
                <span>Password</span>
                <Input className="mt-1" placeholder="***************" type="password" onChange={(e) => setPassword(e.target.value)}/>
              </Label>
              <Label className="mt-4">
                <span>Confirm password</span>
                <Input className="mt-1" placeholder="***************" type="rePassword"  onChange={(e) => setRePassword(e.target.value)}/>
              </Label>

              <Label className="mt-6" check>
                <Input type="checkbox" />
                <span className="ml-2">
                  I agree to the <span className="underline">privacy policy</span>
                </span>
              </Label>

              <Button type="submit" block className="mt-4">
                Create account
              </Button>

              <hr className="my-8" />

              <Button block layout="outline">
                <GithubIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Github
              </Button>
              <Button block className="mt-4" layout="outline">
                <TwitterIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                Twitter
              </Button>

              <p className="mt-4">
                <Link to={redirect === "/" ? "login" : "login?redirect=" + redirect}
                  className="text-sm font-medium text-purple-600 dark:text-purple-400 hover:underline"
                  
                >
                  Already have an account? Login
                </Link>
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
    </form>
  )
}

export default CreateAccount



import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import DatePicker from 'react-date-picker';

import { useSelector, useDispatch } from 'react-redux';
import { update } from '../actions/userActions';

import ImageLight from '../assets/img/login-office.jpeg'
import ImageDark from '../assets/img/login-office-dark.jpeg'
import { GithubIcon, TwitterIcon } from '../icons'
import { Label, Input, Button, Select, Textarea } from '@windmill/react-ui'

function Login(props) {
	const dispatch = useDispatch();
	const userSignin = useSelector(state => state.userSignin);
	const { userInfo } = userSignin;
	const userUpdate = useSelector((state) => state.userUpdate);
	const { loading, success, error } = userUpdate;

	const [dob, setDob] = useState();
	const [religion, setReligion] = useState('');
	const [mothertongue, setMotherTongue] = useState('');
	const [email, setEmail] = useState('userInfo && userInfo.email');
	const [password, setPassword] = useState('');

	const [caste, setcCaste] = useState('');
	const [subcaste, setSubcaste] = useState('');
	const [isWillingFromMarryOtherCommunities, setisWillingFromMarryOtherCommunities] = useState(false);

	const [martialStatus, setmartialStatus] = useState('');
	const [height, setheight] = useState('');
	const [familyStatus, setfamilyStatus] = useState('');
	const [familyType, setfamilyType] = useState('');
	const [familvalue, setfamilvalue] = useState('');
	const [isDisability, setisDisability] = useState(false);

	const [HighestEducation, setHighestEducation] = useState('');
	const [Employedin, setEmployedin] = useState('');
	const [Occupation, setOccupation] = useState('');
	const [currency, setcurrency] = useState('');
	const [amount, setamount] = useState('');
	const [country, setcountry] = useState('');
	const [state, setstate] = useState('');
	const [city, setcity] = useState('');

	const [about, setabout] = useState('');

	const [step, setStep] = useState(1);
	const [martialvalues, setMartialValues] = useState([
		{
			'name': 'Never Married',
			'value': 'Never_Married'
		},
		{
			'name': 'Widowed',
			'value': 'Widowed'
		},
		{
			'name': 'Divorced',
			'value': 'Divorced'
		},
		{
			'name': 'Awaiting divorce',
			'value': 'Awaiting_divorce'
		}
	]);
	const [familvalues, setFamilValues] = useState([
		{
			'name': 'Middle class',
			'value': 'Middle_class'
		},
		{
			'name': 'middle class',
			'value': 'middle_class'
		},
		{
			'name': 'Rich',
			'value': 'Rich'
		},
		{
			'name': 'Affluent',
			'value': 'Affluent'
		}
	]);
	const [familytypevalues, setFamilyTypeValues] = useState([
		{
			'name': 'Joint',
			'value': 'Joint'
		},
		{
			'name': 'Nuclear',
			'value': 'Nuclear'
		}
	]);
	const [family3values, setFamily3Values] = useState([
		{
			'name': 'Orthodox',
			'value': 'Orthodox'
		},
		{
			'name': 'Traditional',
			'value': 'Traditional'
		},
		{
			'name': 'Moderate',
			'value': 'Moderate'
		},
		{
			'name': 'Liberal',
			'value': 'Liberal'
		}
	]);
	const [disabilitiesvalues, setdisabilitiesValues] = useState([
		{
			'name': 'None',
			'value': 'false'
		},
		{
			'name': 'Physically challenged',
			'value': 'true'
		}
	]);
	const [employmentsvalues, setemploymentsvalues] = useState([
		{
			'name': 'Government/PSU',
			'value': 'Government/PSU'
		},
		{
			'name': 'Private',
			'value': 'Private'
		},
		{
			'name': 'Business',
			'value': 'Business'
		},
		{
			'name': 'Defence',
			'value': 'Defence'
		},
		{
			'name': 'Self Employed',
			'value': 'Self Employed'
		},
		{
			'name': 'Not working',
			'value': 'Not working'
		}
	]);
	const redirect = props.location.search ? props.location.search.split("=")[1] : '/app/dashboard';

	const handleReligionChange = (e) => {
		setReligion(e.target.value);
	};
	const handleSubCasteChange = (e) => {
		setSubcaste(e.target.value);
	};
	const handleMotherTongueChange = (e) => {
		setMotherTongue(e.target.value);
	};

	// const handleMaritalStatusChange = (e) => {
	// 	setmartialStatus(e.target.value);
	// };
	// const handleHeightChange = (e) => {
	// 	setheight(e.target.value);
	// };
	// const handleFamilyStatusChange = (e) => {
	// 	setfamilyStatus(e.target.value);
	// };
	// const handleFamilyTypeChange = (e) => {
	// 	setfamilyType(e.target.value);
	// };
	// const handleFamilyValuesChange = (e) => {
	// 	setfamilvalue(e.target.value);
	// };
	// const handleAnyDisabilityChange = () => {
	// 	setisDisability();
	// };
       const handleEmployedInChange = (e) => {
		console.log(e)
	};
	useEffect(() => {
		if (userInfo) {
			// props.history.push(redirect);
			 console.log(userInfo)
		}
		return () => {
			//
		};
	}, [userInfo]);

	const submitHandler = (e) => {
		// e.preventDefault();
		dispatch(update({dob,religion,mothertongue,caste,subcaste,isWillingFromMarryOtherCommunities,martialStatus,height,familyStatus,
			familyType,familvalue,isDisability,HighestEducation,Employedin,Occupation,currency,amount,country,state,city,about}));
		console.log({dob,religion,mothertongue,caste,subcaste,isWillingFromMarryOtherCommunities,martialStatus,height,familyStatus,
			familyType,familvalue,isDisability,HighestEducation,Employedin,Occupation,currency,amount,country,state,city,about})
		// dispatch(signin(email, password));

	}
	const handleStep2Change = () => {
		console.log('redirect')
		setStep(2)
		console.log(step)

	}
	const handleStep3Change = () => {
		console.log('redirect')
		setStep(3)
		console.log(step)

	}
	const handleStep4Change = () => {
		console.log('redirect')
		setStep(4)
		console.log(step)

	}
	const handleStep5Change = () => {
		console.log('redirect')
		setStep(5)
		console.log(step)

	}
	return (
		<>
			{/* <form onSubmit={submitHandler} > */}
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
							{ step === 1 && 
								<div className="w-full">
								<h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
								<Label>
									<span>Date Of Birth</span>
									<div>
										<DatePicker
											onChange={setDob}
											value={dob}
										/>
									</div>
								</Label>

								<Label className="mt-4">
									<span>Religion</span>
									<Select className="mt-1" onChange={handleReligionChange} value={religion}>
										<option value='Hindu'>Hindu</option>
										<option value='Muslim'>Muslim</option>
										<option value='FemaChristian'>Christian</option>
									</Select>
								</Label>

								<Label className="mt-4">
									<span>Mother tongue</span>
									<Select className="mt-1" onChange={handleMotherTongueChange} value={mothertongue}>
										<option value='Tamil'>Tamil</option>
										<option value='Malayalam'>Malayalam</option>
										<option value='Hindi'>Hindi</option>
									</Select>
								</Label>
								<Label>
									<span>Email</span>
									<Input className="mt-1" type="email" placeholder="john@doe.com" onChange={(e) => setEmail(e.target.value)} />
								</Label>

								<Label className="mt-4">
									<span>Password</span>
									<Input className="mt-1" type="password" placeholder="***************" onChange={(e) => setPassword(e.target.value)} />
								</Label>

								<Button className="mt-4" block onClick={handleStep2Change}>
									Continue
								</Button>
							</div>
							}
                          { /* STEP 2 */}
						  {
							  step === 2 && 
							  <div className="w-full">
							  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Religion details can help us find the right match</h1>
					  
							  <Label className="mt-4">
									<span>Caste</span>
									<Select className="mt-1" onChange={(e) => setcCaste(e.target.value)} value={caste}>
										<option value='Caste 1'>Caste 1</option>
										<option value='Caste 2'>Caste 2</option>
									</Select>
								</Label>

										<Label className="mt-6" check>
											<Input type="checkbox"  defaultChecked={isWillingFromMarryOtherCommunities} onChange={(e) => setisWillingFromMarryOtherCommunities(!isWillingFromMarryOtherCommunities)} value={isWillingFromMarryOtherCommunities}/>
											<span className="ml-2">
											Willing to marry from other communities also
											</span>
										</Label>

								<Label className="mt-4">
									<span>Subcaste</span>
									<Select className="mt-1" onChange={(e) => setSubcaste(e.target.value)} value={subcaste}>
										<option value='Subcaste 1'>Subcaste 1</option>
										<option value='Subcaste 2'>Subcaste 2</option>
										<option value='Subcaste 3'>Subcaste 3</option>
									</Select>
								</Label>

							  <Button className="mt-4" block onClick={handleStep3Change}>
							  Continue
							  </Button>
						  </div>
						  }
						                            { /* STEP 3 */}
						  {
							  step === 3 && 
							  <div className="w-full">
							  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Tell us about your son's personal details</h1>
							  <Label>
									<span>Marital Status</span>
								</Label>	
								<Select className="mt-1" onChange={(e) => setmartialStatus(e.target.value)} value={martialStatus}>
										{martialvalues.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
									</Select>
							  <Label className="mt-4">
									<span>Hieight</span>
									<Select className="mt-1" onChange={(e) => setheight(e.target.value)} value={height}>
										<option value='4 ft/ 133 cms'>4 ft/ 133 cms</option>
										<option value='5 ft/ 133 cms'>5 ft/ 133 cms</option>
										<option value='6 ft/ 133 cms'>6 ft/ 133 cms</option>
									</Select>
								</Label>
							   <Label>
									<span>Family Status</span>
								</Label>
								<Select className="mt-1" onChange={(e) => setfamilyStatus(e.target.value)} value={familyStatus}>
										{familvalues.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
									</Select>
							   <Label>
									<span>Family Type</span>
								</Label>	
								<Select className="mt-1" onChange={(e) => setfamilyType(e.target.value)} value={familyType}>
										{familytypevalues.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
									</Select>
							   <Label>
									<span>Family Values</span>
								</Label>	
								<Select className="mt-1" onChange={(e) => setfamilvalue(e.target.value)} value={familvalue}>
										{family3values.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
							  </Select>
							  <Label>
									<span>Any Disability</span>
								</Label>	
								<Select className="mt-1" onChange={(e) => setisDisability(e.target.value)} value={isDisability}>
										{disabilitiesvalues.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                                </Select>
							  <Button className="mt-4" block onClick={handleStep4Change}>
							  Continue
							  </Button>
						  </div>
						  }
						                            { /* STEP 4 */}
						  {
							  step === 4 && 
							  <div className="w-full">
							  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Professional details help us to find the best companion</h1>
					  
										<Label className="mt-4">
											<span>Highest Education</span>
											<Select className="mt-1" onChange={(e) => setHighestEducation(e.target.value)} value={HighestEducation}>
												<option value='Education 1'>Education 1</option>
												<option value='Education 2'>Education 2</option>
											</Select>	
										</Label>
										<Label>
											<span>Employed in</span>
										</Label>
										{/* onClick={(e) => setEmployedin(l.value)} */}
										<Select className="mt-1" onChange={(e) => setEmployedin(e.target.value)} value={Employedin}>
										{employmentsvalues.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                                </Select>
										<Label className="mt-4">
											<span>Occupation</span>
											<Select className="mt-1" onChange={(e) => setOccupation(e.target.value)} value={Occupation}>
												<option value='Occupation 1'>Occupation 1</option>
												<option value='Occupation 2'>Occupation 2</option>
											</Select>
										</Label>
										<Label className="mt-4">
											<span>Annual Income</span>
											<div className='flex'>
											<Select className="mt-1 max-w-5" onChange={(e) => setcurrency(e.target.value)} value={currency}>
												<option value='USD'>USD</option>
												<option value='INR'>INR</option>
											</Select>
											<Select className="mt-1" onChange={(e) => setamount(e.target.value)} value={amount}>
												<option value='1 - 2'>1 - 2</option>
												<option value='2 - 3'>2 - 3</option>
											</Select>
											</div>
										</Label>
										<Label className="mt-4">
											<span>Work location</span>
											<div className=''>
											<Select className="mt-1" onChange={(e) => setcountry(e.target.value)} value={country}>
												<option value='Education 1'> SelectCountry</option>
												<option value='Education 2'>Education 2</option>
											</Select>
											<Select className="mt-1" onChange={(e) => setstate(e.target.value)} value={state}>
												<option value='Education 1'>Select State</option>
												<option value='Education 2'>Education 2</option>
											</Select>
											<Select className="mt-1" onChange={(e) => setcity(e.target.value)} value={city}>
												<option value='Education 1'>Select City</option>
												<option value='Education 2'>Education 2</option>
											</Select>
											</div>
										</Label>

							  <Button className="mt-4" block onClick={handleStep5Change}>
							  Continue
							  </Button>
						  </div>
						  }
						  { /* STEP 5 */}
						  {
							  step === 5 && 
							  <div className="w-full">
							  <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Let the world know about your son's awesomeness</h1>
					  
										<Label className="mt-4">
											<span>About your son</span>
											<Textarea className="mt-1" rows="3" placeholder="Enter some long form content." onChange={(e) => setabout(e.target.value)} value={about}/>
										</Label>

							  <Button className="mt-4" block onClick={submitHandler}>
							  Continue
							  </Button>
						  </div>
						  }
						</main>
					</div>
				</div>
			</div>
			{/* </form> */}
		</>
	)
}

export default Login

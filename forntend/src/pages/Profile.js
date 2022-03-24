import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { profileCreateanduUpdate, detailsProfile } from '../actions/profileActions';
import PageTitle from '../components/Typography/PageTitle'
import { Input, HelperText, Label, Select, Textarea, Button } from '@windmill/react-ui'

function Blank() {
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const profileDetails = useSelector(state => state.profileDetails);
  const { loading: loadingDetails, profile, error: errorDetails } = profileDetails;
  const profileCreateUpdate = useSelector((state) => state.profileCreateUpdate);
	const {
	  loading: loadingSave,
	  success: successSave,
	  error: errorSave,
	} = profileCreateUpdate;
	const dispatch = useDispatch();

	const [bodytype, setbodytype] = useState('Select one');
	const [weight, setweight] = useState('');
	const [c_i, setc_i] = useState('');
	const [Organization, setorganization] = useState('');

	const [eatingh, seteatingh] = useState('');
	const [smokingh, setsmokingh] = useState('');
	const [drikingh, setdrikingh] = useState('');

	const [star, setstart] = useState('');
	const [raasi, setraasi] = useState('');
	const [hrs, sethrs] = useState('');
	const [mins, setmins] = useState('');
	const [period, setoeriod] = useState('');
	const [country, setcountry] = useState('');
	const [state, setstate] = useState('');
	const [city, setcity] = useState('');

	const [fatherstatus, setfatherstatust] = useState('');
	const [motherstatus, setmotherstatus] = useState('');
	const [noOfBrothers, setnoOfBrothers] = useState();
	const [brothersstatus, setbrothersstatus] = useState('');
	const [noOfSisiters, setnoOfSisiters] = useState();
	const [sistersstatus, setsistersstatus] = useState('');
	const [pcountry, setpcountry] = useState('');
	const [pstate, setpstate] = useState('');
	const [pcity, setpcity] = useState('');
	const [pcountrycode, setpcountrycode] = useState('');
	const [pmobile, setpmobile] = useState('');
	const [Ancestral , setAncestral ] = useState('');

	const [issame, setissame] = useState(false);
	const [isdifferent, setisdifferent] = useState(false);

  const submit = () => {
    // if(profile && profile._id){
      const _id = userInfo.profileid
      dispatch(profileCreateanduUpdate({
        _id, bodytype,
        weight,c_i,Organization,eatingh,smokingh,drikingh,star,raasi,hrs,mins,period,country,state,city,
        fatherstatus,motherstatus,noOfBrothers,brothersstatus,noOfSisiters,sistersstatus,pcountry,pstate,pcity,pcountrycode,
        pmobile,Ancestral,isdifferent
      }));
    // }
		console.log({
      bodytype,
      weight,c_i,Organization,eatingh,smokingh,drikingh,star,raasi,hrs,mins,period,country,state,city,
      fatherstatus,motherstatus,noOfBrothers,brothersstatus,noOfSisiters,sistersstatus,pcountry,pstate,pcity,pcountrycode,
      pmobile,Ancestral,isdifferent
    })
	}
  useEffect(() => {
    console.log(userInfo)
    dispatch(detailsProfile(userInfo.profileid))
    if (profile) {
      // props.history.push(redirect);
      console.log(profile._id)
    }
    return () => {
      //
    };
  }, []);
  return (
    <>
      <PageTitle>Basic Information</PageTitle>
	  <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
			  <Label className="mt-4">
                  <span>Body type</span>
                  <Select className="mt-1" onChange={(e) => setbodytype(e.target.value)} value={bodytype}>
                    <option value='Slim'>Slim</option>
                    <option value='Average'>Average</option>
					<option value='Athletic'>Athletic</option>
                    <option value='Heavy'>Heavy</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Weight</span>
                  <Select className="mt-1" onChange={(e) => setweight(e.target.value)} value={weight}>
                    <option value='41 kg'>41 kg</option>
                    <option value='42 kg'>42 kg</option>
					<option value='43 kg'>43 kg</option>
                    <option value='44 kg'>44 kg</option>
                  </Select>
                </Label>

				  <Label>
					  <span>College / Institution</span>
					  <Input className="mt-1" placeholder="Enter College / Institution name" onChange={(e) => setc_i(e.target.value)}/>
				  </Label>
				  <Label>
					  <span>Organization</span>
					  <Input className="mt-1" placeholder="Organization name" onChange={(e) => setorganization(e.target.value)}/>
				  </Label>


            </div>
          </main>
		  <PageTitle>Lifestyle Info</PageTitle>
	  <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
			  <Label className="mt-4">
                  <span>Eating Habit</span>
                  <Select className="mt-1" onChange={(e) => seteatingh(e.target.value)} value={eatingh}>
                    <option value='Slim'>Vegetarian</option>
                    <option value='Average'>Non-Vegetarian</option>
					<option value='Athletic'>Eggetarian</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Drinking Habit</span>
                  <Select className="mt-1" onChange={(e) => setsmokingh(e.target.value)} value={smokingh}>
                    <option value='NO'>nO</option>
                    <option value='Average'>Drinks Socially</option>
					<option value='Athletic'>Yes</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Smoking Habit</span>
                  <Select className="mt-1" onChange={(e) => setdrikingh(e.target.value)} value={drikingh}>
                    <option value='Slim'>No</option>
                    <option value='Average'>Occasially</option>
					<option value='Athletic'>Yes</option>
                  </Select>
                </Label>


            </div>
          </main>

		  <PageTitle>Religion Information</PageTitle>
	  <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
			  <Label className="mt-4">
                  <span>Star</span>
                  <Select className="mt-1" onChange={(e) => setstart(e.target.value)} value={star}>
                    <option value='Slim'>Ashwini</option>
                    <option value='Average'>Bharani</option>
					<option value='Athletic'>Karthigai</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Raasi</span>
                  <Select className="mt-1" onChange={(e) => setraasi(e.target.value)} value={raasi}>
                    <option value='NO'>Mesham</option>
                    <option value='Average'>Drinks Socially</option>
					<option value='Athletic'>Yes</option>
                  </Select>
                </Label>
				<PageTitle>Horoscope Details</PageTitle>

				<Label className="mt-4">
                  <span>Time of Birth</span>
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => sethrs(e.target.value)} value={hrs}>
                    <option value='Slim'>Hrs</option>
                    <option value='Average'>0</option>
					<option value='Athletic'>1</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setmins(e.target.value)} value={mins}>
                    <option value='Slim'>Min</option>
                    <option value='Average'>00</option>
					<option value='Athletic'>01</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setoeriod(e.target.value)} value={period}>
                    <option value='Slim'>AM/PM</option>
                    <option value='Average'>AM</option>
					<option value='Athletic'>PM</option>
                  </Select>
				  </div>
                </Label>

				<Label className="mt-4">
                  <span>Place of Birth</span>
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => setcountry(e.target.value)} value={country}>
                    <option value='Slim'>Select Country</option>
                    <option value='Average'>0</option>
					<option value='Athletic'>1</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setstate(e.target.value)} value={state}>
                    <option value='Slim'>Select State</option>
                    <option value='Average'>00</option>
					<option value='Athletic'>01</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setcity(e.target.value)} value={city}>
                    <option value='Slim'>Select City</option>
                    <option value='Average'>AM</option>
					<option value='Athletic'>PM</option>
                  </Select>
				  </div>
                </Label>

            </div>
          </main>

		  <PageTitle>Family Information</PageTitle>
	  <main className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">Login</h1>
			  <Label className="mt-4">
                  <span>Father Status</span>
                  <Select className="mt-1" onChange={(e) => setfatherstatust(e.target.value)} value={fatherstatus}>
                    <option value='Slim'>Vegetarian</option>
                    <option value='Average'>Non-Vegetarian</option>
					<option value='Athletic'>Eggetarian</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Mother Status</span>
                  <Select className="mt-1" onChange={(e) => setmotherstatus(e.target.value)} value={motherstatus}>
                    <option value='NO'>nO</option>
                    <option value='Average'>Drinks Socially</option>
					<option value='Athletic'>Yes</option>
                  </Select>
                </Label>
				<Label className="mt-4">
                  <span>Brothers</span>
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => setnoOfBrothers(e.target.value)} value={noOfBrothers}>
                    <option value='Slim'>Number Of Brothers</option>
                    <option value='Average'>1</option>
					<option value='Athletic'>2</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setbrothersstatus(e.target.value)} value={brothersstatus}>
                    <option value='Slim'>Brothers Married</option>
                    <option value='Average'>Occasially</option>
					<option value='Athletic'>Yes</option>
                  </Select>
				 </div>
                </Label>
				<Label className="mt-4">
                  <span>Sisters</span>
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => setnoOfSisiters(e.target.value)} value={noOfSisiters}>
                    <option value='Slim'>Number Of Sisters</option>
                    <option value={1}>1</option>
					<option value={2}>2</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setsistersstatus(e.target.value)} value={sistersstatus}>
                    <option value='Slim'>Sisters Married</option>
                    <option value='Average'>None</option>
					<option value='Athletic'>1</option>
                  </Select>
				 </div>
                </Label>

				<div className="mt-4">
          {/* TODO: Check if this label is accessible, or fallback */}
          {/* <span className="text-sm text-gray-700 dark:text-gray-400">Account Type</span> */}
          <Label>Family Location</Label>
          <div className="mt-2">
            <Label radio>
              <Input type="radio" value="same" name="accountType" onClick={(e) => setisdifferent(!isdifferent)}/>
              <span className="ml-2"> Same as my Location</span>
            </Label>
            <Label className="ml-6" radio>
              <Input type="radio" value="different" name="accountType" onClick={(e) => setisdifferent(true)}/>
              <span className="ml-2">Different Location</span>
            </Label>
          </div>
        </div>
            {
				isdifferent && 
				<Label className="mt-4">
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => setpcountry(e.target.value)} value={pcountry}>
                    <option value='Slim'>Select Country</option>
                    <option value='Average'>0</option>
					<option value='Athletic'>1</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setpstate(e.target.value)} value={pstate}>
                    <option value='Slim'>Select State</option>
                    <option value='Average'>00</option>
					<option value='Athletic'>01</option>
                  </Select>
				  <Select className="mt-1" onChange={(e) => setpcity(e.target.value)} value={pcity}>
                    <option value='Slim'>Select City</option>
                    <option value='Average'>AM</option>
					<option value='Athletic'>PM</option>
                  </Select>
				  </div>
                </Label>
			}
				<Label className="mt-4">
                  <span>Parent's Contact No.</span>
                  <div className='flex'>
				  <Select className="mt-1" onChange={(e) => setpcountrycode(e.target.value)} value={pcountrycode}>
                    <option value='Slim'>Select country</option>
                    <option value='Average'>us</option>
					<option value='Athletic'>uk</option>
                  </Select>
				  <Input className="mt-1" placeholder="Enter Mother" onChange={(e) => setpmobile(e.target.value)}/>
				 </div>
                </Label>
				<Label>
					  <span>Ancestral Origin</span>
					  <Input className="mt-1" placeholder="Enter Your Ancestral Origin" onChange={(e) => setAncestral(e.target.value)}/>
				  </Label>
            </div>
          </main>
          <button onClick={submit}>
            submit
          </button>
    </>
  )
}

export default Blank
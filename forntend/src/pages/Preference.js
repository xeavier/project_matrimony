import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Multiselect from 'multiselect-react-dropdown';

import { preferencesCreateanduUpdate, detailsPreferences } from '../actions/preferenceAction';

import PageTitle from '../components/Typography/PageTitle'
import CTA from '../components/CTA'
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from '@windmill/react-ui'
import { Input, HelperText, Label, Select, Textarea } from '@windmill/react-ui'
import { HeartIcon, EditIcon } from '../icons'

function Blank() {
  const userSignin = useSelector(state => state.userSignin);
  const { loading, userInfo, error } = userSignin;
  const preferenceDetails = useSelector(state => state.preferenceDetails);
  const { loading: loadingDetails, performance, error: errorDetails } = preferenceDetails;
  const preferenceCreateUpdate = useSelector((state) => state.preferenceCreateUpdate);
	const {
	  loading: loadingSave,
	  success: successSave,
	  error: errorSave,
	} = preferenceCreateUpdate;
	const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [params, setparams] = useState('ages')
  //const [options, setoptions] = useState([{ name: 'Option 1️⃣', id: 1 }, { name: 'Option 2️⃣', id: 2 }])
  const [options, setoptions] = useState([
		{
			'name': 'Joint',
			'value': 'Joint'
		},
		{
			'name': 'Nuclear',
			'value': 'Nuclear'
		}
	]);

  const [ageFrom, setageFrom] = useState(22);
  const [agesTo, setagesTo] = useState(30);

  const [heightFrom, setheightFrom] = useState(12);
  const [heightsTo, setheightsTo] = useState(20);

  const [martial_status, setmartial_status] = useState();
  const [mother_tounge, setmother_tounge] = useState();
  const [physucal_status, setphysucal_status] = useState();
  const [eating_habits, seteating_habits] = useState();
  const [drinking_habits, setdrinking_habits] = useState();
  const [Smoking_habits, setSmoking_habits] = useState();

  const [religion, setreligion] = useState();
  const [caste, setcaste] = useState();
  const [dhosam, setdhosam] = useState();
  const [star, setstar] = useState();

  const [Education, setEducation] = useState();
  const [Employedin, setEmployedin] = useState();
  const [Occupation, setOccupation] = useState();

  const [location, setlocation] = useState();

  const [about, setabout] = useState();

  function openModal(e) {
    setIsModalOpen(true)
    const value2 = e.currentTarget.getAttribute("data-value")
    setparams(value2)
    if (params == 'ages') {

    }
    console.log(value2)
  }

  function submit() {
    console.log({
      ageFrom,agesTo,heightFrom,heightsTo,martial_status,mother_tounge,physucal_status,eating_habits,
      drinking_habits,Smoking_habits,religion,caste,dhosam,star,Education,Employedin,Occupation,location,
      about
    });
    const _id = userInfo.preferenceid
    dispatch(preferencesCreateanduUpdate({
      _id, ageFrom,agesTo,heightFrom,heightsTo,martial_status,mother_tounge,physucal_status,eating_habits,
      drinking_habits,Smoking_habits,religion,caste,dhosam,star,Education,Employedin,Occupation,location,
      about
    }));
  }

  function closeModal() {
    setIsModalOpen(false)
  }
  function onSelectMartialStatus(selectedList, selectedItem) {
    setmartial_status(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(martial_status)
  }
  function onSelectMotherTounge(selectedList, selectedItem) {
    setmother_tounge(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(martial_status)
  }
  function onSelectPhysicalStatus(selectedList, selectedItem) {
    setphysucal_status(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(physucal_status)
  }
  function onSelectEatingHabits(selectedList, selectedItem) {
    seteating_habits(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(eating_habits)
  }
  function onSelectDrinkingHabts(selectedList, selectedItem) {
    setdrinking_habits(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(drinking_habits)
  }
  function onSelectSmokingHabits(selectedList, selectedItem) {
    setSmoking_habits(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(Smoking_habits)
  }
////////////////////////////////////////////////////////////////////////////////////////////////////
  function onSelectReligion(selectedList, selectedItem) {
    setreligion(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(religion)
  }
  function onSelectCaste(selectedList, selectedItem) {
    setcaste(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(caste)
  }
  function onSelectDhosam(selectedList, selectedItem) {
    setdhosam(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(dhosam)
  }
  function onSelectStar(selectedList, selectedItem) {
    setstar(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(star)
  }
  ////////////////////////////////////////////////////////////////////////////////////////////////////
  function onSelectEducation(selectedList, selectedItem) {
    setEducation(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(Education)
  }
  function onSelectEmployedIn(selectedList, selectedItem) {
    setEmployedin(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(Employedin)
  }
  function onSelectOccupation(selectedList, selectedItem) {
    setOccupation(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(Occupation)
  }
    ////////////////////////////////////////////////////////////////////////////////////////////////////
    function onSelectLocation(selectedList, selectedItem) {
      setlocation(selectedList)
      //console.log(selectedList, selectedItem)
      console.log(location)
    }
  function onSelect(selectedList, selectedItem) {
    setmartial_status(selectedList)
    //console.log(selectedList, selectedItem)
    console.log(martial_status)
  }
  ///////////////////////////////////////////////////
  function onRemoveMartialStatus(selectedList, removedItem) {
    setmartial_status(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveMotherTongue(selectedList, removedItem) {
    setmother_tounge(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemovePhysicalStatus(selectedList, removedItem) {
    setphysucal_status(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveEatingHabits(selectedList, removedItem) {
    seteating_habits(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveDrinkingHabits(selectedList, removedItem) {
    setdrinking_habits(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveSmokingHabits(selectedList, removedItem) {
    setSmoking_habits(selectedList)
    //console.log(selectedList, removedItem)
  }
  ////////////////////////////////////////////
  function onRemoveReligion(selectedList, removedItem) {
    setreligion(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveCaste(selectedList, removedItem) {
    setcaste(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveDhosam(selectedList, removedItem) {
    setdhosam(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveStar(selectedList, removedItem) {
    setstar(selectedList)
    //console.log(selectedList, removedItem)
  }
  /////////////////////////////////////////
  function onRemoveEducation(selectedList, removedItem) {
    setEducation(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveEmployedIn(selectedList, removedItem) {
    setEmployedin(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemoveOccupation(selectedList, removedItem) {
    setOccupation(selectedList)
    //console.log(selectedList, removedItem)
  }
  /////////////////////////////////////////////
  function onRemoveLocation(selectedList, removedItem) {
    setlocation(selectedList)
    //console.log(selectedList, removedItem)
  }
  function onRemove(selectedList, removedItem) {
    setmartial_status(selectedList)
    //console.log(selectedList, removedItem)
  }
  useEffect(() => {
    console.log(userInfo)
    dispatch(detailsPreferences(userInfo.preferenceid))
    if (performance) {
      // props.history.push(redirect);
      console.log(performance._id)
    }
    return () => {
      //
    };
  }, []);
  return (
    <>
      <PageTitle>Basic Preferences</PageTitle>
      <Label className="mt-4">
        <span>Groom's Age</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{ageFrom}</p > <span className='text-2x font-semibold text-gray-700 dark:text-gray-200'>-</span> <p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{agesTo}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="ages" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Height</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{heightFrom}</p > <span className='text-2x font-semibold text-gray-700 dark:text-gray-200'>-</span> <p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{heightsTo}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="heights" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Martial Status</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>
        {martial_status}
  </p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="martial_status" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Mother Tongue</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{mother_tounge}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="mother_tounge" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Physical Status</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{physucal_status && physucal_status}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Physical Status" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Eating Habits</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{eating_habits && eating_habits}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Eating Habits" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Drinking Habits</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{drinking_habits && drinking_habits}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Drinking Habits" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Smoking Habits</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{Smoking_habits && Smoking_habits}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Smoking Habits" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>

      <PageTitle>Religious Prefrence</PageTitle>
      <Label className="mt-4">
        <span>Religion</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{religion && religion}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Religion" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Caste</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{caste && caste}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Caste" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Star</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{star && star}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Star" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>

      <PageTitle>Professional Preferences</PageTitle>
      <Label className="mt-4">
        <span>Education</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{Education && Education}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Education" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Employed In</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{Employedin && Employedin}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Employed In" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      <Label className="mt-4">
        <span>Occupation</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{Occupation && Occupation}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Occupation" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      {/* /////////// */}
      {/* <Label className="mt-4">
        <span>Annual Income</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{annualincome && annualincome.map((m) =>
  <li key={m.id}>{m.name}</li>
)}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Annual Income" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div> */}

      <PageTitle>Location Preferences</PageTitle>
      <Label className="mt-4">
        <span>Country</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{location && location}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="Country" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      <PageTitle>Location Preferences</PageTitle>
      <Label className="mt-4">
        <span>What we are looking for</span>
      </Label>
      <div className='flex items-center justify-between'>
        <div className='flex items-center'><p className='text-2x font-semibold text-gray-700 dark:text-gray-200'>{about ? about : 'Not Specified'}</p ></div>
        <div className='flex items-center '>
          <div className='mr-2'>
            <Button icon={EditIcon} aria-label="Edit" onClick={openModal} data-value="What we are looking for" />
          </div>
          <Label className="mt-6" check>
            <Input type="checkbox" />
            <span className="ml-2">
            </span>
          </Label>
        </div>
      </div>
      <div>
        <Button onClick={openModal}>Open modal</Button>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        {
          params === 'ages' &&
          <div>
            <ModalHeader>Basic Preferences</ModalHeader>
            <ModalBody>
              <Label className="mt-4">
                <span>From</span>
                <Select className="mt-1" onChange={(e) => setageFrom(e.target.value)} value={ageFrom}>
                  <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option>
                </Select>
              </Label>
              <Label className="mt-4">
                <span>To</span>
                <Select className="mt-1" onChange={(e) => setagesTo(e.target.value)} value={agesTo}>
                  <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option>
                </Select>
              </Label>
            </ModalBody>
          </div>
        }
        {params === 'heights' &&
          <div>
            <ModalHeader>Preferred Height</ModalHeader>
            <ModalBody>
              <Label className="mt-4">
                <span>From</span>
                <Select className="mt-1" onChange={(e) => setheightFrom(e.target.value)} value={heightFrom}>
                  <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option>
                </Select>
              </Label>
              <Label className="mt-4">
                <span>To</span>
                <Select className="mt-1" onChange={(e) => setheightsTo(e.target.value)} value={heightsTo}>
                  <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option>
                </Select>
              </Label>
            </ModalBody>
          </div>
        }
        {params === 'martial_status' &&
          <div>
            <ModalHeader>Martial Statust</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={martial_status} // Preselected value to persist in dropdown
                onSelect={onSelectMartialStatus} // Function will trigger on select event
                onRemove={onRemoveMartialStatus} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setmartial_status(e.target.value)} value={martial_status}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'mother_tounge' &&
          <div>
            <ModalHeader>Mother Tounge</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={mother_tounge} // Preselected value to persist in dropdown
                onSelect={onSelectMotherTounge} // Function will trigger on select event
                onRemove={onRemoveMotherTongue} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setmother_tounge(e.target.value)} value={mother_tounge}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Physical Status' &&
          <div>
            <ModalHeader>Physical Status</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={physucal_status} // Preselected value to persist in dropdown
                onSelect={onSelectPhysicalStatus} // Function will trigger on select event
                onRemove={onRemovePhysicalStatus} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
               <Select className="mt-1" onChange={(e) => setphysucal_status(e.target.value)} value={physucal_status}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Eating Habits' &&
          <div>
            <ModalHeader>Eating Habits</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={eating_habits} // Preselected value to persist in dropdown
                onSelect={onSelectEatingHabits} // Function will trigger on select event
                onRemove={onRemoveEatingHabits} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => seteating_habits(e.target.value)} value={eating_habits}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Drinking Habits' &&
          <div>
            <ModalHeader>Drinking Habits</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={drinking_habits} // Preselected value to persist in dropdown
                onSelect={onSelectDrinkingHabts} // Function will trigger on select event
                onRemove={onRemoveDrinkingHabits} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setdrinking_habits(e.target.value)} value={drinking_habits}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Smoking Habits' &&
          <div>
            <ModalHeader>Smoking Habits</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={Smoking_habits} // Preselected value to persist in dropdown
                onSelect={onSelectSmokingHabits} // Function will trigger on select event
                onRemove={onRemoveSmokingHabits} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setSmoking_habits(e.target.value)} value={Smoking_habits}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Religion' &&
          <div>
            <ModalHeader>Religion</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={religion} // Preselected value to persist in dropdown
                onSelect={onSelectReligion} // Function will trigger on select event
                onRemove={onRemoveReligion} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
                singleSelect={true}
              /> */}
              <Select className="mt-1" onChange={(e) => setreligion(e.target.value)} value={religion}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Caste' &&
          <div>
            <ModalHeader>Caste</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={caste} // Preselected value to persist in dropdown
                onSelect={onSelectCaste} // Function will trigger on select event
                onRemove={onRemoveCaste} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setcaste(e.target.value)} value={caste}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Dosham' &&
          <div>
            <ModalHeader>Dosham</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={dhosam} // Preselected value to persist in dropdown
                onSelect={onSelectDhosam} // Function will trigger on select event
                onRemove={onRemoveDhosam} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setdhosam(e.target.value)} value={dhosam}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
        {params === 'Star' &&
          <div>
            <ModalHeader>Star</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={star} // Preselected value to persist in dropdown
                onSelect={onSelectStar} // Function will trigger on select event
                onRemove={onRemoveStar} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setstar(e.target.value)} value={star}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
                {params === 'Education' &&
          <div>
            <ModalHeader>Education</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={Education} // Preselected value to persist in dropdown
                onSelect={onSelectEducation} // Function will trigger on select event
                onRemove={onRemoveEducation} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setEducation(e.target.value)} value={Education}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
                {params === 'Employed In' &&
          <div>
            <ModalHeader>Employed In</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={Employedin} // Preselected value to persist in dropdown
                onSelect={onSelectEmployedIn} // Function will trigger on select event
                onRemove={onRemoveEmployedIn} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setEmployedin(e.target.value)} value={setEmployedin}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
                {params === 'Occupation' &&
          <div>
            <ModalHeader>Occupation</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={Occupation} // Preselected value to persist in dropdown
                onSelect={onSelectOccupation} // Function will trigger on select event
                onRemove={onRemoveOccupation} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setOccupation(e.target.value)} value={Occupation}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
         {/* {params === 'Annual Income' &&
          <div>
            <ModalHeader>Annual Income</ModalHeader>
            <ModalBody>
              <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={annualincome} // Preselected value to persist in dropdown
                onSelect={onSelect} // Function will trigger on select event
                onRemove={onRemove} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              />
            </ModalBody>
          </div>
        } */}
                        {params === 'Country' &&
          <div>
            <ModalHeader>Country</ModalHeader>
            <ModalBody>
              {/* <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues={location} // Preselected value to persist in dropdown
                onSelect={onSelectLocation} // Function will trigger on select event
                onRemove={onRemoveLocation} // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
              /> */}
              <Select className="mt-1" onChange={(e) => setlocation(e.target.value)} value={location}>
                  {/* <option value='Education 1'>Education 1</option>
                  <option value='Education 2'>Education 2</option> */}
                  {options.map((l, i) => (
										  <option value={l.value}>{l.name}</option>
							  ))}
                </Select>
            </ModalBody>
          </div>
        }
                                {params === 'What we are looking for' &&
          <div>
            <ModalHeader>What we are looking for</ModalHeader>
            <ModalBody>
            <Label className="mt-4">
          <Textarea className="mt-1" rows="3" placeholder="Enter some long form content." onChange={(e) => setabout(e.target.value)} value={about}/>
        </Label>
            </ModalBody>
          </div>
        }
        <ModalFooter>
          {/* I don't like this approach. Consider passing a prop to ModalFooter
           * that if present, would duplicate the buttons in a way similar to this.
           * Or, maybe find some way to pass something like size="large md:regular"
           * to Button
           */}
          <div className="hidden sm:block">
            <Button layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="hidden sm:block">
            <Button>Accept</Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large" layout="outline" onClick={closeModal}>
              Cancel
            </Button>
          </div>
          <div className="block w-full sm:hidden">
            <Button block size="large">
              Accept
            </Button>
          </div>
        </ModalFooter>
      </Modal>
      <button onClick={submit}>
            submit
          </button>
    </>
  )
}

export default Blank
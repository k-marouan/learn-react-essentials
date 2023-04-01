import React, { Fragment, useState } from 'react'
import AddUser from '../components/AddUser/AddUser';
import CardList from '../components/CardList/CardList';
import FilterInput from '../components/FilterInput/FilterInput';
import Button from '../components/Layout/Button';
import Modal from '../components/Modal/Modal';
import styles from "./App.module.css"
const App = () => {

    const [cardToggle, setCardToggle] = useState(true);
    const [filter, setFilter] = useState("");
    const [showModal, setShowModal] = useState(false);
    const [familyNames, setFamilyNames] = useState([
        {
            id:1000,
            name: "MAROUAN",
            age: 35,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "family"
        },
        {
            id:2000,
            name: "YOSRA",
            age: 8,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "family"
        },
        {
            id:3000,
            name: "BASMA",
            age: 4,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "family"
        },
        {
            id:4000,
            name: "ALI",
            age: 35,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "friend"
        },
        {
            id:5000,
            name: "HASSAN",
            age: 8,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "friend"
        },
        {
            id:6000,
            name: "AHMED",
            age: 4,
            adress: "Beni Mellal",
            phone: "+16632525656",
            type: "friend"
        },
    ]);

  const addNewUserHandler = (data) => {
    console.log("data : ", data);
    // setFamilyNames((prevSate) => {
    //         return setFamilyNames([...prevSate, data])
    //     });
    setFamilyNames([ ...familyNames, data]);
    console.log("familyNames : ", familyNames);
 }

  const deleteHandler = (element, selectedID) => {

    setFamilyNames((prevSate) => {
        return prevSate.filter((elt) => elt.id !== selectedID);
    });
};

const toggleHandler = () => {
    setCardToggle(!cardToggle);
};

const filterNamers = (name) => {
    setFilter(name);
};

const namesHandler = () => {
    if(filter.length !== 0){
        return familyNames.filter((elt) => elt.name.includes(filter));
    }
    return familyNames;
};

  return (
    <Fragment>
        <div className={styles.mainContainer}>
        <h1>Data of Names</h1>
        <div className={{display: "flex"}}>
            <Button 
                onClick={() => setCardToggle(!cardToggle)}
                style={styles.button}
                >
                {cardToggle ? "Hide Names" : "Show Names"}
            </Button>
            
            <Button
            onClick={() => setShowModal(true)}
            style={styles.button}
            >
            New Record
            </Button>
        </div>
        <div className={cardToggle ? styles.show : styles.hide}>
                <FilterInput filteration={filterNamers} />            
                <CardList namesList={namesHandler()} deleteName={deleteHandler} />
        </div>
        </div>
        <Modal show={showModal} close={() => setShowModal(false)}>
            <AddUser addNewUserHandler={addNewUserHandler} close={() => setShowModal(false)} />
        </Modal>
    </Fragment>
  )
}

export default App
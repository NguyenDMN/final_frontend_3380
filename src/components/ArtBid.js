import { useEffect, useState } from 'react';
import axios from 'axios';


function ArtBid(props){

    const [bidUsers, setBidUsers] = useState([]);
    const [artId, setArtId] = useState([]);

    useEffect(() => {
        
        setBidUsers(props.art.bids);
        setArtId(props.art._id);
        
      }, []);


    const userList = 
    bidUsers.lenth === 0 ? '':bidUsers.map((eachUser) => (
               
        <li><strong>{eachUser.user}:</strong> {eachUser.bid}</li>
        
    ))

    const [userName, setUserName] = useState([]);
    const [bidPrice, setBidPrice] = useState([]);


    
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(userName);
        console.log(bidPrice);


        const {bidInfor} = {
            user: userName,
            bid: bidPrice
        }

        axios.post('https://final3380-backend.onrender.com/api/art/add', {
        artId,
        bidInfor
        });


    };
 

    return (
        <div className="photo-container">
            {/* src to be from the data alt */}
            <div className="photo">
                <img src={props.art.src} alt={props.art.alt} width="200"/>
            </div>

            {/* add user to array */}

            <div className="comments-section">
                <div>
                    <h4>Bids</h4>
                    <ul>
                        {/* <li><strong>User1:</strong> $100</li> */}
                        {userList}
                    </ul>
                </div>
            </div>

            {/* post method to add new user */}
            <div className="addbid">
                <form className="comment-form" onSubmit={onSubmit}>
                    <input type="text" placeholder="Your name" name="userName" onChange={(e) => setUserName(e.target.value)}></input>
                    <input type="number" placeholder="Add a higher bid" name="bidPrice" onChange={(e) => setBidPrice(e.target.value)}></input>
                    <button type="submit">Submit Your Higher Bid</button>
                    </form>
            </div>



        </div>
    )
}

export default ArtBid;
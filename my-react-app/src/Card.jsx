import profilePic from './assets/holding-off-the-competition.avif'
function Card(){
    return(
        <div className="card">
            <img  className="card-image"src={profilePic} alt="profile picture"></img>
            <h2>Arhaan Ali</h2>
            <p>I am learning React at the moment</p>

        </div>

    );
}
export default Card
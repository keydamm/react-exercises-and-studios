export default function HobbyLinks() {
    let hobbyLinks = ["https://modedesigns.com/", "https://noraborealis.com/", "https://store.steampowered.com/", "https://cozyleigh.studio/"];
    return (
    <div>
        <h3>My Hobbies</h3>
        <p><a href = {hobbyLinks[0]}>Mode Keyboards</a></p>
        <p><a href = {hobbyLinks[1]}>Terrible, Thanks For Asking</a></p>
        <p><a href = {hobbyLinks[2]}>Video Games</a></p>
        <p><a href = {hobbyLinks[3]}>Cozy Studio</a> </p>
    </div>   
    );
}